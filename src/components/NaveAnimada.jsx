import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import naveImg from "../assets/nave-rotada.png";

// Registra el plugin (¡importante!)
gsap.registerPlugin(MotionPathPlugin);

export default function NaveAnimada() {
  const naveRef = useRef(null);

  useEffect(() => {
    gsap.to(naveRef.current, {
      duration: 5,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: [
          { x: 0, y: 0 },     // Punto izquierdo de la elipse
          { x: 200, y: -200 },  // Punto superior izquierdo
          { x: 800, y: -250 },   // Punto superior derecho
          { x: 1200, y: 0 },      // Punto derecho de la elipse
          { x: 800, y: 110 },    // Punto inferior derecho
          { x: 400, y: 110 },   // Punto inferior izquierdo
          { x: 0, y: 0 }
        ],
        curviness: 1.25,
        autoRotate: true
      }
    });
  }, []);

  return (
    <img
      ref={naveRef}
      src={naveImg}
      alt="Eco Nave"
      style={{
        position: "absolute",
        top: "40vh",
        left: "calc(50% - 640px)",
        width: "80px",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
}
