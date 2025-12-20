import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Globe,
  Megaphone,
  Code,
  Palette,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';

// Project Images
import ecommerceProject from '@/assets/projects/ecommerce-project.jpg';
import restaurantProject from '@/assets/projects/restaurant-project.jpg';
import fitnessProject from '@/assets/projects/fitness-project.jpg';
import realestateProject from '@/assets/projects/realestate-project.jpg';
import healthcareProject from '@/assets/projects/healthcare-project.jpg';
import saasProject from '@/assets/projects/saas-project.jpg';

type Category = 'all' | 'marketing' | 'dev' | 'design' | 'business';

interface Project {
  id: string;
  title: string;
  client: string;
  category: Category;
  categoryLabel: string;
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 'techsenegal-marketing',
    title: 'Campagne de lancement produit',
    client: 'TechSenegal',
    category: 'marketing',
    categoryLabel: 'Marketing Digital',
    description: 'Stratégie de lancement complète pour une nouvelle application mobile B2B.',
    challenge: 'TechSenegal avait besoin de lancer sa nouvelle application de gestion en seulement 3 mois avec un budget limité, tout en atteignant les décideurs clés du marché sénégalais.',
    solution: 'Nous avons déployé une stratégie multicanale combinant LinkedIn Ads ciblé, marketing de contenu et partenariats avec des influenceurs B2B locaux.',
    results: [
      { label: 'Téléchargements', value: '+2500' },
      { label: 'Leads qualifiés', value: '+180' },
      { label: 'ROI campagne', value: '340%' },
      { label: 'Coût par lead', value: '-45%' },
    ],
    testimonial: {
      quote: 'LAPS a dépassé toutes nos attentes. Leur compréhension du marché local et leur créativité ont fait la différence.',
      author: 'Ibrahima Sarr',
      role: 'CEO, TechSenegal',
    },
    image: saasProject,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'modadakar-ecommerce',
    title: 'Refonte e-commerce complète',
    client: 'ModaDakar',
    category: 'dev',
    categoryLabel: 'Développement',
    description: 'Migration et refonte totale de la boutique en ligne vers une plateforme moderne.',
    challenge: 'L\'ancien site était lent, difficile à naviguer et le taux de conversion était très faible. Les clients abandonnaient leur panier à cause d\'un processus de paiement complexe.',
    solution: 'Développement d\'une nouvelle plateforme e-commerce sur mesure avec paiement mobile intégré (Orange Money, Wave), UX optimisée et gestion de stock automatisée.',
    results: [
      { label: 'Taux de conversion', value: '+185%' },
      { label: 'Temps de chargement', value: '-70%' },
      { label: 'Ventes mensuelles', value: '3x' },
      { label: 'Abandon panier', value: '-55%' },
    ],
    testimonial: {
      quote: 'Notre boutique en ligne génère maintenant 3 fois plus de ventes. L\'intégration des paiements mobiles a tout changé.',
      author: 'Mariama Diop',
      role: 'Directrice Marketing, ModaDakar',
    },
    image: ecommerceProject,
    color: 'from-pink-500 to-rose-400',
  },
  {
    id: 'startuphub-branding',
    title: 'Identité visuelle complète',
    client: 'StartupHub',
    category: 'design',
    categoryLabel: 'Design',
    description: 'Création d\'une identité de marque forte pour un incubateur de startups.',
    challenge: 'StartupHub avait besoin d\'une image moderne et professionnelle pour attirer les meilleurs talents et investisseurs de la région.',
    solution: 'Conception d\'une identité visuelle dynamique avec logo, charte graphique, templates de présentation et supports marketing print et digital.',
    results: [
      { label: 'Candidatures', value: '+120%' },
      { label: 'Visibilité presse', value: '+200%' },
      { label: 'Partenaires', value: '+8' },
      { label: 'Satisfaction', value: '98%' },
    ],
    testimonial: {
      quote: 'Notre nouvelle identité a complètement transformé la perception de notre marque. Les investisseurs nous prennent plus au sérieux.',
      author: 'Ousmane Fall',
      role: 'Fondateur, StartupHub',
    },
    image: fitnessProject,
    color: 'from-orange-500 to-amber-400',
  },
  {
    id: 'africafinance-strategie',
    title: 'Plan stratégique digital',
    client: 'AfricaFinance',
    category: 'business',
    categoryLabel: 'Business & Conseil',
    description: 'Accompagnement stratégique pour la transformation digitale d\'une institution financière.',
    challenge: 'AfricaFinance voulait moderniser ses services et toucher une clientèle plus jeune sans perdre sa base de clients traditionnels.',
    solution: 'Audit complet, définition d\'une roadmap digitale sur 18 mois, formation des équipes et accompagnement dans le déploiement d\'une application mobile.',
    results: [
      { label: 'Clients -35 ans', value: '+75%' },
      { label: 'Transactions mobile', value: '+320%' },
      { label: 'Coûts opérationnels', value: '-25%' },
      { label: 'NPS Score', value: '+42pts' },
    ],
    image: healthcareProject,
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 'sencommerce-social',
    title: 'Stratégie réseaux sociaux',
    client: 'SenCommerce',
    category: 'marketing',
    categoryLabel: 'Marketing Digital',
    description: 'Gestion complète des réseaux sociaux et création de contenu viral.',
    challenge: 'Faible présence sur les réseaux sociaux et aucune stratégie de contenu cohérente pour engager la communauté.',
    solution: 'Mise en place d\'un calendrier éditorial, création de contenus vidéo natifs, gestion de communauté et campagnes d\'influence locales.',
    results: [
      { label: 'Followers', value: '+15K' },
      { label: 'Engagement', value: '+280%' },
      { label: 'Trafic web', value: '+150%' },
      { label: 'Ventes social', value: '+95%' },
    ],
    image: restaurantProject,
    color: 'from-teal-500 to-cyan-400',
  },
  {
    id: 'dakarmedia-webapp',
    title: 'Application de gestion média',
    client: 'DakarMedia',
    category: 'dev',
    categoryLabel: 'Développement',
    description: 'Développement d\'une plateforme SaaS de gestion de contenus médias.',
    challenge: 'Gestion manuelle des contenus, planification difficile et collaboration chaotique entre les équipes rédactionnelles.',
    solution: 'Création d\'une application web sur mesure avec workflow éditorial, planification automatisée, analytics intégrés et collaboration temps réel.',
    results: [
      { label: 'Productivité', value: '+60%' },
      { label: 'Temps publication', value: '-50%' },
      { label: 'Erreurs', value: '-80%' },
      { label: 'Satisfaction équipe', value: '95%' },
    ],
    image: realestateProject,
    color: 'from-red-500 to-rose-400',
  },
];

const categories = [
  { id: 'all' as Category, label: 'Tous les projets', icon: Globe },
  { id: 'marketing' as Category, label: 'Marketing', icon: Megaphone },
  { id: 'dev' as Category, label: 'Développement', icon: Code },
  { id: 'design' as Category, label: 'Design', icon: Palette },
  { id: 'business' as Category, label: 'Business', icon: TrendingUp },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Nos réalisations
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs 
              grâce à des solutions digitales innovantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '100+', label: 'Projets réalisés' },
              { value: '50+', label: 'Clients satisfaits' },
              { value: '95%', label: 'Taux de satisfaction' },
              { value: '5+', label: 'Années d\'expérience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-accent-foreground">{stat.value}</div>
                <div className="text-sm text-accent-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full">
                          Voir le projet <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <span className="text-xs font-medium text-accent">{project.categoryLabel}</span>
                      <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
                      
                      {/* Quick Results */}
                      <div className="flex gap-4">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-accent">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <span className="text-sm font-medium text-accent">{selectedProject.categoryLabel}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1 mb-2">{selectedProject.title}</h2>
                <p className="text-muted-foreground mb-6">Client : {selectedProject.client}</p>

                {/* Challenge */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Le défi</h3>
                  <p className="text-muted-foreground">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Notre solution</h3>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Résultats</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-secondary/50 text-center">
                        <div className="text-2xl font-bold text-accent">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
                    <Quote className="w-8 h-8 text-accent/40 mb-3" />
                    <p className="text-foreground italic mb-4">"{selectedProject.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                        {selectedProject.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{selectedProject.testimonial.author}</div>
                        <div className="text-xs text-muted-foreground">{selectedProject.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Votre projet pourrait être le prochain
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Rejoignez nos clients satisfaits et transformez votre vision en succès digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="cta">
                <Link to="/contact">
                  Discuter de votre projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
