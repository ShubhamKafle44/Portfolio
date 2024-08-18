import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
export default function Button({ text }) {
  const navigate = useNavigate();

  const goToPath = (path) => () => {
    navigate(path);
  };
  return (
    <>
      <motion.button
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
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
        className="px-6 py-2 rounded-md relative radial-gradient"
        onClick={goToPath(text)}
      >
        <span className="text-neutral-100 tracking-wide font-light h-full w-full block linear-mask font-burtons">
          {text}
        </span>
      </motion.button>
    </>
  );
}
