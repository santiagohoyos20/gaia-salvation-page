import { 
  Github,
  Linkedin,
  Gamepad2,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const developers = [
    {
      name: "Geovani Pérez",
      role: "Lead Developer",
      github: "https://github.com/Geovani29",
      linkedin: "https://www.linkedin.com/in/geovanipg"
    },
    {
      name: "Laureano Lauafarie",
      role: "AI Engineer",
      github: "https://github.com/Laureano55",
      linkedin: "https://www.linkedin.com/in/laureano-lafaurie-del-villar-a687a6120"
    },
    {
      name: "Santiago Hoyos",
      role: "Web Developer",
      github: "https://github.com/santiagohoyos20",
      linkedin: "https://www.linkedin.com/in/santiagojhoyoss"
    },
    {
      name: "Carlos Villadiego",
      role: "AI Researcher",
      github: "#",
      linkedin: "#"
    },
    {
      name: "Raúl Morales",
      role: "AI Researcher",
      github: "#",
      linkedin: "#"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden border-t border-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-green-500 to-teal-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Brand Section */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Gamepad2 className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Gaia Team</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg max-w-md mx-auto lg:mx-0">
                Somos un equipo que combina tecnología, creatividad y conciencia ambiental para transformar el juego en una aventura con propósito.
              </p>
            </div>

            {/* Authors Section */}
            <div className="text-center lg:text-right">
              <h3 className="text-xl font-semibold mb-8 bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                Development Team
              </h3>
              <div className="space-y-6">
                {developers.map((dev, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-end group">
                    <div className="text-right mr-6">
                      <p className="text-gray-900 font-semibold text-lg">{dev.name}</p>
                      <p className="text-gray-500 text-sm font-medium">{dev.role}</p>
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={dev.github}
                        className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-110 group/icon border border-gray-200 hover:border-gray-300"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5 text-gray-600 group-hover/icon:text-gray-900" />
                      </a>
                      <a
                        href={dev.linkedin}
                        className="p-3 bg-gray-100 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-110 group/icon border border-gray-200 hover:border-blue-200"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-gray-600 group-hover/icon:text-blue-600" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              
              {/* Copyright */}
              <div className="text-gray-600 text-sm text-center lg:text-left mb-6 lg:mb-0">
                <p className="font-medium">&copy; 2025 Gaia Team. All rights reserved. Made with 💚 for gamers.</p>
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="p-4 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-xl hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                title="Scroll to top"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;