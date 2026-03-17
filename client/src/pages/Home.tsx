import { Link } from 'wouter';
import Navigation from '@/components/Navigation';

interface Committee {
  id: string;
  name: string;
  agenda: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const committees: Committee[] = [
  {
    id: '1',
    name: 'United Nations Security Council',
    agenda: 'Terror in Sahel! Addressing the rise of extremist groups in the Sahel region.',
    difficulty: 'Advanced',
  },
  {
    id: '2',
    name: 'The Duma',
    agenda: 'The Bolshevik Revolution  (Freeze Date: 19th February 1918) ',
    difficulty: 'Intermediate',
  },
  {
    id: '3',
    name: ' Middle East Regional Intelligence & Strategy Council (MERISC)',
    agenda: ' Deliberating on the rising tensions in the Middle East.',
    difficulty: 'Advanced',
  },
  {
    id: '4',
    name: 'United Nations Human Rights Council (UNHRC)',
    agenda: 'Addressing the human rights violations in the Rwandan Genocide (1994)',
    difficulty: 'Beginner',
  },
  {
    id: '5',
    name: '⁠Special Political and the Decolonization Committee  ( SPECPOL) ',
    agenda: 'Evaluating the Implications of Unilateral Military Interventions in Venezuela.  ',
    difficulty: 'Intermediate',
  },
  {
    id: '6',
    name: 'UN Commission on Crime Prevention and Criminal Justice',
    agenda: 'Tackling Gang Wars in the Crime Capital of the World: El Salvador (Freeze Date: 31st December 2017)',
    difficulty: 'Beginner',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 min-h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 z-0 w-full h-full object-cover brightness-75"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/bgvid.webm" type="video/webm" />
        </video>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Scottish Model United Nations 26
          </h1>
          <p className="text-xl md:text-2xl text-smun-gold mb-8 font-serif">
            Bombay Scottish School | Mumbai
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto font-sans">
            Join us for an extraordinary conference where young diplomats from across the globe unite to address pressing international issues.
          </p>
          <Link href="/delegation-portal">
            <a className="inline-block px-10 py-4 bg-smun-gold text-smun-navy font-serif font-bold text-lg rounded-lg hover:bg-smun-gold-light transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              Apply Now
            </a>
          </Link>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Letter from Secretary General */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-smun-gold mb-12 text-center">
            Letter from the Secretary General
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-200 h-100 rounded-xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl">
                <img
                  src="/images/OCP/Secretariat group.jpeg"
                  alt="Secretary General"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-white/80 mb-6 font-sans leading-relaxed">
                Welcome to SMUN 26. This year's conference brings together the brightest minds in diplomacy to tackle the world's most pressing challenges. We are honored to host delegations from schools across the globe as they engage in meaningful discourse and build lasting connections.
              </p>
              <p className="text-lg text-white/80 font-sans leading-relaxed">
                The spirit of Model United Nations lies in fostering understanding, promoting dialogue, and developing the leaders of tomorrow. We look forward to an exceptional conference.
              </p>
              <p className="text-smun-gold font-serif font-bold mt-6">
                Secretary General, SMUN 26
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* About SMUN */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-smun-gold mb-8">
            About SMUN
          </h2>
          <p className="text-lg text-white/80 mb-6 font-sans leading-relaxed">
            Scottish Model United Nations is a premier conference dedicated to fostering diplomatic excellence and international understanding among young leaders. Held annually at Bombay Scottish School in Mumbai, SMUN brings together hundreds of delegates from across India and internationally.
          </p>
          <p className="text-lg text-white/80 font-sans leading-relaxed">
            Our mission is to provide a platform for students to develop critical thinking, public speaking, and negotiation skills while engaging with real-world global issues. Through rigorous committee work and dynamic debates, participants gain invaluable experience in diplomacy and international relations.
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Committees Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-smun-gold mb-12 text-center">
            Our Committees (Placeholder committees)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee) => (
              <div
  key={committee.id}
  className="glass-card p-6 hover:scale-105 transition-transform duration-300 flex flex-col h-full"
>
  <h3 className="text-xl font-serif font-bold text-smun-gold mb-3">
    {committee.name}
  </h3>

  <p className="text-white/70 font-sans mb-4">
    {committee.agenda}
  </p>

  <div className="flex items-center justify-between mt-auto">
    <span className="text-sm font-sans uppercase tracking-widest text-white/50">
      Difficulty
    </span>

    <span
      className={`px-3 py-1 rounded-full text-sm font-serif font-bold ${
        committee.difficulty === "Beginner"
          ? "bg-green-500/20 text-green-300"
          : committee.difficulty === "Intermediate"
          ? "bg-yellow-500/20 text-yellow-300"
          : "bg-red-500/20 text-red-300"
      }`}
    >
      {committee.difficulty}
    </span>
  </div>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Preparation Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-smun-gold mb-8">
            Preparation Resources
          </h2>
          <p className="text-lg text-white/80 mb-12 font-sans leading-relaxed">
            We provide comprehensive resources to help you prepare for the conference. Study guides, rules of procedure, and position paper guidelines are available to all delegates.
          </p>
          <Link href="/preparation">
            <a className="inline-block px-10 py-4 bg-smun-gold text-smun-navy font-serif font-bold text-lg rounded-lg hover:bg-smun-gold-light transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              View Preparation Materials
            </a>
          </Link>
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
