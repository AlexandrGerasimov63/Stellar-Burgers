import React, {ReactNode} from "react";
import PropTypes from 'prop-types'

type TIngrSection = {
  sectionStyle:string,
  children: ReactNode
}

function IngridientsSection({sectionStyle,children}:TIngrSection) {
  return <section className={sectionStyle}>{children}</section>;
}

// IngridientsSection.propTypes = {
//   sectionStyle: PropTypes.string,
//   children: PropTypes.node.isRequired
// }

export {IngridientsSection}
