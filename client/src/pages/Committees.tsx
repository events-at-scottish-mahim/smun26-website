import Navigation from '@/components/Navigation';

interface Committee {
  id: string;
  name: string;
  agenda: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

const committees: Committee[] = [
  {
    id: '1',
    name: 'United Nations Security Council',
    agenda: 'Terror in Sahel! Addressing the rise of extremist groups in the Sahel region.',
    difficulty: 'Advanced',
    description:'The Sahel region, which includes Burkina Faso, Mali, Niger, and Chad, struggles with rising terrorism from jihadist organisations like JNIM and ISGS, which fuels insurgencies, displacement, and state fragility in the face of resource conflicts and porous borders brought on by climate change. Attacks on civilians, military installations, and relief workers have increased, causing instability in the area and endangering international security through arms trafficking and migration waves. With a focus on counterterrorism tactics, peacekeeping improvements like the development of MINUSMA, sanctions, and multinational forces to restore stability, this Semi-Crisis UN Security Council committee engages in substantive discussions, resolution drafting, and targeted crises.IIf extremist groups control territory, taxation, and populations, are we witnessing terrorism—or the rise of parallel states?',
  },
  {
    id: '2',
    name: 'The Duma',
    agenda: 'The Bolshevik Revolution  (Freeze Date: 19th February 1918) ',
    difficulty: 'Intermediate',
    description: 'The Duma, Russia\'s imperial parliament, formed in 1905, became a battleground during the Bolshevik Revolution when radical issues confronted the Provisional Government amidst the chaos of World War I, economic collapse, and popular discontent. By early 1918, the Bolsheviks, led by Lenin, had seized power in the October Revolution, disbanded the Constituent Assembly, and faced the possibility of civil war, signing the Treaty of Brest-Litovsk to stop the conflict. This Continuous Crisis Committee simulates talks leading up to the freeze date of February 19, 1918, in which delegates navigate power battles, peace negotiations, and revolutionary policies while debating Russia\'s future. Can Russia attain peace and stability or will this revolution inevitably cause its downfall?',

  },
  {
    id: '3',
    name: ' Middle East Regional Intelligence & Strategy Council (MERISC)',
    agenda: ' Deliberating on the rising tensions in the Middle East.',
    difficulty: 'Advanced',
    description:'The Middle East continues to experience profound instability, originating from the protracted Israel-Hamas conflict initiated in 2023 and intensified by Iranian-supported proxy activities across Yemen, Syria, Lebanon, and Iraq, which have evolved into broader regional confrontations. Recent developments prominently feature coordinated U.S.-Israeli airstrikes on Iranian nuclear facilities and Islamic Revolutionary Guard Corps command structures commencing in mid-2025, compounded by sustained Houthi assaults on Red Sea shipping lanes, recurrent Israel-Hezbollah border skirmishes, and prospective threats to the Strait of Hormuz. This Continuous Crisis Committee will deliberate upon intelligence-sharing, de-escalation tactics, counter-proxy measures, and strategic alliances for stability. How long can the world ignore the risk that disruptions in the Strait of Hormuz could destabilize the global economy?',
  },
  {
    id: '4',
    name: 'United Nations Human Rights Council (UNHRC)',
    agenda: 'Addressing the human rights violations in the Rwandan Genocide (1994)',
    difficulty: 'Beginner',
    description: 'The 1994 Rwandan Genocide saw Hutu extremists slaughter around 800,000 Tutsis and moderate Hutus in 100 days, marked by machete massacres, rape as a weapon, and systematic ethnic cleansing amid radio-fueled propaganda and collapsed state institutions. Post-genocide, the International Criminal Tribunal for Rwanda prosecuted leaders, but accountability gaps persist in reparations, survivor trauma, and reconciliation. As a fully Humanitarian Committee, the UNHRC will examine violations like mass killings and sexual violence, advocating victim-centered justice, truth commissions, and prevention frameworks to address ongoing ethnic tensions and human rights violations. Does the pursuit of international legal justice actually facilitate ethnic cleansing and healing, or does it simply institutionalize the grievances that led to the machetes in the first place?',

  },
  {
    id: '5',
    name: '⁠Special Political and the Decolonization Committee  ( SPECPOL) ',
    agenda: 'Evaluating the Implications of Unilateral Military Interventions in Venezuela.  ',
    difficulty: 'Intermediate',
    description:'Venezuela\'s crisis, exacerbated by economic collapse, hyperinflation, and political deadlock under Maduro, has sparked unilateral military interventions like alleged covert operations or border incursions, raising sovereignty concerns amid refugee flows and humanitarian collapse. These actions risk escalating regional tensions, violating non-intervention principles, and complicating decolonization legacies in Latin America. As a fully Humanitarian Committee, this committee will assess intervention impacts on civilians, human rights, and self-determination, proposing diplomatic safeguards, aid corridors, and UN-monitored resolutions to prioritize relief over force. Can a foreign military actually save a democracy or is it just an intervention for old regime changes and hidden motives?',
  },
  {
    id: '6',
    name: 'UN Commission on Crime Prevention and Criminal Justice',
    agenda: 'Tackling Gang Wars in the Crime Capital of the World: El Salvador (Freeze Date: 31st December 2017)',
    difficulty: 'Beginner',
    description: 'El Salvador, dubbed the "murder capital," faced rampant gang violence from MS-13 and Barrio 18, with homicide rates rampantly increasing due to extortion rackets, territorial turf wars, and youth recruitment amid poverty and weak policing. By the freeze date, government crackdowns like mega-prisons offered temporary relief but fueled cycles of retaliation and prison riots. As a fully Humanitarian Committee, the UNCCPCJ will address root causes through prevention strategies, rehabilitation programs, community policing, and international cooperation.  If the only way to stop a war on the streets is to turn the entire country into a prison, have we won or simply chosen to ‘bar’ the entire situation behind?',

  },
];

export default function Committees() {
  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Committees
          </h1>
          <p className="text-xl text-smun-gold font-serif">
            Explore the diverse committees at SMUN 26
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-white/80 font-sans leading-relaxed">
            SMUN 26 offers six distinct committees, each providing a unique diplomatic experience. Whether you're a first-time delegate or a seasoned MUN veteran, we have the perfect committee for you.
          </p>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {committees.map((committee, index) => (
              <div
                key={committee.id}
                className={`glass-card p-8 hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-serif font-bold text-smun-gold">
                      {committee.name}
                    </h2>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-serif font-bold ${
                        committee.difficulty === 'Beginner'
                          ? 'bg-green-500/20 text-green-300'
                          : committee.difficulty === 'Intermediate'
                            ? 'bg-yellow-500/20 text-yellow-300'
                            : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {committee.difficulty}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-2">
                      Agenda
                    </h3>
                    <p className="text-lg text-smun-gold font-serif">
                      {committee.agenda}
                    </p>
                  </div>

                  <p className="text-lg text-white/80 font-sans leading-relaxed mb-6">
                    {committee.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-smun-gold text-smun-navy font-serif font-bold rounded-lg hover:bg-smun-gold-light transition-all duration-300">
                      Learn More
                    </button>
                    <button className="px-6 py-2 border-2 border-smun-gold text-smun-gold font-serif font-bold rounded-lg hover:bg-smun-gold/10 transition-all duration-300">
                      Select Committee
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Difficulty Guide */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-smun-gold mb-12 text-center">
            Difficulty Levels Explained
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-green-500/40"></div>
                <h3 className="text-xl font-serif font-bold text-green-300">
                  Beginner
                </h3>
              </div>
              <p className="text-white/70 font-sans">
                Perfect for first-time delegates. These committees have broader agendas and more flexible debate formats.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-yellow-500/40"></div>
                <h3 className="text-xl font-serif font-bold text-yellow-300">
                  Intermediate
                </h3>
              </div>
              <p className="text-white/70 font-sans">
                For delegates with some MUN experience. These committees require deeper research and more sophisticated diplomacy.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-red-500/40"></div>
                <h3 className="text-xl font-serif font-bold text-red-300">
                  Advanced
                </h3>
              </div>
              <p className="text-white/70 font-sans">
                For experienced delegates seeking a challenge. These committees demand extensive preparation and advanced negotiation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-smun-gold mb-6">
            Ready to Join?
          </h2>
          <p className="text-lg text-white/90 font-sans mb-8">
            Select your committee and register for SMUN 26 today.
          </p>
          <a
            href="/delegation-portal"
            className="inline-block px-10 py-4 bg-smun-gold text-smun-navy font-serif font-bold text-lg rounded-lg hover:bg-smun-gold-light transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Go to Delegation Portal
          </a>
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
