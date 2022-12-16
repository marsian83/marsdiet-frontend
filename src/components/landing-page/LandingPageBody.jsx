import React from "react";
import "./LandingPageBody.scoped.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

//framer motion variants decalration for cards' scroll animation
const topCardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

export const LandingPageBody = () => {
  // useEffect Hook
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  //Other Hooks
  const control = useAnimation();
  const [ref, inView] = useInView();

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
          <div className="top-card-holder" id="top-card-holder1">
            <div className="top-card" id="top-card1">
              <img src={require("../../assets/jogging.png")} alt="" />
              <div className="top-card-top" />
              <div className="top-card-bottom">
                <h4>Take healthy choices</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo recusandae consequatur hic?
                </p>
              </div>
            </div>
          </div>
          <div className="top-card-holder" id="top-card-holder2">
            <div className="top-card" id="top-card2">
              <img src={require("../../assets/drinking-water.png")} alt="" />
              <div className="top-card-top" />
              <div className="top-card-bottom">
                <h4>Take healthy choices</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo recusandae consequatur minima
                </p>
              </div>
            </div>
          </div>
          <div className="top-card-holder" id="top-card-holder3">
            <div className="top-card" id="top-card3">
              <img src={require("../../assets/sleep-analysis.png")} alt="" />
              <div className="top-card-top" />
              <div className="top-card-bottom">
                <h4>Take healthy choices</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo recusandae consequatur hic?
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="how-it-works-container">
        <h4>HOW IT WORKS</h4>
        <div className="how-it-works">
          <div className="how-it-works-fade" />
          <div className="how-it-works-grid" />
        </div>
      </div>
    </div>
  );
};
