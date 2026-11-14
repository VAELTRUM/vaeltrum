import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduceMotion = mediaQuery.matches;

    // Scene setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      setIsSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.5);

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Architectural Monolith / Geometric Crystal Structure
    const geomCore = new THREE.IcosahedronGeometry(2.1, 0);
    const matCoreWire = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreWire = new THREE.Mesh(geomCore, matCoreWire);
    rootGroup.add(coreWire);

    // Inner translucent facets with subtle metallic reflections
    const geomInner = new THREE.IcosahedronGeometry(2.05, 0);
    const matInner = new THREE.MeshStandardMaterial({
      color: 0x111318,
      metalness: 0.85,
      roughness: 0.25,
      transparent: true,
      opacity: 0.7,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(geomInner, matInner);
    rootGroup.add(coreMesh);

    // Inner floating core node
    const geomCenter = new THREE.OctahedronGeometry(0.9, 0);
    const matCenter = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: true,
    });
    const centerMesh = new THREE.Mesh(geomCenter, matCenter);
    rootGroup.add(centerMesh);

    // 2. Precision orbital rings (like orbital system architecture)
    const ringGroup = new THREE.Group();
    rootGroup.add(ringGroup);

    const createTechRing = (radius: number, tube: number, color: number, opacity: number) => {
      const ringGeom = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      return new THREE.Mesh(ringGeom, ringMat);
    };

    const ring1 = createTechRing(3.2, 0.012, 0x85868c, 0.45);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ring2 = createTechRing(3.6, 0.008, 0x3b82f6, 0.4);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    ringGroup.add(ring2);

    // 3. Coordinate node points
    const pointsCount = 48;
    const positions = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + Math.random() * 1.2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0xc5c8d1,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
    });
    const pointsMesh = new THREE.Points(pointsGeom, pointsMat);
    rootGroup.add(pointsMesh);

    // Subtle background tech grid lines
    const gridHelper = new THREE.GridHelper(14, 28, 0x27292e, 0x14161a);
    gridHelper.position.y = -3.2;
    gridHelper.rotation.x = 0.2;
    scene.add(gridHelper);

    // 4. Lighting - sophisticated, directional, restrained
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x60a5fa, 2.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc5c8d1, 1.2);
    rimLight.position.set(-5, -4, -3);
    scene.add(rimLight);

    // Interactive mouse tracking with damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (!reduceMotion) {
        // Continuous subtle rotation
        rootGroup.rotation.y += delta * 0.12;
        rootGroup.rotation.x += delta * 0.05;

        ring1.rotation.z += delta * 0.08;
        ring2.rotation.z -= delta * 0.06;
        centerMesh.rotation.y -= delta * 0.2;

        // Smooth mouse following
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        rootGroup.position.x = mouseX * 0.8;
        rootGroup.position.y = mouseY * 0.6;
        rootGroup.rotation.y += mouseX * 0.02;
        rootGroup.rotation.x += -mouseY * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geomCore.dispose();
      matCoreWire.dispose();
      geomInner.dispose();
      matInner.dispose();
      pointsGeom.dispose();
      pointsMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[620px] flex items-center justify-center">
      {/* Subtle background glow circle */}
      <div 
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent-blue/10 blur-[100px] pointer-events-none -z-10"
        aria-hidden="true" 
      />

      {/* Grid overlay for technical context */}
      <div 
        className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none mask-radial-fade"
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      {/* 3D Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10 flex items-center justify-center"
        aria-label="Interactive 3D geometric architectural model representing Vaeltrum engineering systems"
      />

      {/* Architectural telemetry overlay badge */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 pointer-events-none hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded border border-border/80 bg-background-charcoal/80 backdrop-blur-md text-[10px] font-mono text-foreground-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
        <span>SYS.RENDER // GEOMETRIC CORE</span>
      </div>
    </div>
  );
};
