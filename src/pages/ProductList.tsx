import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { CTA } from '@/components/landing/CTA';
import { products } from '@/data/products';

const ProductList = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="pt-20 md:pt-24 bg-background-secondary border-b border-border">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Produk & Layanan</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Produk & Layanan
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Solusi Digital Lengkap untuk Bisnis Anda
            </h1>
            <p className="text-lg text-muted-foreground">
              Temukan berbagai produk dan layanan IT profesional kami untuk mendukung transformasi digital bisnis Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={`/produk/${product.slug}`}
                  className="group block bg-card rounded-2xl p-6 border border-border card-hover h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{product.icon}</span>
                    {product.badge && (
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {product.tagline}
                  </p>
                  <span className="inline-flex items-center text-primary font-semibold gap-2 group-hover:gap-3 transition-all">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default ProductList;
