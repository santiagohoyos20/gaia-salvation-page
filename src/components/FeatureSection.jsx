import React from 'react';

// Definición de las características del juego
const gameFeatures = [
  {
    icon: "🎮",
    text: "Runner 2D educativo",
    description: "Mecánica de juego estilo runner con desplazamiento horizontal, centrado en enseñar ecología de forma lúdica."
  },
  {
    icon: "🧠",
    text: "Inteligencia Artificial con Q-Learning",
    description: "El personaje aprende a evitar obstáculos y recolectar ítems sostenibles mediante aprendizaje por refuerzo (Q-Learning)."
  },
  {
    icon: "⚙️",
    text: "Optimización de hiperparámetros",
    description: "Ajuste automático de learning rate, epsilon y discount factor para maximizar el desempeño del agente RL."
  },
  {
    icon: "🌿",
    text: "Entorno visual dinámico",
    description: "El mundo del juego cambia visualmente según las decisiones del jugador (más verde o más contaminado)."
  },
  {
    icon: "🧒",
    text: "Diseño inclusivo y accesible",
    description: "Interfaz atractiva para niños de 8 a 12 años, con colores contrastantes, sonidos motivadores y opciones de personalización (skins)."
  },
  {
    icon: "📊",
    text: "Evaluación técnica y usabilidad",
    description: "Comparación con política aleatoria, análisis de desempeño y prueba de usabilidad con usuarios reales, incluyendo encuesta y métricas."
  }
];

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="leading-relaxed text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide bg-gradient-to-r from-green-500 via-teal-300 to-green-500 bg-clip-text text-transparent font-bold">
          🏆 Características principales del juego
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {gameFeatures.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-12 w-12 p-2 bg-neutral-900 text-white justify-center items-center rounded-full text-xl">
                {feature.icon}
              </div>
              <div className="flex-1 pr-4">
                <h5 className="mt-1 mb-4 text-xl font-semibold">{feature.text}</h5>
                <p className="text-md mb-20 text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;