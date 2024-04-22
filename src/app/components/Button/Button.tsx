import { motion } from "framer-motion";
import './Button.css';

const Button = () => {
  return (
    <motion.button
        className="px-6 py-2 rounded-md relative radial-gradient"
        initial={{ "--x": "100%", scale: 1 } as any}
        animate={{ "--x": "-100%" } as any}
        whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.25 }
        }}
        whileTap={{ 
            scale: 0.95,
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
      <span className="text-white tracking-wide font-light h-full w-full block relative linear-mask">
        Button label
      </span>
      <span className="block absolute inset-0 rounded-md p-[2px] linear-overlay" />
    </motion.button>
  );
};

export default Button;