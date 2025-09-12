"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { twMerge } from "tailwind-merge";

const GLOBE_CONFIG: Partial<COBEOptions> = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [1, 1, 1],
  markerColor: [0.9, 0.2, 0.2],
  glowColor: [1, 1, 1],
  markers: [
    { location: [37.7749, -122.4194], size: 0.1 },
    { location: [28.6139, 77.2090], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [51.5074, -0.1278], size: 0.1 },
    { location: [35.6895, 139.6917], size: 0.1 },
    { location: [-33.8688, 151.2093], size: 0.1 },
  ],
};

type GlobeProps = {
  className?: string;
  // use Partial<COBEOptions> directly
  config?: Partial<COBEOptions>;
};

export default function Globe({ className, config }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let width = 0;
    let pointerInteracting: number | null = null;
    let pointerDelta = 0;

    function handleResize() {
      if (!canvasRef.current) return;
      width = canvasRef.current.offsetWidth;
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    // Build a fully-typed COBEOptions object, ensuring required numeric fields exist
    const finalConfig: COBEOptions = {
      // start with defaults from GLOBE_CONFIG
      ...(GLOBE_CONFIG as COBEOptions),
      // allow user overrides
      ...(config as COBEOptions),
      // override sizes to element size (ensure numeric)
      width: canvasRef.current.offsetWidth * 2,
      height: canvasRef.current.offsetHeight * 2,
      // guarantee required numeric fields are present (fallback values)
      phi: (config?.phi ?? GLOBE_CONFIG.phi) ?? 0,
      theta: (config?.theta ?? GLOBE_CONFIG.theta) ?? 0.3,
      devicePixelRatio:
        (config?.devicePixelRatio ?? GLOBE_CONFIG.devicePixelRatio) ?? 2,
      // provide onRender below (it will overwrite any onRender from config)
      onRender: (state) => {
        if (pointerInteracting !== null) {
          // reduced sensitivity for a smoother drag
          phi += pointerDelta / 800;
        } else {
          phi += 0.002; // slower auto rotate
        }
        state.phi = phi;

        // keep state sizes in sync with element
        state.width = canvasRef.current!.offsetWidth * 2;
        state.height = canvasRef.current!.offsetHeight * 2;
      },
    };

    const globe = createGlobe(canvasRef.current, finalConfig);

    function handlePointerDown(e: PointerEvent) {
      // store initial pointer X for delta calculations
      pointerInteracting = e.clientX;
      canvasRef.current?.setPointerCapture(e.pointerId);
    }

    function handlePointerUp(e: PointerEvent) {
      pointerInteracting = null;
      canvasRef.current?.releasePointerCapture(e.pointerId);
    }

    function handlePointerMove(e: PointerEvent) {
      if (pointerInteracting !== null) {
        pointerDelta = e.clientX - (pointerInteracting ?? 0);
      }
    }

    canvasRef.current.addEventListener("pointerdown", handlePointerDown);
    canvasRef.current.addEventListener("pointerup", handlePointerUp);
    canvasRef.current.addEventListener("pointermove", handlePointerMove);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", handleResize);
      canvasRef.current?.removeEventListener("pointerdown", handlePointerDown);
      canvasRef.current?.removeEventListener("pointerup", handlePointerUp);
      canvasRef.current?.removeEventListener("pointermove", handlePointerMove);
    };
  }, [config]); // re-create when config changes

  return (
    <div
      className={twMerge(
        "flex items-center justify-center p-4 bg-black rounded-2xl shadow-lg",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          aspectRatio: "1 / 1",
        }}
      />
    </div>
  );
}
