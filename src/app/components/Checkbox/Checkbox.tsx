import { motion } from "framer-motion";
import './Checkbox.css';
import { useState } from 'react';
import { FiCheck } from "react-icons/fi";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} onClick={handleCheckboxChange}>
      <motion.div
        className="bg-gray-200 rounded p-1 cursor-pointer border-checkbox radial-gradient"
        whileHover={{ 
            scale: 1.15,
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
        <motion.div
          animate={{ 
            scale: checked ? 1 : 0,
            opacity: checked ? 1 : 0,
            rotate: checked ? 0 : 20,
            transition: { duration: 0.2, ease: "easeInOut" } 
          }}
        >
          <FiCheck className="h-[16px] w-[16px] text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Checkbox;