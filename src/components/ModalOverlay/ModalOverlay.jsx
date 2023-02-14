import React from "react";
import modalOverlayStyle from './ModalOverlay.module.css'
import PropTypes from 'prop-types'


const ModalOverlay = (props) => {

  return(
  <div className={modalOverlayStyle.overlay} onClick={props.close}></div>
  )
}


ModalOverlay.propTypes ={
  close: PropTypes.func.isRequired
}

export {ModalOverlay}

