// src/components/Typewriter.tsx
import { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
  phrases: string[];
  period?: number;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  nextLineDelay?: number; // NEW
}

const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  period = 2000,
  className = '',
  typingSpeed = 80,
  deletingSpeed = 30,
  nextLineDelay = 300, // NEW
}) => {
  const [text, setText] = useState('');

  const loopRef = useRef(0);
  const isDeletingRef = useRef(false);
  const currentPhraseRef = useRef(phrases[0] || '');

  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const accumulatorRef = useRef(0);
  const pauseUntilRef = useRef(0);

  // NEW: this tells us which pause we are in
  const pauseReasonRef = useRef<"typing" | "deleting" | null>(null);

  useEffect(() => {
    const tick = (now: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      // Pause logic
      if (pauseUntilRef.current > now) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }

      // When pause ends → act based on reason
      if (pauseReasonRef.current) {
        if (pauseReasonRef.current === "typing") {
          // Original behavior → start deleting
          isDeletingRef.current = true;
        } else {
          // NEW behavior → start typing next phrase
          isDeletingRef.current = false;
          loopRef.current += 1;
        }

        pauseReasonRef.current = null;
      }

      // Keep current phrase updated
      currentPhraseRef.current = phrases[loopRef.current % phrases.length];
      const currentPhrase = currentPhraseRef.current;

      const speed = isDeletingRef.current ? deletingSpeed : typingSpeed;
      accumulatorRef.current += delta;

      if (accumulatorRef.current >= speed) {
        accumulatorRef.current = 0;

        setText((prev) => {
          // Finished typing
          if (!isDeletingRef.current && prev.length === currentPhrase.length) {
            pauseReasonRef.current = "typing";
            pauseUntilRef.current = now + period;
            return prev;
          }

          // Finished deleting
          if (isDeletingRef.current && prev.length === 0) {
            pauseReasonRef.current = "deleting";
            pauseUntilRef.current = now + nextLineDelay; // only NEW behavior
            return prev;
          }

          // typing or deleting
          if (isDeletingRef.current) {
            return prev.slice(0, -1);
          }

          return currentPhrase.slice(0, prev.length + 1);
        });
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [phrases, period, typingSpeed, deletingSpeed, nextLineDelay]);

  return (
    <h1 className={`text-center ${className}`}>
      <span className="inline-block after:content-[''] after:ml-1 after:border-r-2 after:border-blue-400 after:animate-pulse">
        {text}
      </span>
    </h1>
  );
};

export default Typewriter;
