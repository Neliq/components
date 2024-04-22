import { motion } from "framer-motion";
import './Input.css';

const Input = () => {
  return (
    <motion.input
        placeholder="Input placeholder"
        className="px-6 py-2 rounded-md relative radial-gradient text-white font-light border-input"
        whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.25 }
        }}
        whileFocus={{
          scale: 1.05,
          transition: { duration: 0.25 }
        }}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
            },
        }}
    >

    </motion.input>
  );
};

export default Input;