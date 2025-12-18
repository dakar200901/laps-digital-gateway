import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/section-header';
import { Users, Target, Lightbulb, Heart, Award, Clock, Rocket, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: 'Amadou Diallo',
    role: 'Fondateur & CEO',
    description: 'Passionné de technologie et d\'innovation, Amadou guide la vision stratégique de LAPS.',
    avatar: 'AD',
  },
  {
    name: 'Fatou Sow',
    role: 'Directrice Marketing',
    description: 'Experte en stratégies digitales, elle orchestre nos campagnes avec créativité.',
    avatar: 'FS',
  },
  {
    name: 'Moussa Ndiaye',
    role: 'Lead Développeur',
    description: 'Architecte de nos solutions techniques, il transforme les idées en réalité.',
    avatar: 'MN',
  },
  {
    name: 'Aïssatou Ba',
    role: 'Directrice Artistique',
    description: 'Son œil artistique donne vie à l\'identité visuelle de nos clients.',
    avatar: 'AB',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous repoussons les limites pour offrir des solutions créatives et avant-gardistes.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Chaque projet est une nouvelle aventure que nous embrassons avec enthousiasme.',
  },
  {
    icon: Shield,
    title: 'Intégrité',
    description: 'La transparence et l\'honnêteté guident toutes nos interactions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous visons la perfection dans chaque détail de notre travail.',
  },
];

const milestones = [
  { year: '2019', title: 'Création de LAPS', description: 'Naissance de l\'agence à Dakar avec une équipe de 3 personnes.' },
  { year: '2020', title: 'Expansion des services', description: 'Lancement des pôles Design et Développement.' },
  { year: '2021', title: '50+ clients', description: 'Cap symbolique franchi avec des clients au Sénégal et en Afrique de l\'Ouest.' },
  { year: '2022', title: 'Nouveaux locaux', description: 'Installation à Ouest Foire dans des bureaux modernes.' },
  { year: '2023', title: 'Solutions Tech', description: 'Lancement des abonnements et services de support technique.' },
  { year: '2024', title: 'Croissance continue', description: 'Plus de 100 projets réalisés et une équipe de 15 talents.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              À propos de <span className="text-accent">LAPS</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Une agence digitale sénégalaise passionnée, dédiée à transformer vos ambitions 
              en succès numériques depuis 2019.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Notre Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Propulser les entreprises africaines vers l'excellence digitale
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Chez LAPS, nous croyons que chaque entreprise mérite d'avoir une présence digitale 
                exceptionnelle. Notre mission est d'accompagner les entrepreneurs et les entreprises 
                du Sénégal et d'Afrique de l'Ouest dans leur transformation numérique.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                De la stratégie marketing au développement d'applications, en passant par le design 
                et le conseil, nous offrons un accompagnement complet et personnalisé pour répondre 
                à vos défis uniques.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '100+', label: 'Projets réalisés' },
                { number: '50+', label: 'Clients satisfaits' },
                { number: '15', label: 'Experts passionnés' },
                { number: '5+', label: 'Années d\'expérience' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-secondary/50 border border-border/50 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Nos Valeurs"
            description="Les principes qui guident chacune de nos actions"
            centered
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Notre Équipe"
            description="Des talents passionnés au service de votre réussite"
            centered
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-3xl font-bold text-accent-foreground group-hover:scale-105 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Notre Histoire"
            description="Le parcours qui a façonné LAPS"
            centered
          />
          
          <div className="relative mt-12 max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/50 transition-colors">
                    <div className="text-accent font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-foreground font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background md:-translate-x-1/2 z-10" />
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Rocket className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Rejoignez les entreprises qui nous font confiance et transformez 
              votre vision en réalité digitale.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-colors"
            >
              <Users className="w-5 h-5" />
              Contactez notre équipe
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
