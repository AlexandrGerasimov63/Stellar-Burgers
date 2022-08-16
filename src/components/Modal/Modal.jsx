import React, { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import modalStyle from "./Modal.module.css";
import PropTypes from 'prop-types'
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

const modalRoot = document.querySelector("#modal");

export default function Modal(props) {
  useEffect(() => {
    function handleEscKeydown(evt) {
      if (evt.key === "Escape") {
        props.close();
      }
    }
    if (props.open) {
      document.addEventListener("keydown", handleEscKeydown);

      return () => {
        document.removeEventListener("keydown", handleEscKeydown);
      };
    }
  }, [props.open]);
  return createPortal(
    <>
      <div className={modalStyle.wrapper}>
        <h3
          className={`${modalStyle.title} text text_type_main-large pt-15 pb-1 pl-10`}
        >
          {props.text}
        </h3>
        <button onClick={props.close} className={modalStyle.btnClose}>
          {<CloseIcon />}
        </button>
        {props.children}
      </div>
      <ModalOverlay close={props.close}/>
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.func.isRequired,
  text: PropTypes.string
}
