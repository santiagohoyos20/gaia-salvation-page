// PageBackground.jsx
import React from 'react';

const PageBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Patrón de fondo */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Partículas flotantes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-green-500 to-teal-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;