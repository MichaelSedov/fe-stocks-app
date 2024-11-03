import { useEffect, useRef, useState } from 'react';

const SHAKE_PERCENT = 1.25;

function usePriceChangeAnimation(price: number | null) {
  const [shake, setShake] = useState(false);
  const [flashClass, setFlashClass] = useState<string | null>(null);

  const prevPriceRef = useRef<number | null>(null);

  useEffect(() => {
    let flashTimeout: ReturnType<typeof setTimeout> | null = null;
    let shakeTimeout: ReturnType<typeof setTimeout> | null = null;

    if (prevPriceRef.current !== null && price !== null) {
      const prevPrice = prevPriceRef.current;

      if (price > prevPrice) {
        setFlashClass('shadow-green');
      } else if (price < prevPrice) {
        setFlashClass('shadow-red');
      }

      // Handle shake animation
      flashTimeout = setTimeout(() => {
        setFlashClass(null);
      }, 800);

      if (prevPrice > 0 && price >= prevPrice * SHAKE_PERCENT) {
        setShake(true);
        shakeTimeout = setTimeout(() => {
          setShake(false);
        }, 620);
      }
    }

    prevPriceRef.current = price;

    return () => {
      if (flashTimeout) {
        clearTimeout(flashTimeout);
      }
      if (shakeTimeout) {
        clearTimeout(shakeTimeout);
      }
    };
  }, [price]);

  return { shake, flashClass };
}

export default usePriceChangeAnimation;
