import video from "../assets/gaia.mp4";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video de fondo que cubre todo el viewport */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Contenido sobre el video */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center bg-gradient-to-r from-green-400 via-teal-300 to-green-400 bg-clip-text text-transparent font-bold drop-shadow-2xl">
          Gaia Salvation
        </h1>
        <p className="mt-8 text-xl text-center text-white max-w-4xl drop-shadow-lg font-medium">
          Destruye la basura, protege la vida y evita que la oscuridad consuma al planeta. 
          En Eco Nave, tu misión es limpiar el mundo sin dañar la naturaleza. 
          ¡Esquiva a los pájaros, elimina la contaminación y salva el futuro del ecosistema!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;