import React from "react";
import PropTypes from 'prop-types'
import { ingredientType } from "../../../utils/types";
import cardMapStyle from "./cardMap.module.css"
import { Card } from "../Card/Card";

function CardMap({ data, open }) {
  return data.map((ingr, index) => {
    return (
      <li
        key={ingr._id}
        onClick={open}
        className={cardMapStyle.item}
      >
        <Card image={ingr.image} name={ingr.name} price={ingr.price} />
      </li>
    );
  });
}

CardMap.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  open: PropTypes.func.isRequired
}


export {CardMap}
