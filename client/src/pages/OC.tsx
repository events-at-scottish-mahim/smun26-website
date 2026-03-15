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
    name: "Department 1",
    heads: [
      {
        name: "Person 1",
        img: "/images/person1.png",
        quote: "My granny called",
        position: "Head of Department",
        description: "Person 1 leads the department and oversees operations.",
      },
      {
        name: "Person 2",
        img: "/images/person2.png",
        quote: "She said travvy you work to hard",
        position: "Deputy Head",
        description: "Person 2 manages coordination and logistics.",
      },
      {
        name: "Person 3",
        img: "/images/person3.png",
        quote: "Im worried you forget bout me",
        position: "Coordinator",
        description: "Person 3 assists with planning and communication.",
      },
    ],
  },

  {
    name: "Department 2",
    heads: [
      {
        name: "Person 4",
        img: "/images/person4.png",
        quote: "ball ball ball",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Person 5",
        img: "/images/person5.png",
        quote: "Im fallin in n out of clouds dont worry imma get it granny",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Person 6",
        img: "/images/person6.png",
        quote: "What happened now my daddy happy",
        position: "Coordinator",
        description: "Handles operational tasks.",
      },
    ],
  },
  {
    name: "Department 3",
    heads: [
      {
        name: "Person 7",
        img: "/images/person4.png",
        quote: "Mama called me up, that money comin and she love me",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Person 8",
        img: "/images/person5.png",
        quote: "I done made it now, I done found life's meanin' now",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Person 9",
        img: "/images/person6.png",
        quote: "All them days her heart'd break, her heart not in pieces now",
        position: "Coordinator",
        description: "Handles operational tasks.",
      },
    ],
  },
  {
    name: "Department 4",
    heads: [
      {
        name: "Person 10",
        img: "/images/person4.png",
        quote: "Friends turnin' into fraud people",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Person 11",
        img: "/images/person5.png",
        quote: "Practicin' half the passion, you people packaged different",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Person 12",
        img: "/images/person6.png",
        quote: "All you people, you people want the swag, you can't have it",
        position: "Coordinator",
        description: "Handles operational tasks.",
      },
    ],
  },
    {
    name: "Department 5",
    heads: [
      {
        name: "Person 13",
        img: "/images/person4.png",
        quote: "I'ma sell it, your peoples salary, we 'bout to cap, lady",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Person 14",
        img: "/images/person5.png",
        quote: "Youngest person out of Houston at the Grammys",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Person 15",
        img: "/images/person6.png",
        quote: "Smilin' at 'em laughin' at me",
        position: "Coordinator",
        description: "Handles operational tasks.",
      },
    ],
  },
    {
    name: "Department 6",
    heads: [
      {
        name: "Person 16",
        img: "/images/person4.png",
        quote: "I passed the rock to Ye, he pump faked, then passed it back, lady",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Person 17",
        img: "/images/person5.png",
        quote: "All of this off of rappin', should've wrote this in Latin",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Person 18",
        img: "/images/person6.png",
        quote: "(Ball, ball, ball in, in) Yeah-yeah",
        position: "Coordinator",
        description: "Handles operational tasks.",
      },
    ],
  },
    {
    name: "Department 7",
    heads: [
      {
        name: "Person 19",
        img: "/images/person4.png",
        quote: "Mmm, I know, I know, I know, I know, I know I know, I know, I know, I know, I know",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Person 20",
        img: "/images/person5.png",
        quote: "Cuzzo said we hit the store, yeah, we 'bout to drop a four",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Person 21",
        img: "/images/person6.png",
        quote: "He passed the sprite, I choke, woo",
        position: "Coordinator",
        description: "Handles operational tasks.",
      },
    ],
  },
      {
    name: "Department 8",
    heads: [
      {
        name: "Person 22",
        img: "/images/person4.png",
        quote: "Told my auntie, Put them 'Ports down, them 'Ports down",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Person 23",
        img: "/images/person5.png",
        quote: "Now you know you love your own now",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Person 24",
        img: "/images/person6.png",
        quote: "Hit the stage, they got their hands up, don't put your nose down",
        position: "Coordinator",
        description: "Handles operational tasks.",
      },
    ],
  },
      {
    name: "Department 9",
    heads: [
      {
        name: "Person 25",
        img: "/images/person4.png",
        quote: "I ain't knockin', person, I knocked the door down, for sure now",
        position: "Head",
        description: "Responsible for managing this department.",
      },
      {
        name: "Person 26",
        img: "/images/person5.png",
        quote: "Great teams build great events.",
        position: "Deputy Head",
        description: "Supports planning and coordination.",
      },
      {
        name: "Person 27",
        img: "/images/person6.png",
        quote: "Whole crew, I swear they countin' on me",
        position: "Coordinator",
        description: "Handles operational tasks.",
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
                <FitText
                  text={head.quote}
                  maxPx={13}
                  minPx={10}
                  className="w-full h-[80px] text-center leading-snug text-smun-cream/70"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedHead && (
          <DialogContent className="bg-[#232323] text-smun-gold p-8 rounded-xl max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col items-center">
                <img
                  src={selectedHead.img}
                  alt="Head"
                  className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-smun-gold"
                />
                <p className="text-smun-gold font-bold text-2xl text-center leading-snug">
                  {selectedHead.name}
                </p>
                <p className="text-smun-cream font-semibold text-base text-center mt-1">
                  {selectedHead.position}
                </p>
                <p className="text-smun-cream/70 text-sm text-center mt-3">
                  {selectedHead.quote}
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
