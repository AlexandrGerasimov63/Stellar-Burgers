import React from "react";
import { IIngredientType, ILocation} from "../../../utils/types";
import cardMapStyle from "./cardMap.module.css";
import { Card } from "../Card/Card";
import { Link, useLocation } from "react-router-dom";


interface ICardMap {
  open: ()=>void,
  data: IIngredientType[]
}


function CardMap({ data, open  }:ICardMap) {

  const location = useLocation<ILocation>();
  return data.map((ingr) => {
    return (
      <li key={ingr._id} className={cardMapStyle.item} onClick={()=>open()}>
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



export { CardMap };
