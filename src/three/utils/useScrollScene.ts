import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

export function useScrollScene() {
  const { camera, scene } = useThree();

  useEffect(() => {
    // Expose scene to GSAP globally or hook up ScrollTrigger mappings here.
    // Example hook placeholder mapping progress 0 -> 1 to camera Z
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    tl.to(camera.position, {
      z: 5,
      y: -2,
      ease: 'none',
    }, 0);

    return () => {
      tl.kill();
    };
  }, [camera, scene]);
}
