import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const ringPosition = useRef({ x: 0, y: 0 });
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const animateRing = () => {
      const dx = mousePosition.x - ringPosition.current.x;
      const dy = mousePosition.y - ringPosition.current.y;
      
      ringPosition.current.x += dx * 0.15;
      ringPosition.current.y += dy * 0.15;
      
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPosition.current.x}px`;
        ringRef.current.style.top = `${ringPosition.current.y}px`;
      }
      
      animationFrame = requestAnimationFrame(animateRing);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])');
      setIsHovering(!!isInteractive);
      
      // Check if hovering over text input elements
      const isTextInput = target.closest('input[type="text"], input[type="email"], input[type="password"], textarea') || 
                         (target.tagName === 'INPUT' && ['text', 'email', 'password', 'search'].includes((target as HTMLInputElement).type));
      setIsText(!!isTextInput);
    };

    // Initialize ring position
    ringPosition.current = { x: mousePosition.x, y: mousePosition.y };
    
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    animationFrame = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePosition]);

  // Hide cursor on touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }
  }, []);

  const cursorClasses = `
    ${isHovering ? 'cursor-hover' : ''}
    ${isClicking ? 'cursor-click' : ''}
    ${isText ? 'cursor-text' : ''}
  `.trim();

  // Don't render on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <div className={cursorClasses}>
      <div
        className="cursor-dot"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: isVisible ? (isText ? 0 : 1) : 0,
        }}
      />
    </div>
  );
}