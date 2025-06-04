import { useState, useEffect } from 'react';
import { Star, Gamepad2, Trophy, Zap } from 'lucide-react';

const testimonials = [
  {
    text: "Increíble. Tiene algo que te atrapa desde el primer momento. No esperaba disfrutarlo tanto.",
    user: "Juan Méndez",
    company: "Estudiante universitario",
    rating: 5,
    icon: "star"
  },
  {
    text: "El estilo visual y la música crean una atmósfera que no se olvida. Muy bien logrado.",
    user: "Tomás Salazar",
    company: "Estudiante universitario",
    rating: 5,
    icon: "gamepad"
  },
  {
    text: "Perfecto para desconectar un rato. Me encanta cómo fluye todo, sin complicaciones.",
    user: "Cielo Aguas",
    company: "Estudiante universitaria",
    rating: 5,
    icon: "zap"
  },
  {
    text: "Se nota que está hecho con pasión y cuidado en cada detalle.",
    user: "Luis Alberto Gómez",
    company: "Estudiante universitario",
    rating: 5,
    icon: "trophy"
  },
  {
    text: "Cada vez que juego, descubro algo nuevo. Es profundo sin ser abrumador. Una experiencia redonda.",
    user: "Nora Castillo",
    company: "Diseñadora gráfica",
    rating: 5,
    icon: "star"
  },
  {
    text: "No suelo dejar reseñas, pero este juego lo merece. Divertido, inteligente y muy bien pensado.",
    user: "Andrés Torres",
    company: "Gamer veterano",
    rating: 5,
    icon: "gamepad"
  }
];


const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'gamepad': return <Gamepad2 className="w-6 h-6" />;
      case 'trophy': return <Trophy className="w-6 h-6" />;
      case 'zap': return <Zap className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="mt-20 tracking-wide overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="leading-relaxed text-3xl sm:text-5xl lg:text-6xl text-center my-5 lg:my-10 bg-gradient-to-r from-green-500 via-teal-300 to-green-500 bg-clip-text text-transparent font-bold">
          Esto opinan quienes se atrevieron a jugar
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-300 mx-auto rounded-full"></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 border transition-all duration-300 h-full flex flex-col ${
                hoveredIndex === index
                  ? 'border-green-500 shadow-2xl shadow-green-500/20 transform scale-105'
                  : 'border-neutral-700 hover:border-neutral-600'
              }`}
            >
              {/* Glowing background effect */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(94, 234, 212, 0.1))',
                }}
              ></div>
              
              <div className="relative z-10 flex-1">
                {/* Rating stars */}
                <div className="flex mb-4 justify-center">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Quote */}
                <p className="text-gray-300 leading-relaxed my-15 text-sm sm:text-base italic">
                  "{testimonial.text}"
                </p>
                
                {/* User info */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-700">
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredIndex === index
                          ? 'bg-gradient-to-r from-green-500 to-teal-300 text-white'
                          : 'bg-neutral-700 text-gray-400'
                      }`}
                    >
                      {getIcon(testimonial.icon)}
                    </div>
                    <div className="ml-3">
                      <h6 className="text-white font-semibold text-sm">
                        {testimonial.user}
                      </h6>
                      <span className="text-xs text-neutral-400">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Floating particles background effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;