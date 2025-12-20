import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  image: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'tendances-web-design-2024',
    title: 'Les tendances du web design en 2024 : Ce que vous devez savoir',
    excerpt: 'Découvrez les dernières tendances en matière de design web qui domineront l\'année 2024, du minimalisme audacieux aux animations immersives.',
    content: `Le monde du web design évolue constamment, et 2024 ne fait pas exception. Cette année, nous observons une fusion fascinante entre l'esthétique et la fonctionnalité.

## Le minimalisme audacieux

Le minimalisme n'est pas nouveau, mais en 2024, il prend une nouvelle dimension. Les designers optent pour des espaces blancs généreux combinés à des éléments graphiques audacieux. Cette approche permet de créer des interfaces épurées tout en captivant l'attention des utilisateurs.

## Les micro-interactions

Les micro-interactions sont devenues essentielles pour créer une expérience utilisateur engageante. Ces petites animations subtiles guident l'utilisateur et ajoutent une dimension ludique à la navigation.

## Le dark mode par défaut

De plus en plus de sites adoptent le mode sombre comme option par défaut. Non seulement cela réduit la fatigue oculaire, mais cela permet également d'économiser de l'énergie sur les écrans OLED.

## La typographie expressive

La typographie devient un élément central du design. Les polices personnalisées et les tailles de caractères variables permettent de créer des hiérarchies visuelles fortes et mémorables.

## Conclusion

Ces tendances reflètent une évolution vers des expériences web plus immersives et personnalisées. En tant qu'agence web, nous intégrons ces innovations dans chacun de nos projets pour offrir à nos clients des sites à la pointe de la technologie.`,
    category: 'Design',
    tags: ['Web Design', 'Tendances', 'UI/UX', '2024'],
    author: 'Amadou Diallo',
    authorRole: 'Directeur Créatif',
    publishedAt: '2024-01-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop',
  },
  {
    id: '2',
    slug: 'seo-local-senegal',
    title: 'SEO Local au Sénégal : Guide complet pour dominer Google',
    excerpt: 'Apprenez à optimiser votre présence en ligne pour les recherches locales au Sénégal et attirer plus de clients dans votre zone géographique.',
    content: `Le SEO local est crucial pour les entreprises sénégalaises qui souhaitent attirer des clients de leur région. Voici notre guide complet pour dominer les résultats de recherche locaux.

## Qu'est-ce que le SEO local ?

Le SEO local consiste à optimiser votre présence en ligne pour apparaître dans les résultats de recherche géolocalisés. Quand quelqu'un cherche "restaurant Dakar" ou "agence web Sénégal", Google affiche des résultats pertinents pour cette zone.

## Optimisez votre fiche Google My Business

C'est la première étape essentielle. Créez et optimisez votre fiche Google My Business avec :
- Des informations complètes et à jour
- Des photos de qualité de votre établissement
- Les horaires d'ouverture
- Les avis clients

## Les mots-clés locaux

Intégrez des mots-clés géographiques dans votre contenu :
- "Agence web à Dakar"
- "Développeur web Sénégal"
- "Création site internet Ouest Foire"

## Les citations locales

Inscrivez votre entreprise sur les annuaires locaux et les plateformes pertinentes au Sénégal. La cohérence des informations (nom, adresse, téléphone) est primordiale.

## Conclusion

Le SEO local demande du temps et de la constance, mais les résultats en valent la peine. Une bonne stratégie peut significativement augmenter votre visibilité auprès de clients potentiels dans votre zone.`,
    category: 'Marketing',
    tags: ['SEO', 'Marketing Digital', 'Sénégal', 'Google'],
    author: 'Fatou Ndiaye',
    authorRole: 'Spécialiste SEO',
    publishedAt: '2024-01-10',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop',
  },
  {
    id: '3',
    slug: 'react-vs-nextjs-2024',
    title: 'React vs Next.js : Quel framework choisir en 2024 ?',
    excerpt: 'Une comparaison détaillée entre React et Next.js pour vous aider à choisir la meilleure technologie pour votre prochain projet web.',
    content: `Le choix entre React et Next.js est une question fréquente chez les développeurs et les entreprises. Analysons les forces de chacun.

## React : La bibliothèque flexible

React reste la bibliothèque JavaScript la plus populaire pour construire des interfaces utilisateur. Ses avantages :
- Grande flexibilité dans l'architecture
- Écosystème riche de packages
- Communauté massive et active
- Parfait pour les SPA (Single Page Applications)

## Next.js : Le framework full-stack

Next.js est construit sur React et ajoute des fonctionnalités puissantes :
- Rendu côté serveur (SSR) natif
- Génération de sites statiques (SSG)
- Routing basé sur les fichiers
- Optimisation automatique des images
- API Routes intégrées

## Quand choisir React ?

- Applications internes d'entreprise
- Projets nécessitant une architecture personnalisée
- Équipes déjà familières avec React

## Quand choisir Next.js ?

- Sites nécessitant un bon SEO
- E-commerce et sites marketing
- Applications nécessitant SSR ou SSG
- Projets avec des contraintes de performance

## Notre recommandation

Chez LAPS, nous utilisons les deux selon les besoins. Pour les sites vitrines et e-commerce, Next.js est souvent notre choix. Pour les applications complexes, React avec une architecture personnalisée reste pertinent.`,
    category: 'Développement',
    tags: ['React', 'Next.js', 'JavaScript', 'Frontend'],
    author: 'Moussa Sow',
    authorRole: 'Lead Développeur',
    publishedAt: '2024-01-05',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
  },
  {
    id: '4',
    slug: 'reseaux-sociaux-entreprise-afrique',
    title: 'Stratégie réseaux sociaux pour les entreprises africaines',
    excerpt: 'Comment construire une présence sociale efficace pour votre entreprise en Afrique de l\'Ouest avec des conseils adaptés au marché local.',
    content: `Les réseaux sociaux sont devenus incontournables pour les entreprises africaines. Voici comment construire une stratégie efficace adaptée à notre marché.

## Comprendre votre audience locale

Le comportement des utilisateurs africains sur les réseaux sociaux diffère des marchés occidentaux :
- WhatsApp est le canal de communication principal
- Facebook reste très populaire, surtout chez les 25-45 ans
- Instagram gagne du terrain chez les jeunes urbains
- TikTok explose chez la génération Z

## Choisir les bonnes plateformes

Ne soyez pas partout. Concentrez-vous sur 2-3 plateformes où votre audience est présente.

### Pour le B2C
- WhatsApp Business pour le service client
- Facebook pour la visibilité
- Instagram pour le visuel

### Pour le B2B
- LinkedIn pour le networking professionnel
- WhatsApp pour les relations commerciales

## Créer du contenu local

Le contenu qui résonne avec votre audience doit :
- Utiliser les langues locales quand pertinent
- Refléter la culture et les valeurs locales
- Aborder des problématiques que vos clients connaissent

## L'importance de WhatsApp Business

Au Sénégal, WhatsApp est roi. Intégrez-le dans votre stratégie :
- Catalogue de produits
- Réponses automatiques
- Statuts pour les promotions

## Conclusion

Une stratégie réseaux sociaux réussie en Afrique nécessite une compréhension profonde du marché local et une adaptation constante aux habitudes de votre audience.`,
    category: 'Marketing',
    tags: ['Réseaux Sociaux', 'Afrique', 'WhatsApp', 'Stratégie'],
    author: 'Aïssatou Ba',
    authorRole: 'Community Manager',
    publishedAt: '2023-12-28',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
  },
  {
    id: '5',
    slug: 'securite-site-web-2024',
    title: 'Sécurité web : Protégez votre site contre les cyberattaques',
    excerpt: 'Les meilleures pratiques pour sécuriser votre site web et protéger les données de vos utilisateurs contre les menaces actuelles.',
    content: `La sécurité web n'est plus une option, c'est une nécessité. Découvrez comment protéger votre site et vos utilisateurs.

## Les menaces courantes

### Injection SQL
Les attaques par injection SQL permettent aux hackers d'accéder à votre base de données. Utilisez des requêtes préparées et validez toutes les entrées utilisateur.

### Cross-Site Scripting (XSS)
Le XSS permet l'injection de scripts malveillants. Échappez toujours le contenu généré par les utilisateurs.

### Attaques par force brute
Protégez vos formulaires de connexion avec :
- Limitation du nombre de tentatives
- CAPTCHA
- Authentification à deux facteurs

## Les bonnes pratiques essentielles

### HTTPS obligatoire
Installez un certificat SSL et forcez HTTPS sur tout votre site. C'est aussi un facteur de ranking SEO.

### Mises à jour régulières
Gardez votre CMS, plugins et dépendances à jour. Les failles de sécurité sont souvent corrigées dans les nouvelles versions.

### Sauvegardes automatiques
Configurez des sauvegardes automatiques quotidiennes. En cas d'attaque, vous pourrez restaurer votre site rapidement.

### Politique de mots de passe
Exigez des mots de passe forts et encouragez l'utilisation de gestionnaires de mots de passe.

## Conclusion

Investir dans la sécurité web protège votre entreprise et renforce la confiance de vos clients. N'attendez pas d'être victime d'une attaque pour agir.`,
    category: 'Développement',
    tags: ['Sécurité', 'Cybersécurité', 'HTTPS', 'Protection'],
    author: 'Ibrahima Fall',
    authorRole: 'Expert Sécurité',
    publishedAt: '2023-12-20',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
  },
  {
    id: '6',
    slug: 'conversion-site-web-ecommerce',
    title: 'Augmentez vos conversions e-commerce : 10 techniques prouvées',
    excerpt: 'Découvrez les stratégies qui ont fait leurs preuves pour transformer vos visiteurs en clients sur votre boutique en ligne.',
    content: `Avoir du trafic c'est bien, convertir c'est mieux. Voici 10 techniques pour booster vos ventes en ligne.

## 1. Simplifiez le processus de checkout

Chaque étape supplémentaire est une opportunité d'abandon. Réduisez le nombre de champs et proposez l'achat en tant qu'invité.

## 2. Affichez la confiance

- Badges de sécurité
- Avis clients vérifiés
- Politique de retour claire
- Garanties visibles

## 3. Optimisez les pages produits

- Photos de haute qualité sous plusieurs angles
- Descriptions détaillées
- Spécifications techniques
- Vidéos de démonstration

## 4. Créez l'urgence

- Stock limité visible
- Compte à rebours pour les promotions
- Livraison gratuite à partir d'un montant

## 5. Proposez plusieurs moyens de paiement

Au Sénégal, incluez :
- Orange Money
- Wave
- Cartes bancaires
- Paiement à la livraison

## 6. Optimisez pour mobile

Plus de 60% du trafic e-commerce vient du mobile. Votre site doit être parfait sur smartphone.

## 7. Utilisez le remarketing

Reciblez les visiteurs qui n'ont pas converti avec des publicités personnalisées.

## 8. Offrez la livraison gratuite

C'est souvent le facteur décisif. Intégrez le coût dans vos prix si nécessaire.

## 9. Personnalisez l'expérience

Recommandations basées sur l'historique, emails personnalisés, offres ciblées.

## 10. Testez constamment

A/B testez vos pages pour trouver ce qui fonctionne le mieux avec votre audience.

## Conclusion

L'optimisation des conversions est un processus continu. Analysez vos données et améliorez constamment votre boutique.`,
    category: 'E-commerce',
    tags: ['E-commerce', 'Conversion', 'Ventes', 'UX'],
    author: 'Mariama Diop',
    authorRole: 'Consultante E-commerce',
    publishedAt: '2023-12-15',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
  },
];

const categories = ['Tous', 'Design', 'Développement', 'Marketing', 'E-commerce'];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredArticles = blogArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Actualités & Conseils
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Découvrez nos articles sur le développement web, le marketing digital et les dernières tendances du numérique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Aucun article trouvé pour cette recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/blog/${article.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-0">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.publishedAt)}
                        </div>
                        <span className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lire
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Restez informé
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Recevez nos derniers articles et conseils directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <button className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
