import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export const CTA = () => {
  return (
    <section id="kontak" className="section-padding bg-background-secondary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-card rounded-3xl p-8 md:p-12 text-center shadow-soft border border-border"
        >
          <h2 className="text-h1 font-extrabold text-foreground mb-4">
            Siap Transformasi Digital?
          </h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Konsultasikan kebutuhan teknologi bisnis Anda dengan tim expert
            kami. Dapatkan solusi terbaik yang disesuaikan dengan budget dan
            timeline Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-lift bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 h-12"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-lift border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 h-12"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Jadwalkan Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
