import React, { Suspense, useEffect, useRef } from 'react'
import { Stage, useAnimations, useGLTF, ContactShadows } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
// import { useState } from 'react';

const environment = "city", preset = "rembrandt", intensity = 0.9;

export default function ThreeScene({ modelPath }) {
  const group = useRef()
  const { scene, animations } = useGLTF(modelPath)
  const { actions } = useAnimations(animations, group)
  const { camera } = useThree()

  useEffect(() => {
    camera.lookAt(-4, 2, 0)
    const onResize = () => {
      if (window.innerWidth < 760) {
        camera.position.set(75, 39, -65)
      } else {
        camera.position.set(44, 15, -40)
      }
    }
    onResize()
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function onMousePosChange(e) {
      console.log(`x: ${e.clientX / window.innerWidth}`)
      console.log(`y: ${e.clientY / window.innerHeight}`)
      // console.log(e)
    }
    window.addEventListener('mousemove', onMousePosChange);
    return () => window.removeEventListener('mousemove', onMousePosChange);
  }, [camera]);

  useEffect(() => {
    setTimeout(() => { 
      actions?.typing?.play()
    }, 1000);
  }, [actions]);

  return (
    <>
      <ambientLight intensity={.25} />
      <Suspense fallback={null}>
        <group ref={group}>
          <ContactShadows opacity={1} scale={120} blur={2.6} far={10} resolution={1024} frames={1} color="#000000" />
          <Stage
            preset={preset}
            intensity={intensity}
            contactShadow={false}
            adjustCamera={false}
            environment={environment}>
            <primitive object={scene} />
          </Stage>
        </group>
      </Suspense>
    </>
  )
}

useGLTF.preload('./developer.glb');
useGLTF.preload('./developer-mobile.glb');