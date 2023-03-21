import React from "react";
import PropTypes from 'prop-types'

type TIngrTitle = {
  textStyle: string,
  text: string
}

function IngridientsTitle({textStyle, text}:TIngrTitle) {
  return <h1 className={textStyle}>{text}</h1>;
}

// IngridientsTitle.propTypes = {
//   textStyle: PropTypes.string,
//   text: PropTypes.string.isRequired
// }

export {IngridientsTitle}
