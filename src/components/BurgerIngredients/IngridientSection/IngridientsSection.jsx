import React from "react";
import PropTypes from 'prop-types'


function IngridientsSection(props) {
  return <section className={props.sectionStyle}>{props.children}</section>;
}

IngridientsSection.propTypes = {
  sectionStyle: PropTypes.string,
  children: PropTypes.node.isRequired
}

export {IngridientsSection}
