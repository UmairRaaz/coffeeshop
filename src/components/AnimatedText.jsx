import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const AnimatedText = ({ text }) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 1,
    },
  };
  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.1 }}
    >
        {textArray.map(line => (
            <span key={line.length} className="block">
      {line.split(" ").map((word) => (
        <span className="inline-block" key={word.length}>
          {word.split("").map((char) => (
            <motion.span
              className="inline-block"
              variants={defaultAnimation}
              key={char.length}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
      </span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
