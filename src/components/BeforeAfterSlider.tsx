import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  return (
    <div
      ref={sliderRef}
      className={`relative w-full overflow-hidden rounded-xl select-none touch-pan-y ${className || "max-w-[1100px] mx-auto"}`}
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER image (underneath, full width) */}
      <img
        src={afterImage}
        alt={afterAlt}
        draggable={false}
        className="block w-full h-full object-cover object-top pointer-events-none"
      />

      {/* BEFORE image (on top, clipped) */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-top pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/55 text-white text-sm pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/55 text-white text-sm pointer-events-none">
        {afterLabel}
      </span>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white pointer-events-none shadow-[0_0_8px_rgba(0,0,0,0.25)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-white text-foreground grid place-items-center -translate-x-1/2 -translate-y-1/2 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 6 3 12 9 18"></polyline>
            <polyline points="15 6 21 12 15 18"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
