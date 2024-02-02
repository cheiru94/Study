import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const BlackBoxTransition = ({ children }: { children: ReactNode }) => {
  // 이 설저한 내용을 적용 시키려면  variants라는 프로퍼티에 저장해서  motion에 넣어준다.
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animation: {
      height: 0,
      opacity: 1,
      rotate: [0, 5, 5, 0],

      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <div className="absolute">
      <motion.div
        style={{ backgroundColor: "rgb(93, 40, 216)" }}
        initial="initial"
        animate="animation"
        variants={blackBox}
        className="relative w-full"
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BlackBoxTransition;
