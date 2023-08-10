import React from "react";
import { motion } from "framer-motion";

type transitionProps = {
  children: React.ReactNode;
  iy?: any;
  ix?: any;
  ax?: any;
  ay?: any;
  ds?: any;
  iniScl?: any;
  aniScl?: any;
  type?: any;
};

const TransitionComponent = ({
  ix = 0,
  iy = 0,
  ax = 0,
  ay = 0,
  ds = 0,
  type = "tween",
  iniScl = 1,
  aniScl = 1,
  children,
}: transitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: ix, y: iy, scale: iniScl }}
      whileInView={{ x: ax, opacity: 1, y: ay, scale: aniScl }}
      transition={{
        duration: ds,
        delay: 0.5,
        type: type,
        damping: 10,
        bounce: ax,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default TransitionComponent;
