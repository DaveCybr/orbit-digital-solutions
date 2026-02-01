import { motion } from 'framer-motion';

const stats = [
  { value: '100+', label: 'Proyek Selesai' },
  { value: '50+', label: 'Klien Aktif' },
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '98%', label: 'Kepuasan Klien' },
];

export const Stats = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
