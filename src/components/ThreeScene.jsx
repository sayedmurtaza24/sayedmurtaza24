import React, { Suspense, useEffect, useRef } from 'react'
import { Stage, useAnimations, useGLTF,  useProgress } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

const environment = "city", preset = "rembrandt", intensity = 2.0;

export default function ThreeScene({ modelPath, onLoaded }) {
  const group = useRef()
  const { scene, animations } = useGLTF(modelPath)
  const { actions } = useAnimations(animations, group)
  const { camera } = useThree()
  const { progress } = useProgress()

  useEffect(() => {
    camera.lookAt(-4, 2, 0)
    const onResize = () => {
      if (window.innerWidth < 760) {
        camera.position.set(75, 39, -65)
      } else {
        camera.position.set(44, 20, -40)
      }
    }
    onResize()
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  const lerp = (v, iMin, iMax, oMin, oMax) => {
    const t = (v - iMin) / (iMax - iMin);
    return ((1 - t) * oMin + oMax * t);
  }

  useEffect(() => {
    function onMousePosChange(e) {
      const x = lerp(e.clientX, 0, window.innerWidth, -2, 2);
      const y = lerp(e.clientY, 0, window.innerHeight, -2, 2);
      if (window.innerWidth > 760) {
        const
        cX = camera.position.x,
        cY = camera.position.y,
        cZ = camera.position.z,
        dX = 44 - x, dY = 15 - y, dZ = -40 - x;
        camera.position.set(
          cX + ((dX - cX) * 0.1),
          cY + ((dY - cY) * 0.1),
          cZ + ((dZ - cZ) * 0.1),
        )
      }
    }
    window.addEventListener('mousemove', onMousePosChange);
    return () => window.removeEventListener('mousemove', onMousePosChange);
  }, [camera]);

  useEffect(() => {
    if (progress === 100) {
      onLoaded(progress);
      actions?.typing?.play();
    }
  }, [progress, actions, onLoaded]);

  return (
    <>
      <ambientLight intensity={.7} />
      <Suspense fallback={null}>
        <group ref={group}>
          <Stage
            preset={preset}
            intensity={intensity}
            shadows={{ type: 'contact', color: 'black', opacity: 0.5 }}
            adjustCamera={false}
            environment={environment}>
            <primitive object={scene} />
          </Stage>
        </group>
      </Suspense>
    </>
  )
}
