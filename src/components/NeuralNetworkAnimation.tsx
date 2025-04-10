import { useEffect, useRef } from 'react';

interface Neuron {
  x: number;
  y: number;
  size: number;
  connections: number[];
  vx: number;
  vy: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  active: boolean;
  activeTime: number;
}

const NeuralNetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Initialize canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Network parameters
    const neuronCount = Math.min(50, Math.floor(window.innerWidth * window.innerHeight / 20000));
    const connectionProbability = 0.08;
    const neuronMaxSpeed = 0.2;
    const neuronSize = Math.min(5, Math.max(3, window.innerWidth / 400));
    
    // Create neurons and connections
    let neurons: Neuron[] = [];
    let connections: Connection[] = [];
    
    const initNetwork = () => {
      neurons = [];
      connections = [];
      
      // Create neurons
      for (let i = 0; i < neuronCount; i++) {
        neurons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: neuronSize + Math.random() * neuronSize * 0.5,
          connections: [],
          vx: (Math.random() - 0.5) * neuronMaxSpeed,
          vy: (Math.random() - 0.5) * neuronMaxSpeed
        });
      }
      
      // Create connections
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          if (Math.random() < connectionProbability) {
            connections.push({
              from: i,
              to: j,
              strength: Math.random(),
              active: false,
              activeTime: 0
            });
            neurons[i].connections.push(connections.length - 1);
            neurons[j].connections.push(connections.length - 1);
          }
        }
      }
    };
    
    // Activate random connections
    const activateRandomConnections = () => {
      if (connections.length === 0) return;
      
      // Randomly activate connections
      if (Math.random() < 0.1) {
        const idx = Math.floor(Math.random() * connections.length);
        connections[idx].active = true;
        connections[idx].activeTime = 0;
      }
    };
    
    // Draw network
    const drawNetwork = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (const conn of connections) {
        const from = neurons[conn.from];
        const to = neurons[conn.to];
        
        // Set connection style based on state
        if (conn.active) {
          // Proper HSLA format with parentheses (not curly braces)
          const alpha = Math.max(0, 1 - conn.activeTime / 50);
          ctx.strokeStyle = `hsla(256, 80%, 60%, ${alpha})`;
          ctx.lineWidth = 2;
          conn.activeTime++;
          if (conn.activeTime > 50) {
            conn.active = false;
          }
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 0.5;
        }
        
        // Draw the connection
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      }
      
      // Draw neurons
      for (const neuron of neurons) {
        // Create gradient for neuron
        const gradient = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, neuron.size
        );
        
        // Fixed HSLA color format - ensuring proper syntax
        gradient.addColorStop(0, 'hsla(256, 80%, 80%, 0.8)');
        gradient.addColorStop(1, 'hsla(256, 80%, 60%, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    // Update neuron positions
    const updateNeurons = () => {
      for (const neuron of neurons) {
        // Update position
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;
        
        // Bounce off edges
        if (neuron.x < 0 || neuron.x > canvas.width) {
          neuron.vx *= -1;
        }
        if (neuron.y < 0 || neuron.y > canvas.height) {
          neuron.vy *= -1;
        }
        
        // Keep neurons in bounds
        neuron.x = Math.max(0, Math.min(canvas.width, neuron.x));
        neuron.y = Math.max(0, Math.min(canvas.height, neuron.y));
      }
    };
    
    // Animation loop
    const animate = () => {
      activateRandomConnections();
      updateNeurons();
      drawNetwork();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    initNetwork();
    animate();
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none"
    />
  );
};

export default NeuralNetworkAnimation;
