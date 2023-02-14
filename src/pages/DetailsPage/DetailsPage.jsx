import React from "react";
import { IngridientDetails } from "../../components/IngidientsDetails/IngridientDetails";
import DetailsPageStyle from "./DetailsPage.module.css"

export default function DetailsPage () {
  return(
    <div className={DetailsPageStyle.wrapper}>
    <h1 className={`text text_type_main-large`}>Детали ингридиента</h1>
    <IngridientDetails />
    </div>
  )
}
