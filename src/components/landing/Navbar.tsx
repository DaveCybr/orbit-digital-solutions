import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MegaMenu } from './MegaMenu';

const navLinks = [
  { label: 'Harga', href: '#harga', isAnchor: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/98 backdrop-blur-md shadow-nav border-b border-border'
          : 'bg-background/98 backdrop-blur-md'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-extrabold text-primary">
              Satellite Orbit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <MegaMenu />
            
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium py-2">
              <span>Solusi</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium py-2">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => link.isAnchor && scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium px-3 py-2">
              <Globe className="w-4 h-4" />
              <span>ID</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            
            <Button variant="ghost" className="font-medium">
              Sign in
            </Button>
            
            <Button
              onClick={() => scrollToSection('#kontak')}
              className="btn-lift bg-primary hover:bg-primary-dark text-primary-foreground font-semibold gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              onClick={() => scrollToSection('#kontak')}
              size="sm"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-2 max-h-[80vh] overflow-y-auto">
            <MegaMenu isMobile onItemClick={closeMobileMenu} />
            
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-muted transition-colors font-medium"
            >
              <span>Solusi</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-muted transition-colors font-medium"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  if (link.isAnchor) scrollToSection(link.href);
                  closeMobileMenu();
                }}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            
            <div className="border-t border-border mt-2 pt-2 px-4">
              <button className="flex items-center gap-2 w-full py-3 text-foreground hover:text-primary transition-colors font-medium">
                <Globe className="w-4 h-4" />
                <span>Bahasa Indonesia</span>
              </button>
              <button className="w-full py-3 text-foreground hover:text-primary transition-colors font-medium text-left">
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
