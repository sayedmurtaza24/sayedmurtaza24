import React, { Suspense, useEffect, useRef } from 'react'
import { Stage, useAnimations, useGLTF, ContactShadows, useProgress } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

const environment = "city", preset = "rembrandt", intensity = 0.9;

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
        camera.position.set(44, 15, -40)
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

  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function onMousePosChange(e) {
      const x = lerp(e.clientX, 0, window.innerWidth, -2, 2);
      const y = lerp(e.clientY, 0, window.innerHeight, -2, 2);
      if (window.innerWidth > 760) {
        const currentX = camera.position.x;
        const currentY = camera.position.y;
        const currentZ = camera.position.z;
        const desiredX = 44 - x;
        const desiredY = 15 - y;
        const desiredZ = -40 - x;
        camera.position.set(
          currentX + ((desiredX - currentX) * 0.15),
          currentY + ((desiredY - currentY) * 0.15),
          currentZ + ((desiredZ - currentZ) * 0.15)
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
