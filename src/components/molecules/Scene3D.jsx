import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, ContactShadows, Html, Center } from '@react-three/drei';

const Scene3D = ({ children, autoRotate = false }) => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />

                {/* Lights */}
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#921aff" />
                <pointLight position={[0, 10, 5]} intensity={1.5} color="#00d2ff" />

                <Suspense fallback={
                    <Html center>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-4 h-4 border-2 border-neon-blue border-t-transparent rounded-full animate-spin" />
                            <div className="text-neon-blue font-mono text-[10px] tracking-widest uppercase">Iniciando Escena</div>
                        </div>
                    </Html>
                }>
                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                        <Center top>
                            {children || (
                                <mesh>
                                    <boxGeometry args={[1, 1, 1]} />
                                    <meshStandardMaterial color="#00d2ff" wireframe />
                                </mesh>
                            )}
                        </Center>
                    </Float>
                    <Environment preset="city" />
                    <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                    rotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                    autoRotate={true}
                    autoRotateSpeed={2}
                />
            </Canvas>
        </div>
    );
};

export default Scene3D;
