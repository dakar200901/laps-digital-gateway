import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Megaphone, Code, Palette, Briefcase, Headphones, Cloud, Search, TrendingUp, Users, Smartphone, Globe, Database, Layers, Paintbrush, FileText, PenTool, BarChart3, Target, Lightbulb, HeadphonesIcon, GraduationCap, BookOpen, Tv, HardDrive, Wrench, LucideIcon } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  services: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

const servicesData: Record<string, ServiceData> = {
  'marketing-digital': {
    title: 'Marketing Digital',
    subtitle: 'Boostez votre visibilité en ligne',
    description: 'Des stratégies marketing innovantes pour développer votre présence digitale et atteindre vos objectifs commerciaux.',
    icon: Megaphone,
    services: [
      {
        icon: Search,
        title: 'Stratégies publicitaires innovantes',
        description: 'Création de campagnes publicitaires percutantes sur Google Ads, Facebook Ads et autres plateformes pour maximiser votre ROI.',
      },
      {
        icon: Users,
        title: 'Gestion des réseaux sociaux',
        description: 'Animation quotidienne de vos pages, création de contenus engageants et interaction avec votre communauté.',
      },
      {
        icon: Target,
        title: 'Campagnes sponsorisées',
        description: 'Mise en place de campagnes ciblées pour toucher votre audience idéale avec des messages personnalisés.',
      },
      {
        icon: TrendingUp,
        title: 'Analyse de performance',
        description: 'Suivi détaillé de vos KPIs, rapports mensuels et recommandations pour améliorer continuellement vos résultats.',
      },
    ],
    process: [
      { step: 1, title: 'Audit & Diagnostic', description: 'Analyse de votre présence digitale actuelle et identification des opportunités.' },
      { step: 2, title: 'Stratégie sur mesure', description: 'Élaboration d\'un plan d\'action adapté à vos objectifs et votre budget.' },
      { step: 3, title: 'Mise en œuvre & Suivi', description: 'Déploiement des campagnes et optimisation continue basée sur les résultats.' },
    ],
  },
  'developpement-technologie': {
    title: 'Développement & Technologie',
    subtitle: 'Solutions digitales sur mesure',
    description: 'Du site vitrine à l\'application complexe, nous développons des solutions technologiques performantes adaptées à vos besoins.',
    icon: Code,
    services: [
      {
        icon: Globe,
        title: 'Sites vitrine et e-commerce',
        description: 'Création de sites web modernes, responsives et optimisés pour le référencement et la conversion.',
      },
      {
        icon: Smartphone,
        title: 'Applications web sur mesure',
        description: 'Développement d\'applications métier personnalisées pour automatiser et optimiser vos processus.',
      },
      {
        icon: Database,
        title: 'Intégration API et automatisation',
        description: 'Connexion de vos outils et automatisation des tâches répétitives pour gagner en productivité.',
      },
      {
        icon: Layers,
        title: 'Gestion de logiciels',
        description: 'Maintenance, mise à jour et évolution de vos applications existantes.',
      },
    ],
    process: [
      { step: 1, title: 'Analyse des besoins', description: 'Compréhension approfondie de vos objectifs et contraintes techniques.' },
      { step: 2, title: 'Conception & Prototypage', description: 'Maquettes interactives et validation de l\'architecture technique.' },
      { step: 3, title: 'Développement & Livraison', description: 'Développement itératif, tests rigoureux et mise en production.' },
    ],
  },
  'design-communication': {
    title: 'Design & Communication',
    subtitle: 'Créez une identité mémorable',
    description: 'Du logo à la charte graphique complète, nous façonnons votre image de marque pour la rendre unique et impactante.',
    icon: Palette,
    services: [
      {
        icon: Paintbrush,
        title: 'Création de logo et charte graphique',
        description: 'Développement d\'une identité visuelle forte et cohérente qui reflète les valeurs de votre marque.',
      },
      {
        icon: Layers,
        title: 'Maquettes UI pour web et mobile',
        description: 'Conception d\'interfaces utilisateur intuitives et esthétiques pour une expérience optimale.',
      },
      {
        icon: FileText,
        title: 'Supports print',
        description: 'Création de flyers, affiches, cartes de visite et tous supports imprimés pour vos communications.',
      },
      {
        icon: PenTool,
        title: 'Contenus visuels',
        description: 'Création de visuels pour réseaux sociaux, bannières web et illustrations personnalisées.',
      },
    ],
    process: [
      { step: 1, title: 'Brief créatif', description: 'Définition de votre vision, valeurs et objectifs de communication.' },
      { step: 2, title: 'Création & Itérations', description: 'Propositions créatives et ajustements selon vos retours.' },
      { step: 3, title: 'Livraison des assets', description: 'Remise de tous les fichiers dans les formats adaptés à vos usages.' },
    ],
  },
  'business-conseil': {
    title: 'Business & Conseil',
    subtitle: 'Accélérez votre croissance',
    description: 'Un accompagnement stratégique pour structurer votre activité et maximiser votre potentiel de développement.',
    icon: Briefcase,
    services: [
      {
        icon: BarChart3,
        title: 'Études de marché locales',
        description: 'Analyse approfondie de votre marché, de la concurrence et des opportunités au Sénégal et en Afrique.',
      },
      {
        icon: Target,
        title: 'Plan d\'action commercial',
        description: 'Élaboration de stratégies de vente efficaces et de plans de développement réalistes.',
      },
      {
        icon: Lightbulb,
        title: 'Coaching pour startups et PME',
        description: 'Accompagnement personnalisé pour les entrepreneurs et dirigeants en quête de croissance.',
      },
      {
        icon: TrendingUp,
        title: 'Veille concurrentielle',
        description: 'Surveillance continue de votre environnement concurrentiel et identification des tendances.',
      },
    ],
    process: [
      { step: 1, title: 'Diagnostic initial', description: 'Évaluation de votre situation actuelle et de vos ambitions.' },
      { step: 2, title: 'Recommandations stratégiques', description: 'Plan d\'action détaillé avec des objectifs mesurables.' },
      { step: 3, title: 'Accompagnement continu', description: 'Suivi régulier et ajustement de la stratégie selon les résultats.' },
    ],
  },
  'support-formation': {
    title: 'Support & Formation',
    subtitle: 'Développez vos compétences',
    description: 'Assistance technique et programmes de formation pour autonomiser vos équipes dans l\'utilisation des outils digitaux.',
    icon: Headphones,
    services: [
      {
        icon: HeadphonesIcon,
        title: 'Support technique à distance et sur site',
        description: 'Assistance réactive pour résoudre vos problèmes techniques et maintenir votre productivité.',
      },
      {
        icon: GraduationCap,
        title: 'Formations en marketing digital',
        description: 'Sessions de formation pratiques sur les réseaux sociaux, la publicité en ligne et l\'analyse de données.',
      },
      {
        icon: BookOpen,
        title: 'Formations outils SaaS et bureautique',
        description: 'Maîtrise des outils essentiels : CRM, suite Google/Microsoft, outils de gestion de projet.',
      },
      {
        icon: Users,
        title: 'Ateliers pratiques pour équipes',
        description: 'Sessions de groupe personnalisées pour former vos collaborateurs sur des thématiques spécifiques.',
      },
    ],
    process: [
      { step: 1, title: 'Évaluation des besoins', description: 'Identification des compétences à développer et des objectifs de formation.' },
      { step: 2, title: 'Programme personnalisé', description: 'Conception d\'un parcours de formation adapté à votre contexte.' },
      { step: 3, title: 'Formation & Suivi', description: 'Sessions interactives et accompagnement post-formation.' },
    ],
  },
  'abonnement-solutions-tech': {
    title: 'Abonnement & Solutions Tech',
    subtitle: 'Services tech du quotidien',
    description: 'Des solutions pratiques pour vos besoins technologiques quotidiens : streaming, stockage, réparation.',
    icon: Cloud,
    services: [
      {
        icon: Tv,
        title: 'Gestion d\'abonnements Netflix / IPTV',
        description: 'Configuration et gestion de vos abonnements streaming pour un divertissement sans interruption.',
      },
      {
        icon: HardDrive,
        title: 'Configuration et augmentation de stockage',
        description: 'Solutions cloud et mail avec espace de stockage étendu pour vos données professionnelles.',
      },
      {
        icon: Wrench,
        title: 'Réparation et dépannage',
        description: 'Service de réparation pour téléphones et ordinateurs, diagnostic et remplacement de pièces.',
      },
      {
        icon: Smartphone,
        title: 'Décodage et configuration',
        description: 'Déverrouillage et configuration de vos appareils pour une utilisation optimale.',
      },
    ],
    process: [
      { step: 1, title: 'Diagnostic', description: 'Analyse de votre besoin ou du problème rencontré.' },
      { step: 2, title: 'Proposition', description: 'Devis détaillé et délai d\'intervention estimé.' },
      { step: 3, title: 'Intervention', description: 'Réalisation du service et vérification de la satisfaction.' },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service non trouvé</h1>
            <Button asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                <ServiceIcon className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <span className="text-accent text-sm font-medium">{service.subtitle}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                  {service.title}
                </h1>
              </div>
            </div>

            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Ce que nous proposons"
            title="Nos prestations"
            description="Des solutions complètes adaptées à vos besoins"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.services.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <ItemIcon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Notre méthode"
            title="Processus de collaboration"
            description="Une approche structurée pour garantir votre succès"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Line connector */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step number */}
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center z-10 flex-shrink-0">
                    <span className="text-xl font-bold text-accent-foreground">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-2xl bg-card border border-border ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  } text-center md:text-inherit`}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Intéressé par {service.title} ?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="cta">
                <Link to="/contact">
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="hero">
                <a
                  href="https://wa.me/221785379999?text=Bonjour%20LAPS,%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20Marketing%20Digital."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuter sur WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
