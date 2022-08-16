import React from "react";
import PropTypes from 'prop-types'

function IngridientsTitle(props) {
  return <h1 className={props.textStyle}>{props.text}</h1>;
}

IngridientsTitle.propTypes = {
  textStyle: PropTypes.string,
  text: PropTypes.string.isRequired
}

export {IngridientsTitle}
