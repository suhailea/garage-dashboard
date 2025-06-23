import '@testing-library/jest-dom';
import ResizeObserver from 'resize-observer-polyfill';

// Polyfill ResizeObserver for react-three-fiber and related libraries
if (typeof window !== 'undefined') {
  window.ResizeObserver = ResizeObserver;
} else {
  global.ResizeObserver = ResizeObserver;
}

// Mock canvas for Chart.js and other canvas-based libraries
if (typeof window !== 'undefined') {
  HTMLCanvasElement.prototype.getContext = () => {
    return {
      fillRect: () => {},
      clearRect: () => {},
      getImageData: () => ({ data: [] }),
      putImageData: () => {},
      createImageData: () => [],
      setTransform: () => {},
      drawImage: () => {},
      save: () => {},
      fillText: () => {},
      restore: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      closePath: () => {},
      stroke: () => {},
      translate: () => {},
      scale: () => {},
      rotate: () => {},
      arc: () => {},
      fill: () => {},
      measureText: () => ({ width: 0 }),
      transform: () => {},
      rect: () => {},
      clip: () => {},
    };
  };
} 