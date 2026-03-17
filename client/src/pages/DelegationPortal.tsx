import Navigation from '@/components/Navigation';

export default function DelegationPortal() {
  const externalDelegationForm = 'https://forms.gle/VF6QrvajcZz4s5RR9';
  const internalDelegationForm = 'https://forms.gle/UotUEpdjyxeRtU127';

  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Delegation Portal
          </h1>
          <p className="text-xl text-smun-gold font-serif">
            Register your delegation for SMUN 26
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Portal Buttons */}
      <section className="py-32 px-4 flex items-center justify-center min-h-[60vh]">
        <div className="max-w-4xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12">
            {/* External Delegation */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-smun-gold mb-6">
                  External Delegation
                </h2>
                <p className="text-lg text-white/80 font-sans mb-8 leading-relaxed">
                  For schools and delegations outside Bombay Scottish School. Register your delegation and select your committees.
                </p>
                <a
                  href={externalDelegationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 bg-smun-gold text-smun-navy font-serif font-bold text-xl rounded-lg hover:bg-smun-gold-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Register Now
                </a>
              </div>
            </div>

            {/* Internal Delegation */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-smun-gold mb-6">
                  Internal Delegation
                </h2>
                <p className="text-lg text-white/80 font-sans mb-8 leading-relaxed">
                  For students from Bombay Scottish School. Register as an internal delegate and participate in SMUN 26.
                </p>
                <a
                  href={internalDelegationForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 bg-smun-gold text-smun-navy font-serif font-bold text-xl rounded-lg hover:bg-smun-gold-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-4 bg-smun-navy/50/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-smun-gold mb-8 text-center">
            Important Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-4">
                Registration Deadline
              </h3>
              <p className="text-white/80 font-sans">
                All registrations must be completed by XX March 2026. Late submissions may not be accepted.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-4">
                Committee Selection
              </h3>
              <p className="text-white/80 font-sans">
                You will be able to select your preferred committees during the registration process. Choose based on your interests and experience level.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-4">
                Agenda Research
              </h3>
              <p className="text-white/80 font-sans">
                Thoroughly research the agenda items and develop a comprehensive understanding of the issues at hand.This will allow you to select your preferred allotment for the committee.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-4">
                Confirmation Email
              </h3>
              <p className="text-white/80 font-sans">
                You will receive a confirmation email after successful registration . Check your spam folder if you don't see it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-smun-gold mb-8 text-center">
            Frequently Asked Questions (AI Generated for now pls change later)
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-serif font-bold text-smun-gold mb-2">
                Can I change my committee after registration?
              </h3>
              <p className="text-white/80 font-sans">
                Yes, you can request a committee change by contacting the organizing committee at contact@smun26.org before 20 March 2026.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-serif font-bold text-smun-gold mb-2">
                What if I don't have a position paper ready?
              </h3>
              <p className="text-white/80 font-sans">
                Position papers are required for registration. However, if you need more time, you can request an extension by contacting us immediately.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-serif font-bold text-smun-gold mb-2">
                Is there a registration fee?
              </h3>
              <p className="text-white/80 font-sans">
                Registration fees vary based on your delegation type. Details will be provided during the registration process.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-serif font-bold text-smun-gold mb-2">
                What documents do I need to bring on the day?
              </h3>
              <p className="text-white/80 font-sans">
                Bring your confirmation email, a valid ID, and any materials you've prepared. More details will be sent after registration.
              </p>
            </div>
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
