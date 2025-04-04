import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-2xl font-medium"
        onClick={onClick}
      >
        <span>{title}</span>
        {isOpen ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="py-2 text-gray-700 text-lg space-y-2">
          {children.map((item, index) => (
            <p key={index} className="pl-4">
              • {item}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
