import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Gift, Cake, Star, PartyPopper } from 'lucide-react';

export default function BirthdaySurprise() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [balloons, setBalloons] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const [showFireworks, setShowFireworks] = useState(false);

  const messages = [
    "🎉 Joyeux Anniversaire Lamyae! 🎉",
    "✨ Aujourd'hui est ton jour spécial! ✨",
    "🌟 Que cette nouvelle année t'apporte bonheur et réussite! 🌟",
    "💖 Tu es une personne extraordinaire! 💖",
    "🎈 Profite de chaque instant de cette journée! 🎈",
    "🌺 Que tous tes rêves se réalisent! 🌺",
    "🎊 Tu mérites le meilleur! 🎊",
    "💫 Continue à briller comme tu le fais! 💫",
    "🎁 Cette journée est faite pour toi! 🎁",
    "🌸 Que l'année qui vient soit remplie de joie! 🌸",
    "⭐ Tu illumines la vie de ceux qui t'entourent! ⭐",
    "🎂 Souffle tes bougies et fais un vœu! 🎂"
  ];

  useEffect(() => {
    const newBalloons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      color: ['#FF6B9D', '#C44569', '#A8E6CF', '#FFD93D', '#95E1D3', '#FEA47F', '#BAB2E7'][Math.floor(Math.random() * 7)]
    }));
    setBalloons(newBalloons);
  }, []);

  const createConfetti = () => {
    const newConfetti = Array.from({ length: 80 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: ['#FF6B9D', '#C44569', '#FFD93D', '#95E1D3', '#A8E6CF', '#FEA47F', '#BAB2E7'][Math.floor(Math.random() * 7)],
      rotation: Math.random() * 360,
      size: Math.random() * 8 + 4
    }));
    setConfetti(prev => [...prev, ...newConfetti]);
    
    setTimeout(() => {
      setConfetti(prev => prev.slice(80));
    }, 4000);
  };

  const handleReveal = () => {
    setShowSurprise(true);
    createConfetti();
    setShowFireworks(true);
    
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prev => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        clearInterval(messageInterval);
        return prev;
      });
    }, 2000);

    setTimeout(() => setShowFireworks(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center p-3 sm:p-6 overflow-hidden relative">
      {/* Balloons */}
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className="absolute bottom-0"
          style={{
            left: `${balloon.left}%`,
            animation: `float ${balloon.duration}s ease-in-out infinite`,
            animationDelay: `${balloon.delay}s`
          }}
        >
          <div
            className="rounded-full opacity-90 shadow-lg"
            style={{ 
              backgroundColor: balloon.color,
              width: '35px',
              height: '50px'
            }}
          />
          <div className="w-0.5 h-16 sm:h-24 bg-white/50 mx-auto" />
        </div>
      ))}

      {/* Confetti */}
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `fall 4s linear`,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0'
          }}
        />
      ))}

      {/* Fireworks */}
      {showFireworks && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-yellow-300"
              style={{
                top: '20%',
                left: '50%',
                animation: `explode 1s ease-out`,
                animationDelay: `${i * 0.1}s`,
                transform: `rotate(${i * 45}deg)`
              }}
            />
          ))}
        </>
      )}

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(120vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-5deg);
          }
          50% {
            transform: translateY(-100vh) rotate(5deg);
          }
        }
        @keyframes explode {
          to {
            transform: translateY(-200px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-2">
        {!showSurprise ? (
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-12 md:p-16 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <Gift className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 sm:mb-8 text-pink-500 animate-bounce" />
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 absolute top-0 left-1/3 text-yellow-400 animate-pulse" />
              <Star className="w-5 h-5 sm:w-6 sm:h-6 absolute bottom-0 right-1/3 text-purple-400 animate-ping" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4 sm:mb-6 leading-tight">
              Une Surprise<br className="sm:hidden" /> t'attend! 🎁
            </h2>
            <p className="text-gray-700 mb-6 sm:mb-10 text-lg sm:text-xl md:text-2xl font-medium px-2">
              Lamyae, clique sur le cadeau!
            </p>
            <button
              onClick={handleReveal}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-lg sm:text-xl md:text-2xl font-bold hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg active:scale-95"
            >
              Ouvrir le Cadeau! 🎉
            </button>
          </div>
        ) : (
          <div className="bg-white/98 backdrop-blur-lg rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl">
            <div className="flex justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <PartyPopper className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-pink-500 animate-bounce" />
              <Cake className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-pink-500" />
              <PartyPopper className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-500 animate-bounce" />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-3 sm:mb-4 md:mb-6 animate-pulse leading-tight">
              JOYEUX<br className="sm:hidden" /> ANNIVERSAIRE
            </h1>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-pink-500 mb-6 sm:mb-8 md:mb-12 drop-shadow-lg">
              LAMYAE! 🎂
            </h2>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-10 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto px-2">
              {messages.slice(0, currentMessageIndex + 1).map((msg, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-3 sm:p-4 md:p-6 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 shadow-md transform hover:scale-105 transition-transform"
                  style={{ 
                    animation: 'slideIn 0.5s ease-out',
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {msg}
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-500 animate-pulse" />
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-500 animate-spin" />
              <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-500 animate-bounce" />
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-500 animate-pulse" />
            </div>

            <button
              onClick={() => {
                createConfetti();
                setShowFireworks(true);
                setTimeout(() => setShowFireworks(false), 3000);
              }}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-bold hover:scale-110 transition-transform shadow-xl active:scale-95"
            >
              Plus de Confettis! 🎊
            </button>

            <p className="mt-6 sm:mt-8 text-gray-600 text-base sm:text-lg md:text-xl font-medium px-2">
              Que cette journée soit magique! ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
}