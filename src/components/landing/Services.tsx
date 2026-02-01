import { motion } from 'framer-motion';
import { Briefcase, Smartphone, Globe, ShoppingCart, Cloud, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Custom Software Development',
    description: 'Kembangkan aplikasi custom yang sesuai dengan kebutuhan spesifik bisnis Anda dengan teknologi terkini.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan user experience terbaik.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Website dan web application yang responsif, cepat, dan SEO-friendly untuk bisnis modern.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Platform e-commerce lengkap dengan payment gateway, inventory management, dan analytics.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Migrasi dan implementasi cloud infrastructure untuk skalabilitas dan keamanan optimal.',
  },
  {
    icon: Settings,
    title: 'IT Consulting',
    description: 'Konsultasi strategis untuk transformasi digital dan optimasi infrastruktur IT perusahaan.',
  },
];

export const Services = () => {
  return (
    <section id="layanan" className="section-padding bg-background-secondary">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-light text-primary text-small font-semibold rounded-full uppercase tracking-wider mb-4">
            Layanan Kami
          </span>
          <h2 className="text-h1 font-extrabold text-foreground mb-4">
            Solusi Lengkap untuk Bisnis Anda
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan IT profesional untuk membantu
            transformasi digital bisnis Anda dari berbagai skala.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 md:p-8 border border-border card-hover cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-h3 font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <button className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                Pelajari Lebih Lanjut
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
