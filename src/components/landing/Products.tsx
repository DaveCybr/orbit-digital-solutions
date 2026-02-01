import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    badge: 'POPULER',
    title: 'Enterprise Resource Planning',
    description: 'Sistem ERP terintegrasi untuk mengelola seluruh aspek bisnis dari satu platform.',
    features: [
      'Financial Management',
      'Inventory & Supply Chain',
      'Human Resource Management',
      'Business Intelligence & Analytics',
    ],
  },
  {
    badge: 'TERBARU',
    title: 'Customer Relationship Management',
    description: 'Platform CRM untuk mengelola hubungan pelanggan dan meningkatkan penjualan.',
    features: [
      'Lead & Opportunity Management',
      'Sales Pipeline Automation',
      'Customer Support Ticketing',
      'Marketing Campaign Tools',
    ],
  },
];

export const Products = () => {
  return (
    <section id="produk" className="section-padding bg-background">
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
            Produk Kami
          </span>
          <h2 className="text-h1 font-extrabold text-foreground mb-4">
            Platform Siap Pakai
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi enterprise yang sudah teruji untuk mempercepat transformasi
            digital bisnis Anda.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background-secondary rounded-2xl p-6 md:p-8 border border-border"
            >
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-4">
                {product.badge}
              </span>
              <h3 className="text-h2 font-bold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full btn-lift bg-primary hover:bg-primary-dark text-primary-foreground font-semibold h-12">
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
