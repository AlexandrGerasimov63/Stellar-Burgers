import React from "react";
import ingridientDetailsStyle from "./IngridientDetails.module.css";

import { ingredientType } from "../../utils/types";


function IngridientDetails({ data }) {
  function Ingridient(data) {
    return (
      <li className={`${ingridientDetailsStyle.item}`}>
        <p
          className={`${ingridientDetailsStyle.text} text text_type_main-default text_color_inactive pb-2`}
        >
          {data.text}
        </p>
        <p
          className={`${ingridientDetailsStyle.text} text text_type_main-default text_color_inactive`}
        >
          {data.value}
        </p>
      </li>
    );
  }

  return (
    <div className={`${ingridientDetailsStyle.wrapper}  pr-25 pb-15 pl-25`}>
      <img
        src={data.image_large}
        alt={data.name}
        className={ingridientDetailsStyle.image}
      />
      <p
        className={`${ingridientDetailsStyle.title} text text_type_main-medium pt-4`}
      >
        {data.name}
      </p>
      <ul className={`${ingridientDetailsStyle.listItems} pt-8`}>
        <Ingridient text="Калории,ккал" value={data.calories} />
        <Ingridient text="Белки, г" value={data.proteins} />
        <Ingridient text="Жиры, г" value={data.fat} />
        <Ingridient text="Углеводы, г" value={data.carbohydrates} />
      </ul>
    </div>
  );
}



IngridientDetails.propTypes = {
  data: ingredientType.isRequired
}

export { IngridientDetails };
