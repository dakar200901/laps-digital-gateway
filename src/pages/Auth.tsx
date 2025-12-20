import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/admin');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/admin');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (error) throw error;
        toast({
          title: 'Connexion réussie',
          description: 'Bienvenue dans votre espace admin.',
        });
      } else {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`,
          },
        });
        if (error) throw error;
        toast({
          title: 'Inscription réussie',
          description: 'Vous pouvez maintenant vous connecter.',
        });
        setIsLogin(true);
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      let message = 'Une erreur est survenue.';
      if (error.message.includes('Invalid login credentials')) {
        message = 'Email ou mot de passe incorrect.';
      } else if (error.message.includes('User already registered')) {
        message = 'Cet email est déjà utilisé.';
      } else if (error.message.includes('Password should be')) {
        message = 'Le mot de passe doit contenir au moins 6 caractères.';
      }
      toast({
        title: 'Erreur',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-hero min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  {isLogin ? 'Connexion Admin' : 'Créer un compte'}
                </h1>
                <p className="text-muted-foreground text-sm">
                  {isLogin
                    ? 'Accédez à votre espace d\'administration'
                    : 'Créez votre compte administrateur'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@exemple.com"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                <Button type="submit" variant="cta" size="lg" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    'Chargement...'
                  ) : isLogin ? (
                    <>
                      <LogIn className="w-5 h-5" />
                      Se connecter
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      S'inscrire
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-accent hover:underline"
                >
                  {isLogin
                    ? "Pas encore de compte ? S'inscrire"
                    : 'Déjà un compte ? Se connecter'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
