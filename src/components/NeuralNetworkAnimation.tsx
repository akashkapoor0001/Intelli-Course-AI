
import { useEffect, useRef } from 'react';

interface Neuron {
  x: number;
  y: number;
  connections: number[];
  size: number;
  speed: number;
  hue: number;
}

interface Connection {
  from: number;
  to: number;
  width: number;
  alpha: number;
}

const NeuralNetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Animation variables
    let neurons: Neuron[] = [];
    let connections: Connection[] = [];
    
    // Initialize neural network
    function initNetwork() {
      neurons = [];
      connections = [];
      
      // Create neurons
      const neuronCount = Math.floor(window.innerWidth * window.innerHeight / 40000) + 15;
      
      for (let i = 0; i < neuronCount; i++) {
        neurons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.1,
          hue: Math.random() * 40 + 250, // Shades of purple and blue
        });
      }
      
      // Create connections between neurons (not all neurons are connected)
      for (let i = 0; i < neurons.length; i++) {
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < connectionCount; j++) {
          const target = Math.floor(Math.random() * neurons.length);
          if (target !== i && !neurons[i].connections.includes(target)) {
            neurons[i].connections.push(target);
            connections.push({
              from: i,
              to: target,
              width: Math.random() * 1.5 + 0.3,
              alpha: Math.random() * 0.3 + 0.1,
            });
          }
        }
      }
    }
    
    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNetwork();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Animation loop
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update neurons
      for (let i = 0; i < neurons.length; i++) {
        const neuron = neurons[i];
        
        // Move neurons slightly
        neuron.x += Math.sin(Date.now() * 0.001 + i) * neuron.speed;
        neuron.y += Math.cos(Date.now() * 0.001 + i) * neuron.speed;
        
        // Keep neurons within canvas
        if (neuron.x < 0) neuron.x = 0;
        if (neuron.x > canvas.width) neuron.x = canvas.width;
        if (neuron.y < 0) neuron.y = 0;
        if (neuron.y > canvas.height) neuron.y = canvas.height;
      }
      
      // Draw connections
      for (const connection of connections) {
        const from = neurons[connection.from];
        const to = neurons[connection.to];
        
        // Calculate distance for opacity
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0, `hsla(${from.hue}, 80%, 60%, ${connection.alpha})`);
        gradient.addColorStop(1, `hsla(${to.hue}, 80%, 60%, ${connection.alpha})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = connection.width * (1 - Math.min(distance / 500, 0.8));
        ctx.stroke();
        
        // Draw data point traveling along connection
        const pulseSpeed = Date.now() * 0.001 % 2;
        if (pulseSpeed > 0.1 && pulseSpeed < 0.9) {
          const position = (pulseSpeed - 0.1) / 0.8;
          const x = from.x + dx * position;
          const y = from.y + dy * position;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${(from.hue + to.hue) / 2}, 90%, 70%, 0.8)`;
          ctx.fill();
        }
      }
      
      // Draw neurons
      for (const neuron of neurons) {
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.size, 0, Math.PI * 2);
        
        // Pulse effect
        const pulse = (Math.sin(Date.now() * 0.003) + 1) * 0.2;
        
        ctx.fillStyle = `hsla(${neuron.hue}, 80%, 60%, ${0.6 + pulse})`;
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          neuron.x, neuron.y, neuron.size,
          neuron.x, neuron.y, neuron.size * 2
        );
        gradient.addColorStop(0, `hsla(${neuron.hue}, 80%, 60%, 0.3)`);
        gradient.addColorStop(1, `hsla(${neuron.hue}, 80%, 60%, 0}`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      animationFrameIdRef.current = requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default NeuralNetworkAnimation;
