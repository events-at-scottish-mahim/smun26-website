import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";

const goldDividerStyle = {
  background: "linear-gradient(90deg, #FFD700 0%, #FFFACD 100%)",
  height: 4,
  border: "none",
  margin: "32px 0",
};

function FitText({
  text,
  className,
  maxPx = 18,
  minPx = 11,
  style,
}: {
  text: string;
  className?: string;
  maxPx?: number;
  minPx?: number;
  style?: React.CSSProperties;
}) {
  const elementRef = useRef<HTMLParagraphElement | null>(null);
  const [fontSizePx, setFontSizePx] = useState(maxPx);

  const measureAndFit = useCallback(() => {
    const el = elementRef.current;
    if (!el) return;

    el.style.fontSize = `${maxPx}px`;
    let nextSize = maxPx;

    // Shrink until it fits or we hit the minimum.
    while (nextSize > minPx && (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth)) {
      nextSize -= 1;
      el.style.fontSize = `${nextSize}px`;
    }

    setFontSizePx(nextSize);
  }, [maxPx, minPx]);

  useLayoutEffect(() => {
    measureAndFit();
    const el = elementRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(measureAndFit);
    });

    ro.observe(el);
    if (el.parentElement) ro.observe(el.parentElement);

    return () => ro.disconnect();
  }, [measureAndFit, text]);

  return (
    <p ref={elementRef} className={className} style={{ ...style, fontSize: fontSizePx }}>
      {text}
    </p>
  );
}

const departments = [
  {
    name:"Secretariat",
    heads: [
      {
        name:"Dhyan Jarianwala",
        img: "/images/OCP/dhyan.png",
        position: "Secretary-General",
        description: "Introducing Dhyan Jariwala ,the kind of person who’s always calm, collected, and quietly in control. When he’s not out capturing moments through wildlife photography, you’ll probably find him keeping up with his favorite film Argo or just taking things in his signature cool way. Charismatic, cool and optimistic, Dhyan brings a steady and positive energy to everything he does. As the Secretary General, he’s the overall head of the event, overseeing and supervising all the work happening in SMUN and making sure everything stays on track.",
      },
      {
        name:"Gaurika Agarwal",
        img: "/images/OCP/gaurika.png",
        position: "Director General of Committees",
        description: "Meet Gaurika — part binge-watching pro, part tennis enthusiast, and full-time chaos curator. Whether she’s finishing “just one more episode” or dominating the court, she brings confidence and main character energy to everything she does. Observant, chaotic, and effortlessly in control, she handles logistics, procedures, and committee responsibilities with ease, keeping everything running smoothly. Catch her rewatching Psych, looping her favorite songs, or in her best mood with sushi.",
      },
      {
        name:"Dia Jain",
        img: "/images/OCP/dia.png",
        position: "Deputy Director General of Committees",
        description: "Meet Dia — the one who keeps every agenda sharp and every committee perfectly in sync. As the Deputy Director General of Committees, she’s the mind behind the structure, making sure every discussion has direction and every plan has purpose. An animal lover at heart and a sportsperson in spirit, Dia balances passion with empathy in everything she does. Whether she’s playing badminton, keeping up with the thrill of F1, or getting lost in a good book, she’s always ready for a spontaneous side quest. When she’s not managing committees, you’ll probably find her rewatching How I Met Your Mother, Kal Ho Naa Ho, or How to Lose a Guy in 10 Days with hot chocolate in hand and something sweet (or sushi) close by.",
      },
      {
        name:"Hrishikesh Vishwanathan",
        img: "/images/OCP/hrishikesh.jpeg",
        position: "Director General of Administration",
        description: "Meet Hrishikesh — the man who turns chaos into perfect coordination. Strategic, resourceful and always thinking three steps ahead, he’s the quiet force making sure every detail falls exactly where it should. From capturing the wild through his lens to smashing it on the badminton court, Hrishikesh brings passion and adventure into everything he does.When he’s not fine-tuning logistics, you’ll probably find him vibing to Channa Mereya, rewatching Zindagi Na Milegi Dobara or The Rookie, with a coffee in one hand and a slice of pizza not too far away. Calm under pressure and always ready with a plan, he’s the backbone behind the smooth running of it all.",
      },
      {
        name:"Shaan Kanuga",
        img: "/images/OCP/shaan.png",
        position: "Director General of Administration",
        description: "Introducing Shaan Kanuga — a sports stats whiz who probably knows more about tennis and cricket than the commentators. A fan of racket sports, jungle safaris, CSK, MS Dhoni, and Roger Federer, he brings calm confidence and a competitive edge to everything he does. Friendly, funny, and reliable, Shaan serves as Director General of Administration, ensuring all departments run smoothly. Whether he’s looping Bollywood songs, debating 3 Idiots vs ZNMD, or fueled by Red Bull, he keeps things balanced between chill and driven — often wrapping it up with sushi and a stop at Foo.",
      },

    ],
  },
  {
    name: "Administration",
    heads: [
      {
        name: "Aditi Manchandani",
        img: "/images/OCP/aditi.jpeg",
        position: "Head",
        description: "Person 1 leads the department and oversees operations.",
      },
      {
        name: "Devyani Parekh",
        img: "/images/OCP/devyani.jpeg",
        position: "Deputy Head",
        description: "Person 2 manages coordination and logistics.",
      },
      {
        name: "Kimberly Dsouza",
        img: "/images/OCP/kimberly.jpeg",
        position: "Deputy Head",
        description: "Person 3 assists with planning and communication.",
      },
    ],
  },

  {
    name: "Finance",
    heads: [
      {
        name: "Vivaan Chakrabarti",
        img: "/images/OCP/vivaan.png",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Vihaan Jain",
        img: "/images/OCP/vihaan.png",
        position: "Deputy Head",
        description: "Introducing,Vihaan Jain , a dynamic, pragmatic and competitive individual who enjoys balancing relaxation with sports. In his free time, he loves sleeping and playing cricket, basketball and pickleball. His favourite songs include “Music Is Better” by RÜFÜS DU SOL and “Paperplanes” by BUNT., while his favourite movies are Zindagi Na Milegi Dobara and Hera Pheri.As the Deputy Head of the Finance Department, he helps manage the event’s finances by handling budgets, tracking expenses, securing sponsorships and maintaining financial records, ensuring everything runs smoothly.",
      },
    ],
  },
  {
    name: "Technical Operations",
    heads: [
      {
        name: "Shashank Rokade",
        img: "/images/OCP/shashank.jpeg",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Sharan Dhanu",
        img: "/images/OCP/sharan.jpeg",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Aarav Krishna",
        img: "/images/OCP/aarav.jpeg",
        position: "Deputy Head",
        description: "killer queen daisan no bakudan- bites the dust",
      },
    ],
  },
  {
    name: "Logistics",
    heads: [
      {
        name: "Krishay Shreeram",
        img: "/images/OCP/krishay.png",
        position: "Co-head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Arrmaan Anand",
        img: "/images/OCP/arrmaan.png",
        position: "Co-head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Sian Mehta",
        img: "/images/OCP/sian.png",
        position: "Deputy Head",
        description: "Sian Mehta enjoys playing football, lawn tennis and pickleball in his free time. His favourite song is “Hurricane” by Kanye West, and he enjoys watching the action-comedy Rush Hour series, including Rush Hour, Rush Hour 2 and Rush Hour 3. Known for staying calm under pressure and demonstrating relentless endurance, Sian plays an important role as the Deputy Head of Logistics, helping coordinate resources and ensure the smooth execution of events behind the scenes.",
      },
    ],
  },
    {
    name: "Press",
    heads: [
      {
        name: "Sia Kini",
        img: "/images/OCP/sia.png",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      
    ],
  },
    {
    name: "Photography",
    heads: [
      {
        name: "Kartikeya Kathe",
        img: "/images/OCP/kartik.png",
        position: "Head",
        description: "Meet Kartikeya — the man behind the lens and the action. Whether he’s dominating the football field, smashing a badminton rally, or strumming his guitar, he brings the same passion everywhere he goes. A wildlife photographer for over a decade, Kartikeya has mastered the art of turning fleeting moments into timeless frames.When he’s not capturing the perfect shot, he’s probably listening to Bazooka or Dracula, or diving into magical worlds like Harry Potter and epic anime like One Piece. Magnanimous, altruistic, and benevolent — three words that define both his spirit and the way he sees the world.",
      },
    ],
  },
    {
    name: "Hospitality",
    heads: [
      {
        name: "Sambhav Sharma",
        img: "/images/OCP/sambhav.png",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Yug Karia",
        img: "/images/OCP/yug.png",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Yashvir Shah",
        img: "/images/OCP/yashvir.png",
        position: "Deputy Head",
        description: "Handles operational tasks.",
      },
    ],
  },
      {
    name: "Design",
    heads: [
      {
        name: "Naisha Doshi",
        img: "/images/OCP/naisha.png",
        position: "Co-Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Janyaa Patkar",
        img: "/images/OCP/janyaa.png",
        position: "Co-Head",
        description: "Supports planning and coordination.",
      },
    ],
  },
      {
    name: "Public Relations",
    heads: [
      {
        name: "Samika Agarwal",
        img: "/images/OCP/samika.png",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Pia Punwani",
        img: "/images/OCP/prpia.png",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
    ],
  },
];

const OC: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedHead, setSelectedHead] = useState<any>(null);

  const handleTabClick = (head: any) => {
    setSelectedHead(head);
    setOpen(true);
  };

  const cardSizeClass = "w-[220px] h-[320px]";

  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      <div className="pt-32 pb-12 px-4">
        <h3 className="text-center text-smun-gold mb-16 text-5xl font-bold">
          Organising Committee
        </h3>
        <p className="text-xl text-smun-gold font-serif text-center mb-12">
            Meet the team behing SMUN-26, the Organising Committee.
          </p>
        {departments.map((dept) => (
          <div key={dept.name} className="mb-12">
          <h5 className="text-smun-gold mb-4 text-xl font-semibold">
            {dept.name}
          </h5>
          <div style={goldDividerStyle} />
          <div className="flex justify-center gap-4 flex-wrap">
            {dept.heads.map((head, i) => (
              <div
                key={i}
                className={`${cardSizeClass} mx-4 rounded-xl bg-[#232323] text-smun-gold shadow-lg flex flex-col items-center cursor-pointer p-6 overflow-hidden`}
                onClick={() => handleTabClick(head)}
              >
                <img
                  src={head.img}
                  alt="Head"
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-smun-gold"
                />
                <FitText
                  text={head.name}
                  maxPx={20}
                  minPx={14}
                  className="w-full h-[52px] text-center font-bold leading-snug text-smun-gold"
                />
                <FitText
                  text={head.position}
                  maxPx={14}
                  minPx={11}
                  className="w-full h-[36px] text-center font-semibold leading-snug text-smun-cream"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedHead && (
          <DialogContent className="bg-[#232323] text-smun-gold p-8 rounded-xl sm:max-w-4xl lg:max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col items-center">
                <img
                  src={selectedHead.img}
                  alt="Head"
                  className="w-70 h-70 rounded-full object-cover mb-4 border-4 border-smun-gold"
                />
                <p className="text-smun-gold font-bold text-2xl text-center leading-snug">
                  {selectedHead.name}
                </p>
                <p className="text-smun-cream font-semibold text-base text-center mt-1">
                  {selectedHead.position}
                </p>
              </div>
              <div>
                <p className="text-smun-cream text-lg">
                  {selectedHead.description}
                </p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
      </div>
    </div>
  );
};

export default OC;
