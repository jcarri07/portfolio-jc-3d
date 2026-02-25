import React from 'react';
import { useGLTF } from '@react-three/drei';

const ModelLoader = ({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
    const { scene } = useGLTF(url);

    return (
        <primitive
            object={scene}
            scale={scale}
            position={position}
            rotation={rotation}
        />
    );
};

export default ModelLoader;
