import React, { useEffect, ReactNode, FC } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import modalStyle from "./Modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

type TModal = {
  text: string;
  children: ReactNode;
  close: () => void;
};

const modalRoot = document.querySelector("#modal") as HTMLElement;

export default function Modal({text, children, close}:TModal) {



  useEffect(() => {
    function handleEscKeydown(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleEscKeydown);
    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, [close]);



  return createPortal(
    <>
      <div className={modalStyle.wrapper}>
        <h3
          className={`${modalStyle.title} text text_type_main-large pt-15 pb-1 pl-10`}
        >
          {text}
        </h3>

        <button onClick={close} className={modalStyle.btnClose}>
          <CloseIcon type="primary"/>
        </button>

        {children}
      </div>
      <ModalOverlay close={close} />
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};
