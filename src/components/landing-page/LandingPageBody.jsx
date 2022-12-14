import React from "react";
import "./LandingPageBody.scoped.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const topCardVariants = {
  visible: {
    opacity: 1,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    scale: 1,
  },
};

export const LandingPageBody = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="body">
      <div className="top-cards-heading">
        <h3>Staying healthy, made easy with technology</h3>
      </div>
      <motion.div
        className="top-cards-container"
        ref={ref}
        variants={topCardVariants}
        initial="hidden"
        animate={control}
      >
        <div className="top-cards-container">
          <div className="top-card" id="top-card1">
            as
          </div>
          <div className="top-card" id="top-card2">
            a
          </div>
          <div className="top-card" id="top-card3">
            a
          </div>
        </div>
      </motion.div>
    </div>
  );
};
