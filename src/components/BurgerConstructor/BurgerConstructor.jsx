import React, { useState, useEffect } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";

import burgerConstructorStyle from "./BurgerConstuctor.module.css";
// import PropTypes from 'prop-types'
// import { ingredientType } from "../../utils/types";
import {
  ADD_INGRIDIENT,
  DELETE_INGRIDIENT,
  ADD_INGRIDIENT_BUN,
} from "../../services/actions/constructor";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, openOrderModal } from "../../services/actions/order";

export default function BurgerConstructor(props) {
  // Получение констан из стора
  const ingridientData = useSelector((store) => store.burgerConstructor.items);
  const bunData = useSelector((store) => store.burgerConstructor.bun);

  // Получени id для отправки на сервер
  const ingridientsID = ingridientData.map((item) => item._id);
  const productID = [...ingridientsID, bunData._id];

  // Подсчет общей стоимости заказа
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const price = ingridientData.reduce(
      (sum, item) => sum + item.price,
      !bunData ? 0 : bunData.price * 2
    );
    setTotal(price);
  }, [bunData, ingridientData]);

  // Открытие модалки заказа и получение номера заказа
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(getOrderDetails(productID));
    dispatch(openOrderModal());
  };

  // Удаление игридиента из списка
  const onDelelete = (id) => {
    dispatch({
      type: DELETE_INGRIDIENT,
      id,
    });
  };

  // Днд секция дропа
  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(item) {
      if (item.data.type === "bun") {
        dispatch({
          type: ADD_INGRIDIENT_BUN,
          data: item.data,
        });
      } else {
        dispatch({
          type: ADD_INGRIDIENT,
          data: { ...item.data, id: Date.now() },
        });
      }
    },
  });

  function ConstructorItem(props) {
    return (
      <li className={`${burgerConstructorStyle.item} pt-4 pr-3`}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={props.name}
          price={props.price}
          thumbnail={props.image}
          handleClose={() => onDelelete(props.item.id)}
        />
      </li>
    );
  }
  const Constructor = () => {
    return (
      <div className={burgerConstructorStyle.container} ref={dropTarget}>
        {!bunData ? (
          <p>перетащите булку</p>
        ) : (
          <div className={`${burgerConstructorStyle.topElement}`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bunData.name + "(верх)"}
              price={bunData.price}
              thumbnail={bunData.image}
            />
          </div>
        )}
        {ingridientData.length === 0 ? (
          <p>Выберите ингредиент и перетащите</p>
        ) : (
          <ul className={burgerConstructorStyle.itemList}>
            {ingridientData.map((element, index) => {
              if (element.type === "sauce" || element.type === "main") {
                return (
                  <ConstructorItem
                    key={element.id}
                    name={element.name}
                    price={element.price}
                    image={element.image}
                    index={index}
                    item={element}
                  />
                );
              } else {
                return null;
              }
            })}
          </ul>
        )}
        {bunData && (
          <div className={`${burgerConstructorStyle.endElement} pt-3`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bunData.name + "(низ)"}
              price={bunData.price}
              thumbnail={bunData.image}
            />
          </div>
        )}
      </div>
    );
  };

  const FullPrice = (props) => {
    return (
      <div className={`${burgerConstructorStyle.fullPrice} pr-2`}>
        <p className="text text_type_digits-medium pr-2 pl-2">{total}</p>
        <CurrencyIcon />
      </div>
    );
  };

  return (
    <section className={`${burgerConstructorStyle.wrapper} ml-10`}>
      <Constructor />
      <div className={`${burgerConstructorStyle.total} pr-4 pb-10`}>
        <FullPrice />
        {ingridientData.length === 0 ? (
          <Button type="primary" size="large" onClick={openModal} disabled>
            "Оформить заказ"
          </Button>
        ) : (
          <Button type="primary" size="large" onClick={openModal}>
            "Оформить заказ"
          </Button>
        )}
      </div>
    </section>
  );
}

// BurgerConstructor.propTypes = {
//   open: PropTypes.func.isRequired,
//   data: PropTypes.arrayOf(ingredientType.isRequired).isRequired
// }
