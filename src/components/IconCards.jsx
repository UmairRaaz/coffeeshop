import { motion } from "framer-motion";
import React from "react";

const IconCards = ({ icons }) => {
  return (
    <motion.div
      initial={{ y: "300%" }}
      whileInView={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="bg-[#b7a69d] text-white p-2 rounded-2xl"
    >
      {icons}
    </motion.div>
  );
};

export default IconCards;
