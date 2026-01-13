import { motion } from "framer-motion";

const ScrollRevealGroup = ({
  children,
  stagger = 0.2,
  once = true,
  amount = 0.3,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealGroup;
