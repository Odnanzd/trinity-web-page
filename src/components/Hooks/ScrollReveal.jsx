
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children 
 * @param {number} [props.delay=0] 
 */
const ScrollReveal = ({ children, delay = 0 }) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.3 }); 

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 } 
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ 
                duration: 0.5, 
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;