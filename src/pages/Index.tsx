import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Megaphone, Code, Palette, Briefcase, Headphones, Cloud } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ui/service-card';
import { SectionHeader } from '@/components/ui/section-header';
import { CheckCircle2, Users, Zap, Shield } from 'lucide-react';

const services = [
  {
    title: 'Marketing Digital',
    description: 'Stratégies publicitaires innovantes, gestion des réseaux sociaux, campagnes ciblées et analyse des performances.',
    icon: Megaphone,
    href: '/services/marketing-digital',
  },
  {
    title: 'Développement & Technologie',
    description: 'Création de sites web et applications, gestion de logiciels, automatisation des process, solutions digitales sur mesure.',
    icon: Code,
    href: '/services/developpement-technologie',
  },
  {
    title: 'Design & Communication',
    description: 'Identité visuelle & branding, supports graphiques et print, UX/UI design pour des expériences mémorables.',
    icon: Palette,
    href: '/services/design-communication',
  },
  {
    title: 'Business & Conseil',
    description: 'Études de marché et veille concurrentielle, stratégie commerciale, accompagnement des startups et PME.',
    icon: Briefcase,
    href: '/services/business-conseil',
  },
  {
    title: 'Support & Formation',
    description: 'Assistance technique et service client, formations digitales, ateliers pratiques pour vos équipes.',
    icon: Headphones,
    href: '/services/support-formation',
  },
  {
    title: 'Abonnement & Solutions Tech',
    description: 'Abonnements Netflix et IPTV, augmentation de stockage cloud ou mail, décodage et réparation téléphone et ordinateur.',
    icon: Cloud,
    href: '/services/abonnement-solutions-tech',
  },
];

const whyUs = [
  {
    icon: Users,
    title: 'Expertise locale',
    description: 'Une équipe qui comprend les enjeux du marché sénégalais et africain.',
  },
  {
    icon: Zap,
    title: 'Approche sur mesure',
    description: 'Des solutions personnalisées adaptées à vos besoins spécifiques.',
  },
  {
    icon: Shield,
    title: 'Accompagnement complet',
    description: 'De la conception à la mise en œuvre, nous vous suivons à chaque étape.',
  },
  {
    icon: CheckCircle2,
    title: 'Réactivité garantie',
    description: 'Un support rapide et efficace pour répondre à toutes vos demandes.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-hero overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6"
              >
                Agence Digitale à Dakar
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                LAPS – Votre passerelle vers{' '}
                <span className="text-accent">l'excellence digitale</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Nous accompagnons les entreprises sénégalaises et africaines dans leur transformation numérique avec des solutions innovantes et sur mesure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="cta">
                  <Link to="/#services">
                    Découvrir nos services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="hero">
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-3xl bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center animate-float">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-accent-foreground">L</span>
                    </div>
                    <p className="text-primary-foreground/90 font-medium text-lg">Innovation • Créativité • Excellence</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-accent/20 backdrop-blur border border-accent/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <Code className="w-10 h-10 text-accent" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur border border-accent/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Palette className="w-8 h-8 text-accent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nos Services"
            title="Pôles d'expertise"
            description="Des solutions complètes pour accompagner votre croissance digitale"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Pourquoi LAPS ?"
            title="Pourquoi nous choisir ?"
            description="Une équipe passionnée dédiée à votre réussite digitale"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Vous avez un projet ?{' '}
              <span className="text-accent">Discutons-en</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Notre équipe est prête à vous accompagner dans la réalisation de vos ambitions digitales. Contactez-nous pour une consultation gratuite.
            </p>
            <Button asChild size="lg" variant="cta">
              <Link to="/contact">
                Démarrer votre projet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
