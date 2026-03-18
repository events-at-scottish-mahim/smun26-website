import { useEffect } from "react";

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#08142c] overflow-hidden flex items-center justify-center">

      {/* Starfield */}
      <div className="absolute inset-0 starfield" />

      {/* Radial glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.25),transparent_70%)] blur-3xl" />

      {/* Gold energy ring */}
      <div className="absolute w-[380px] h-[380px] border border-yellow-400/40 rounded-full animate-ring" />

      {/* Logo */}
      <div className="relative z-10 logo-container">
        <img
          src="/images/smun-logo.png"
          alt="SMUN Logo"
          loading="eager"
          decoding="sync"
          className="w-52 md:w-64 object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.7)] bg-transparent"
          style={{ backgroundColor: "transparent", backgroundImage: "none" }}
        />
      </div>

      <style>{`

        /* Starfield */

        .starfield {
          background-image:
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 80% 60%, white, transparent),
            radial-gradient(1px 1px at 40% 70%, white, transparent),
            radial-gradient(1px 1px at 65% 20%, white, transparent),
            radial-gradient(2px 2px at 10% 80%, white, transparent),
            radial-gradient(1px 1px at 90% 10%, white, transparent);
          animation: starDrift 20s linear infinite;
          opacity: 0.5;
        }

        @keyframes starDrift {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-40px);
          }
        }

        /* Logo reveal */

        .logo-container {
          opacity: 0;
          transform: scale(0.8);
          animation: logoReveal 1.6s ease-out forwards;
          animation-delay: 0.6s;
        }

        @keyframes logoReveal {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Gold ring pulse */

        .animate-ring {
          animation: ringPulse 2.6s ease-out forwards;
        }

        @keyframes ringPulse {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

      `}</style>
    </div>
  );
}