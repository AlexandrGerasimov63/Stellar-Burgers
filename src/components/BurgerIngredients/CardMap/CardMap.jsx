import React from "react";
import PropTypes from 'prop-types'
import { ingredientType } from "../../../utils/types";
import cardMapStyle from "./cardMap.module.css"
import { Card } from "../Card/Card";


function CardMap({data}) {


  return data.map((ingr) => {
    return (
      <li
        key={ingr._id}
        className={cardMapStyle.item}
      >
        <Card data={ingr} image={ingr.image} name={ingr.name} price={ingr.price} />
      </li>
    );
  });
}

CardMap.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
}


export {CardMap}
