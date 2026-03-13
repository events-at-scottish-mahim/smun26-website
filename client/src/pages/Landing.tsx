import { useLocation } from 'wouter';
import CountdownTimer from '@/components/CountdownTimer';

export default function Landing() {
  const [, navigate] = useLocation();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-smun-navy">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 27, 46, 0.4), rgba(15, 27, 46, 0.4)), url('https://d2xsxph8kpxj0f.cloudfront.net/310519663431089649/PMFipsbD3dT3Xo7JL4jygv/landing-bg-correct_bd49229e.png')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        {/* Main Text Box - Matching Design Reference */}
        <div className="max-w-6xl mx-auto text-center mb-4 mt-0">
          <div className="border-2 border-white rounded-3xl p-8 md:p-12 bg-transparent hover:bg-white/10 transition-all duration-500">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              The Pinnacle of<br />Model United Nations
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-serif text-white mb-2">
          Scottish Model United Nations 26
        </p>

        {/* Location Box */}
        <div
          onClick={() => navigate('/home')}
          className="border-2 border-white rounded-2xl px-6 md:px-8 py-3 md:py-4 backdrop-blur-md bg-white/5 mb-4 cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <p className="text-base md:text-lg font-serif text-white">
            SMUN 26 held in Mumbai
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="w-full max-w-4xl mt-2">
          <div className="text-center mb-2">
            <p className="text-white font-sans text-sm uppercase tracking-widest">
              Conference Begins In
            </p>
          </div>
          <CountdownTimer />
        </div>

      </div>
    </div>
  );
}
