import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for fluid movement - Lower stiffness/damping for "floaty" feel
    const springX = useSpring(mouseX, { stiffness: 40, damping: 25, mass: 0.8 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 25, mass: 0.8 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 250); // Center the larger 500px blob
            mouseY.set(e.clientY - 250);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 rounded-full blur-[100px] pointer-events-none z-[1]"
            style={{ x: springX, y: springY }}
        />
    );
};
