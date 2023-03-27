import React from "react";
import modalOverlayStyle from './ModalOverlay.module.css'
import PropTypes from 'prop-types'

type TModalOverlay= {
  close: ()=>void
}
const ModalOverlay = ({close}:TModalOverlay) => {

  return(
  <div className={modalOverlayStyle.overlay} onClick={close}></div>
  )
}


// ModalOverlay.propTypes ={
//   close: PropTypes.func.isRequired
// }

export {ModalOverlay}

