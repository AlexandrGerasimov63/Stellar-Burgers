import React from "react";
import PropTypes from "prop-types";
import { ingredientType } from "../../../utils/types";
import cardMapStyle from "./cardMap.module.css";
import { Card } from "../Card/Card";
import { Link, useLocation } from "react-router-dom";

function CardMap({ data, open }) {
  const location = useLocation();
  return data.map((ingr) => {
    return (
      <li key={ingr._id} className={cardMapStyle.item} onClick={()=>open(ingr._id)}>
        <Link className={cardMapStyle.link}
        to={{
          pathname: `/ingredients/${ingr._id}`,
          state: { background: location },
        }}
        >
        <Card
          data={ingr}
          image={ingr.image}
          name={ingr.name}
          price={ingr.price}
        />
        </Link>
      </li>
    );
  });
}

CardMap.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  open: PropTypes.func.isRequired
};

export { CardMap };
