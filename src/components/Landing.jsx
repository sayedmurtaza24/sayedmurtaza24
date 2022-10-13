import React, { useEffect, useState } from 'react'
import ThreeScene from '../components/ThreeScene'
import { Canvas } from '@react-three/fiber'
import Links from '../components/Links'
import './Landing.css';

function Landing({ onLoaded }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 760)

    useEffect(() => {
        const onResize = () => {
            setIsMobile(window.innerWidth < 760)
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize)
    }, []);

    return (
        <div className='landing-page'>
            {!isMobile ? <Canvas
                gl={{ preserveDrawingBuffer: true }}
                camera={{ fov: 50 }}>
                <ThreeScene onLoaded={onLoaded} modelPath="./developer.glb" />
            </Canvas> : <Canvas
                gl={{ preserveDrawingBuffer: true }}
                camera={{ fov: 50 }}>
                <ThreeScene onLoaded={onLoaded} modelPath="./developer-mobile.glb" />
            </Canvas>}
            <Links />
        </div>
    )
}

export default Landing