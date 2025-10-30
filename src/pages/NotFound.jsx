import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, Rocket, Satellite, Stars } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  const [stars, setStars] = useState([]);

  // Generate random stars for background
  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 100 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
      }));
    };
    setStars(generateStars());
  }, []);

  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Events', path: '/events', icon: Rocket },
    { name: 'Track Satellites', path: '/track', icon: Satellite },
    { name: 'Astronomy News', path: '/news', icon: Stars },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-900 to-purple-950 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Floating astronaut/satellite animation */}
        <div className="mb-8 animate-bounce">
          <div className="relative">
            <Satellite className="w-32 h-32 text-purple-400 animate-spin-slow" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping" />
          </div>
        </div>

        {/* 404 Text */}
        <div className="text-center mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-blue-500 animate-pulse">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Lost in Space
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Houston, we have a problem!
          </p>
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            The page you're looking for has drifted into a black hole. 
            Let's get you back on track.
          </p>
        </div>

        {/* Quick links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-4xl">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="group flex flex-col items-center justify-center p-6 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-400 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-8 h-8 mb-2 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-white font-medium">{link.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main action buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:scale-105"
          >
            Go Back
          </button>
        </div>

        {/* Fun fact */}
        <div className="mt-12 p-6 bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl max-w-2xl">
          <div className="flex items-start gap-3">
            <Search className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-purple-300 font-semibold mb-2">Did you know?</h3>
              <p className="text-gray-300 text-sm">
                There are over 8,000 satellites orbiting Earth, but only about 2,000 are still functional. 
                The rest are space debris floating through the cosmos, much like this lost page!
              </p>
            </div>
          </div>
        </div>

        {/* Error code for developers */}
        <div className="mt-8 text-gray-500 text-sm font-mono">
          ERROR_CODE: PAGE_NOT_FOUND | STATUS: 404
        </div>
      </div>

      {/* CSS for slow spin animation */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
