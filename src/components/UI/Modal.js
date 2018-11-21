import React from "react";

const Modal = props => (
  <div onClick={props.removeModal} className="modal">
    <img
      onClick={e => e.stopPropagation()}
      src={props.src}
      alt={props.alt}
      className="modal-image"
    />
    <p onClick={e => e.stopPropagation()} className="modal-image-detail">
      {props.description}
    </p>
  </div>
);

export default Modal;
