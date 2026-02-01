import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ChevronRight, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const relatedProducts = getRelatedProducts(product.relatedProducts);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="pt-20 md:pt-24 bg-background-secondary border-b border-border">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Produk & Layanan</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{product.icon}</span>
              {product.badge && (
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              {product.tagline}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Section - 2 Column */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Mengapa Memilih {product.name}?
              </h2>
              <ul className="space-y-4 mb-8">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-lift bg-primary hover:bg-primary-dark gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Sekarang
                </Button>
                <Button size="lg" variant="outline" className="btn-lift gap-2">
                  <Calendar className="w-5 h-5" />
                  Jadwalkan Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 aspect-video flex items-center justify-center shadow-xl">
                <div className="text-center text-primary-foreground">
                  <span className="text-6xl mb-4 block">{product.icon}</span>
                  <p className="text-xl font-semibold">{product.shortName} Dashboard</p>
                  <p className="text-sm opacity-80 mt-2">Product Screenshot Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Fitur Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Fitur Lengkap untuk Bisnis Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border card-hover"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Proses Implementasi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Cara Kerja
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {product.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                {index < product.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Keuntungan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Manfaat untuk Bisnis Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {product.productBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border"
              >
                <span className="text-4xl">{benefit.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Harga
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Pilih Paket yang Sesuai
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {product.pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-6 border-2 ${
                  plan.popular ? 'border-primary shadow-lg' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    POPULER
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <p className="text-3xl font-extrabold text-primary">{plan.price}</p>
                  <p className="text-xs text-muted-foreground">/bulan</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-dark' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Pilih Paket
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Pertanyaan yang Sering Diajukan
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {product.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Produk Lainnya yang Mungkin Anda Butuhkan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/produk/${relatedProduct.slug}`}
                  className="block bg-card rounded-xl p-6 border border-border card-hover"
                >
                  <span className="text-3xl mb-3 block">{relatedProduct.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{relatedProduct.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {relatedProduct.tagline}
                  </p>
                  <span className="inline-flex items-center text-primary font-semibold text-sm gap-1 group">
                    Lihat Detail
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding bg-primary-light">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Tertarik dengan {product.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Konsultasi gratis dengan tim kami untuk solusi yang tepat sesuai kebutuhan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-lift bg-primary hover:bg-primary-dark gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Sekarang
              </Button>
              <Button size="lg" variant="outline" className="btn-lift gap-2">
                <Calendar className="w-5 h-5" />
                Jadwalkan Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
