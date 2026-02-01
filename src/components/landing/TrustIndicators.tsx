import { motion } from 'framer-motion';
import { Award, Shield, Zap, MessageCircle } from 'lucide-react';

const trustBadges = [
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'Standar kualitas internasional',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Keamanan data terjamin',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Pengiriman tepat waktu',
  },
  {
    icon: MessageCircle,
    title: '24/7 Support',
    description: 'Dukungan kapan saja',
  },
];

export const TrustIndicators = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-h1 font-extrabold text-foreground mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami untuk memberikan layanan terbaik bagi bisnis Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center border border-border card-hover"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-light mb-4">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-1">
                {badge.title}
              </h4>
              <p className="text-small text-muted-foreground">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
