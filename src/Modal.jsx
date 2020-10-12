import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  const isOpen = true;
  return (
      <div className={`modal-overlay ${isOpen ? `isModalOpen` : null}`}>
          <div className="modal-container">
              <h4>Some random name</h4>
              <p>Some Modal</p>
              <button className="btn btn-primary">Close</button>
          </div>
    </div>
  );
};

Modal.propTypes = {

};

export default Modal;
