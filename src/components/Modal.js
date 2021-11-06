import { Fragment } from "react";
import { createPortal } from "react-dom";

import Card from "./Card";

import "./Modal.css";

function Modal(props) {
  function closeHandler() {
    props.onCloseModal();
  }

  return (
    <Fragment>
      {createPortal(<div className="overlay"></div>, document.body)}
      {createPortal(
        <Card className="modal">
          <div className="modal-top">
            <strong>Invalid Input</strong>
          </div>
          <div className="modal-content">
            <p>{props.message}</p>
            <button onClick={closeHandler}>Okay</button>
          </div>
        </Card>,
        document.body
      )}
    </Fragment>
  );
}

export default Modal;
