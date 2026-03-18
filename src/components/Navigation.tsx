import { Link } from 'wouter';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Committees', href: '/committees' },
    { label: 'Organising Committee', href: '/oc' },
    { label: 'Preparation & Registration', href: '/preparation' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-smun-navy/40 backdrop-blur-xl border-b border-white/10 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/images/smun-logo.png"
              alt="SMUN Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden md:block">
              <div className="text-smun-gold font-serif font-bold text-lg">SMUN 26</div>
              <div className="text-smun-cream text-xs">Scottish MUN</div>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-white/80 hover:text-smun-gold transition-colors duration-300 font-sans text-sm uppercase tracking-wide border-b-2 border-transparent hover:border-smun-gold pb-1">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Delegation Portal Button */}
        <div className="hidden md:block">
          <Link href="/delegation-portal">
            <a className="px-6 py-6 bg-smun-gold text-smun-navy font-serif font-bold rounded-lg hover:bg-smun-gold-light transition-all duration-300 shadow-lg hover:shadow-xl">
              REGISTER NOW
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-smun-gold hover:text-smun-gold-light transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-smun-navy/50 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className="text-smun-cream hover:text-smun-gold transition-colors duration-300 font-sans text-sm uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Link href="/delegation-portal">
            <a
              className="px-0 py-2 bg-smun-gold text-smun-navy font-serif font-bold rounded-lg hover:bg-smun-gold-light transition-all duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              REGISTER NOW!
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
