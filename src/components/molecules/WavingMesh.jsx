import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WavingMesh = () => {
    const meshRef = useRef();
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useFrame((state) => {
        if (isMobile) return;
        const time = state.clock.getElapsedTime();
        const positions = meshRef.current.geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            const y = positions[i + 1];
            // Wave formula
            positions[i + 2] = Math.sin(x * 0.5 + time) * 0.5 + Math.sin(y * 0.5 + time * 0.8) * 0.5;
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });

    if (isMobile) return null;

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
            <planeGeometry args={[20, 20, 40, 40]} />
            <meshStandardMaterial
                color="#00d2ff"
                wireframe
                transparent
                opacity={0.15}
                emissive="#00d2ff"
                emissiveIntensity={0.5}
            />
        </mesh>
    );
};

export default WavingMesh;
