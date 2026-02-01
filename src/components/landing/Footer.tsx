import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  layanan: [
    'Custom Software',
    'Mobile Apps',
    'Web Development',
    'Cloud Solutions',
    'IT Consulting',
  ],
  produk: ['ERP System', 'CRM Platform', 'HRIS', 'Inventory System'],
  perusahaan: ['Tentang Kami', 'Tim', 'Karir', 'Blog'],
  bantuan: ['FAQ', 'Support', 'Dokumentasi', 'Kontak'],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-primary mb-4">
              Satellite Orbit
            </h3>
            <p className="text-background/70 mb-6 max-w-sm">
              Solusi IT profesional untuk transformasi digital bisnis Indonesia.
              Kami membantu perusahaan dari berbagai skala mencapai tujuan bisnis
              melalui teknologi.
            </p>
            <div className="space-y-3 text-background/70">
              <a
                href="mailto:info@satelliteorbit.cloud"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@satelliteorbit.cloud
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +62 812-3456-7890
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                Jember, East Java, Indonesia
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-background mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-4">Produk</h4>
            <ul className="space-y-2">
              {footerLinks.produk.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              {footerLinks.perusahaan.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © 2024 Satellite Orbit Cakrawala. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center text-background/70 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
