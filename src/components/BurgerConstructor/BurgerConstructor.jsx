import React from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";
import burgerConstructorStyle from "./BurgerConstuctor.module.css";
import PropTypes from 'prop-types'
import { ingredientType } from "../../utils/types";
const dataItemOne = data[0];



export default function BurgerConstructor(props) {
  const NewData = props.data
  function ConstructorItem(props) {
    return (
      <li className={`${burgerConstructorStyle.item} pt-4 pr-3`}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={props.name}
          price={props.price}
          thumbnail={props.image}
        />
      </li>
    );
  }
  const Constructor = () => {
    return (
      <div className={burgerConstructorStyle.container}>
        <div className={`${burgerConstructorStyle.topElement}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={dataItemOne.name + "(верх)"}
            price={dataItemOne.price}
            thumbnail={dataItemOne.image}
          />
        </div>
        <ul className={burgerConstructorStyle.itemList}>
          {NewData.map((element) => {
            if (element.type === "sauce" || element.type === "main") {
              return (
                <ConstructorItem
                  key={element._id}
                  name={element.name}
                  price={element.price}
                  image={element.image}
                />
              );
            } else {return null}
          })}

        </ul>
        <div className={`${burgerConstructorStyle.endElement} pt-3`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={dataItemOne.name + "(низ)"}
            price={dataItemOne.price}
            thumbnail={dataItemOne.image}
          />
        </div>
      </div>
    );
  };
  const ButtomLarge = (props) => {
    return (
      <Button type="primary" size="large" onClick={props.open}>
        {props.text}
      </Button>
    );
  };
  const FullPrice = (props) => {
    return (
      <div className={`${burgerConstructorStyle.fullPrice} pr-2`}>
        <p className="text text_type_digits-medium pr-2 pl-2">{props.price}</p>
        <CurrencyIcon />
      </div>
    );
  };

  return (
    <section className={`${burgerConstructorStyle.wrapper} ml-10`}>
      <Constructor />
      <div className={`${burgerConstructorStyle.total} pr-4 pb-10`}>
        <FullPrice
          price={Number(
            24568
          )}
        />
        <ButtomLarge text={"Оформить заказ"} open={props.open} />
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  open: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired
}
