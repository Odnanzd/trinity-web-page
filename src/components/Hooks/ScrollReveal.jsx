import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  animation = "slide",
  direction = "up",
  distance = 50,
  duration = 0.5,
  transitionType = "tween",
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },

    slide: {
      hidden: { opacity: 0, ...directions[direction] },
      visible: { opacity: 1, x: 0, y: 0 },
    },

    zoom: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },

    rotate: {
      hidden: { opacity: 0, rotate: -8 },
      visible: { opacity: 1, rotate: 0 },
    },

    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  };

  return (
    <motion.div
      variants={animations[animation]}
      transition={{
        type: transitionType,
        duration,
        ...(transitionType === "spring" && {
          stiffness: 120,
          damping: 20,
        }),
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
