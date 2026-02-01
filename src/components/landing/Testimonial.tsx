import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonial = () => {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-primary">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 text-primary-foreground/30 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-primary-foreground font-medium italic leading-relaxed mb-8">
            "Satellite Orbit membantu kami mengembangkan sistem ERP yang sangat
            sesuai dengan kebutuhan bisnis. Tim mereka profesional, responsif,
            dan selalu memberikan solusi terbaik."
          </blockquote>
          <div>
            <div className="text-lg font-bold text-primary-foreground">
              Budi Santoso
            </div>
            <div className="text-primary-foreground/70">
              CEO, PT Maju Jaya Indonesia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
