import { motion } from 'framer-motion';

const clients = [
  'Startup A',
  'Corp B',
  'Company C',
  'Brand D',
  'Business E',
];

export const Clients = () => {
  return (
    <section id="klien" className="section-padding bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-small font-semibold uppercase tracking-widest text-muted-foreground">
            Dipercaya oleh Perusahaan Terkemuka
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center h-20 md:h-24 bg-muted rounded-xl hover:bg-muted/80 transition-colors cursor-pointer"
            >
              <span className="text-lg font-bold text-muted-foreground">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
