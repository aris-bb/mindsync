import React, { useState, useEffect } from "react";

const Card: React.FC = () => {
  const [tilt, setTilt] = useState<
    { transform: string; transition?: string } | false
  >(false);
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [fadeOutTimeout, setFadeOutTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    if (isFadingOut) {
      setFadeOutTimeout(
        setTimeout(() => {
          setIsFadingOut(false);
          setHoverPosition(null);
        }, 300)
      );
    }
  }, [isFadingOut]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = event.pageX - centerX;
    const mouseY = event.pageY - centerY;
    const rotationX = (mouseY / cardHeight) * -20;
    const rotationY = (mouseX / cardWidth) * -20;
    setTilt({
      transform: `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
      transition: "transform 0.2s",
    });
    setHoverPosition({ x: mouseX, y: mouseY });
    setIsFadingOut(false);
    if (fadeOutTimeout) {
      clearTimeout(fadeOutTimeout);
      setFadeOutTimeout(null);
    }
  };

  const handleMouseLeave = () => {
    setTilt({ transform: "none", transition: "transform 1s" });
    setIsFadingOut(true);
  };

  return (
    <div
      className="shadow-md rounded-lg bg-black border border-zinc-700 p-6 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? tilt : undefined}
    >
      <h2 className="text-lg font-bold mb-2">Card Title</h2>
      <p className="text-gray-600">
        fgjhgjghjfgjhgjghjfgjhgjghjfgjhgjghjfgjhgjghjfgjhgjghjfgjhgjghjfgjhgjghjfgjhgjghjfgjhgjghjfgjhgjghj
      </p>
      {hoverPosition && (
        <div
          className="hover-glow"
          style={{
            transform: `translate(${hoverPosition?.x}px, ${hoverPosition?.y}px)`,
          }}
        />
      )}
    </div>
  );
};

export default Card;
