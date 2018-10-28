import React from "react";

const Modal = props => (
  <div onClick={props.removeModal} className="modal">
    <img
      onClick={e => e.stopPropagation()}
      src={props.pizza[props.index]}
      alt="pizza"
      className="modal-image"
    />
    <p onClick={e => e.stopPropagation()} className="modal-image-detail">
      All our pizzas are made with the freshest ingredients. We pride our selves
      to only serve organic ingredients only! Total Price for this pizza is:
      {" $" + Math.floor(Math.random() * (12 - 8) + 8).toFixed(2)}
    </p>
  </div>
);

export default Modal;
