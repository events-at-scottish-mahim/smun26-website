import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-smun-gold font-serif">
            Get in touch with the SMUN 26 team
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="glass-card p-8 text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-12 h-12 text-smun-gold" />
            </div>
            <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
              Email
            </h3>
            <p className="text-white/80 font-sans">
              <a
                href="mailto:contact@smun26.org"
                className="hover:text-smun-gold transition-colors"
              >
                smun@bombayscottish.in
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="glass-card p-8 text-center">
            <div className="flex justify-center mb-4">
              <Phone className="w-12 h-12 text-smun-gold" />
            </div>
            <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
              Phone
            </h3>
            <p className="text-white/80 font-sans">
              <a
                href="tel:+919876543210"
                className="hover:text-smun-gold transition-colors"
              >
                +91 9930170354 (ts aks phone number)
              </a>
            </p>
          </div>

          {/* Address */}
          <div className="glass-card p-8 text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-12 h-12 text-smun-gold" />
            </div>
            <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
              Address
            </h3>
            <p className="text-white/80 font-sans">
              Bombay Scottish School Mahim<br />
              Mumbai, India
            </p>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-smun-gold mb-8 text-center">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-sans font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-smun-navy/50 border border-smun-gold/30 rounded-lg text-white placeholder-smun-cream/40 focus:border-smun-gold focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-white font-sans font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-smun-navy/50 border border-smun-gold/30 rounded-lg text-white placeholder-smun-cream/40 focus:border-smun-gold focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-white font-sans font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-smun-navy/50 border border-smun-gold/30 rounded-lg text-white placeholder-smun-cream/40 focus:border-smun-gold focus:outline-none transition-colors"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label className="block text-white font-sans font-semibold mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-smun-navy/50 border border-smun-gold/30 rounded-lg text-white placeholder-smun-cream/40 focus:border-smun-gold focus:outline-none transition-colors resize-none"
                placeholder="Your message"
                rows={6}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-smun-gold text-smun-navy font-serif font-bold rounded-lg hover:bg-smun-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Social Media */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-smun-gold mb-8">
            Follow Us
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-smun-gold/20 border border-smun-gold/50 flex items-center justify-center hover:bg-smun-gold/40 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-smun-gold" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-smun-gold/20 border border-smun-gold/50 flex items-center justify-center hover:bg-smun-gold/40 transition-all duration-300"
            >
              <Twitter className="w-6 h-6 text-smun-gold" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-lg bg-smun-gold/20 border border-smun-gold/50 flex items-center justify-center hover:bg-smun-gold/40 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-smun-gold" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-smun-gold/20 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-smun-gold font-serif font-bold mb-4">SMUN 26</h3>
            <p className="text-white/60 font-sans text-sm">
              Scottish Model United Nations Conference
            </p>
          </div>
          <div>
            <h3 className="text-smun-gold font-serif font-bold mb-4">Location</h3>
            <p className="text-white/60 font-sans text-sm">
              Bombay Scottish School<br />
              Mumbai, India
            </p>
          </div>
          <div>
            <h3 className="text-smun-gold font-serif font-bold mb-4">Date</h3>
            <p className="text-white/60 font-sans text-sm">
              28 April 2026
            </p>
          </div>
        </div>
        <div className="border-t border-smun-gold/20 mt-8 pt-8 text-center">
          <p className="text-white/40 font-sans text-sm">
            © 2026 Scottish Model United Nations. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
