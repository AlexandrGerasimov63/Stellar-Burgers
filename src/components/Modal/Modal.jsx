import React, { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import modalStyle from "./Modal.module.css";
import PropTypes from "prop-types";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const modalRoot = document.querySelector("#modal");

export default function Modal(props) {
  const modalOpen = useSelector((store)=>store.details.openModal)

  const history = useHistory()
  useEffect(() => {
    function handleEscKeydown(evt) {
      if (evt.key === "Escape") {
        props.close();
        if(modalOpen){
        history.goBack();}
      }
    }

    document.addEventListener("keydown", handleEscKeydown);
    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, [props]);

  // if(!modalOpen){
  //   dispatch(closeIngridientModal());
  //   dispatch(closeOrderModal());
  //   return <Redirect to='/' />
  // }

  return createPortal(
    <>
      <div className={modalStyle.wrapper}>
        <h3
          className={`${modalStyle.title} text text_type_main-large pt-15 pb-1 pl-10`}
        >
          {props.text}
        </h3>
        <Link to='/'>
        <button onClick={props.close} className={modalStyle.btnClose}>
          {<CloseIcon />}
        </button>
        </Link>
        {props.children}
      </div>
      <ModalOverlay close={props.close} />
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};
