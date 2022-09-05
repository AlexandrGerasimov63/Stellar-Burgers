import React from "react";
import PropTypes from 'prop-types'
import cardStyle from './Card.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch} from "react-redux";
import {openIngridientModal} from '../../../services/actions/details'
import { useDrag } from "react-dnd/dist/hooks";

function Card(props) {
  const { image, name, price, data } = props;

  const dispacth = useDispatch()
  const openDetailsModal = (data) => {
    dispacth(openIngridientModal(data))
  }

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredients",
    item: {data},
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });


  return (
    <div className={cardStyle.cardWrapper} onClick={()=>openDetailsModal(data)} style={{opacity}} ref={dragRef}>
      <img
        src={image}
        alt={name}
        className={cardStyle.cardImage}
      />
      <div className={`${cardStyle.cardPrice} pt-1 pb-1`}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p
        className={`${cardStyle.cardName} text text_type_main-default pb-10 pt-1`}
      >
        {name}
      </p>
      <Counter count={1} size="default" />
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}


export {Card}
