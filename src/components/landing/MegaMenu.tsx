import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/products';

interface MegaMenuProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export const MegaMenu = ({ isMobile = false, onItemClick }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), 150);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={handleClick}
          className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-muted transition-colors font-medium"
        >
          <span>Produk & Layanan</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden bg-muted/50"
            >
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={`/produk/${product.slug}`}
                  onClick={onItemClick}
                  className="flex items-center gap-3 px-6 py-3 hover:bg-muted transition-colors"
                >
                  <span className="text-lg">{product.icon}</span>
                  <span className="text-sm font-medium">{product.name}</span>
                </Link>
              ))}
              <Link
                to="/produk"
                onClick={onItemClick}
                className="flex items-center gap-2 px-6 py-3 text-primary font-semibold hover:bg-muted transition-colors"
              >
                Lihat semua produk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium py-2"
      >
        <span>Produk & Layanan</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-16 md:top-20 z-50"
          >
            <div className="bg-card shadow-xl border-b border-border">
              <div className="container-main py-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                  Produk & Layanan
                </p>
                <div className="grid grid-cols-4 gap-4">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      to={`/produk/${product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="group p-4 rounded-lg hover:bg-muted transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{product.icon}</span>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {product.tagline}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border text-center">
                  <Link
                    to="/produk"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Lihat semua produk Satellite Orbit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
