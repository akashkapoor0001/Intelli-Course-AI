"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BrainNeuron = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) {
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const glowMaterial = new THREE.MeshStandardMaterial({
      color: '#B22222',  // Firebrick Red (deep metallic reddish tone)
      metalness: 0.6,    // make it more metallic
      roughness: 0.3,    // smoother, shinier surface
    });

    const nodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.7, 16, 16); // Larger spheres

    for (let i = 0; i < 1100; i++) {  // Increased to 1000 nodes for more density
      const node = new THREE.Mesh(nodeGeometry, glowMaterial);
      node.position.x = (Math.random() - 0.5) * 80;   // Larger X size
      node.position.y = (Math.random() - 0.5) * 60;   // Larger Y size
      node.position.z = (Math.random() - 0.5) * 40;   // Larger Z size

      if (
        node.position.x ** 2 / 1600 +  // Increased divisors for more space
        node.position.y ** 2 / 900 +
        node.position.z ** 2 / 400 <=
        1
      ) {
        scene.add(node);
        nodes.push(node);
      }
    }

    const connections = new THREE.Group();
    const materialLine = new THREE.LineBasicMaterial({
        color: '#9B111E', // Cranberry Red
        opacity: 0.3,
      transparent: true,
    });

    nodes.forEach((nodeA, i) => {
      nodes.forEach((nodeB, j) => {
        if (i < j && nodeA.position.distanceTo(nodeB.position) < 8) {
          const geometryLine = new THREE.BufferGeometry().setFromPoints([
            nodeA.position,
            nodeB.position,
          ]);
          const line = new THREE.Line(geometryLine, materialLine);
          connections.add(line);
        }
      });
    });
    scene.add(connections);

    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) {
        return;
      }
      // Adjust camera aspect ratio and update projection matrix
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[300px] md:h-[500px] rounded-xl shadow-2xl overflow-hidden"
    />
  );
};

export default BrainNeuron;
