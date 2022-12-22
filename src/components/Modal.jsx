import React from "react";
import "./Modal.scoped.css";

const Modal = (props) => {
  return (
      <div className={`modal-container ${props.visible ? "shown" : "hidden"}`} onClick={()=>{!props.fixed && props.setVisible(false)}}>
        <div className={`modal ${props.visible ? "shown" : "hidden"}`}>
          {props.children}
        </div>
      </div>
  );
};

export default Modal;
