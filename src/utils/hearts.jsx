import { useEffect, useMemo, useState } from "react";

export function FloatingHearts() {
  const icons = useMemo(() => ["💗", "💖", "💘", "💕", "💞", "🌸", "✨"], []);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      char: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100,
      duration: 7 + Math.random() * 8,
      delay: -Math.random() * 12,
      opacity: 0.35 + Math.random() * 0.45,
      size: 16 + Math.random() * 14
    }));
    setItems(arr);
  }, [icons]);

  return (
    <div className="hearts" aria-hidden="true">
      {items.map((h) => (
        <div
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}vw`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
            fontSize: `${h.size}px`
          }}
        >
          {h.char}
        </div>
      ))}
    </div>
  );
}