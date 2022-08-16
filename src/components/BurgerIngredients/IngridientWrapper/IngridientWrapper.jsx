import React from "react";
import PropTypes from 'prop-types'
import ingridientWrapperStyle from './IngridientWrapper.module.css'

function IngredientWrapper(props) {
  return (
    <article>
      <h2
        ref={props.tabRef}
        className={`${ingridientWrapperStyle.subtitle} text text_type_main-medium pb-2 pt-5`}
      >
        {props.text}
      </h2>
      <ul className={`${ingridientWrapperStyle.itemList}`}>
        {props.children}
      </ul>
    </article>
  );
}

IngredientWrapper.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export {IngredientWrapper}
