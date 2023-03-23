import React, {ReactNode} from "react";
import ingridientWrapperStyle from './IngridientWrapper.module.css'

type TIngrWrapper = {
  tabRef: (node?: Element | null | undefined)=>void,
  children: ReactNode,
  text: string,
  type: string
}

function IngredientWrapper({tabRef, children, text, type}: TIngrWrapper) {
  return (
    <article>
      <h2
        ref={tabRef}
        className={`${ingridientWrapperStyle.subtitle} text text_type_main-medium pb-2 pt-5`}
        id={type}
      >
        {text}
      </h2>
      <ul className={`${ingridientWrapperStyle.itemList}`}>
        {children}
      </ul>
    </article>
  );
}

// IngredientWrapper.propTypes = {
//   text: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
//   type: PropTypes.string.isRequired,
//   tabRef: PropTypes.func.isRequired
// }

export {IngredientWrapper}
