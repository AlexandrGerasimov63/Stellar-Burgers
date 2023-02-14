import React from "react";
import ingridientDetailsStyle from "./IngridientDetails.module.css";


import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


function IngridientDetails() {
  const {id}= useParams();
  const ingredients = useSelector((store) => store.burgerIngridient.ingridients);
  const data = ingredients.find(item => item._id === id);
  if(!data){
    return null
  }
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





export { IngridientDetails };
