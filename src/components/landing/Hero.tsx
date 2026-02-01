import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Smartphone, Cloud } from 'lucide-react';

const floatingCards = [
  { icon: Monitor, label: 'Custom Software', delay: 0 },
  { icon: Smartphone, label: 'Mobile Apps', delay: 0.5 },
  { icon: Cloud, label: 'Cloud Solutions', delay: 1 },
];

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary-light to-background pt-20">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-display font-extrabold text-foreground leading-tight mb-6">
              Solusi Digital untuk{' '}
              <span className="text-primary">Transformasi Bisnis</span> Anda
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Platform teknologi terintegrasi yang membantu bisnis Indonesia
              meningkatkan efisiensi, produktivitas, dan pertumbuhan melalui
              solusi IT profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('#kontak')}
                className="btn-lift bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 h-12"
              >
                Mulai Konsultasi Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#layanan')}
                className="btn-lift border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12"
              >
                Lihat Layanan
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] hidden md:block"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-background/30 blur-3xl" />
                <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-background/20 blur-3xl" />
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + card.delay * 0.2 }}
                className={`absolute bg-background rounded-xl shadow-card p-4 flex items-center gap-3 ${
                  index === 0
                    ? 'top-12 left-8 animate-float'
                    : index === 1
                    ? 'top-1/2 right-8 -translate-y-1/2 animate-float-delayed'
                    : 'bottom-16 left-1/4 animate-float'
                }`}
                style={{ animationDelay: `${card.delay}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground whitespace-nowrap">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
