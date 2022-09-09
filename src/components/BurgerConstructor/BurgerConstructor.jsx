import React, { useRef, useMemo, useCallback } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";

import burgerConstructorStyle from "./BurgerConstuctor.module.css";

import {
  ADD_INGRIDIENT,
  DELETE_INGRIDIENT,
  ADD_INGRIDIENT_BUN,
  MOVE_INGRIDIENT,
} from "../../services/actions/constructor";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, openOrderModal } from "../../services/actions/order";

export default function BurgerConstructor() {
  // Получение констан из стора
  const ingridientData = useSelector((store) => store.burgerConstructor.items);
  const bunData = useSelector((store) => store.burgerConstructor.bun);
  // Получени id для отправки на сервер
  const ingridientsId = useMemo(()=>ingridientData.map((item) => item._id),[ingridientData]);
  const productID = useMemo(()=>[...ingridientsId, bunData._id],[ingridientsId,bunData]);

  //Подсчитываем сумму
  const price = ingridientData.reduce(
    (sum, item) => sum + item.price,
    !bunData ? 0 : bunData.price * 2
  );

  // Открытие модалки заказа и получение номера заказа
  const dispatch = useDispatch();
  const openModal = useCallback(() => {
    dispatch(getOrderDetails(productID));
    dispatch(openOrderModal());
  },[dispatch]);

  // Удаление игридиента из списка
  const onDelete = useCallback((id) => {
    dispatch({
      type: DELETE_INGRIDIENT,
      id,
    });
  },[dispatch]);

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
    // Перемещение эт-та внутри конструктора

    const ref = useRef(null);
    const { id } = props.item;
    const index = props.index;

    const [{ opacity }, drag] = useDrag({
      type: "item",
      item: { index, id },
      collect: (monitor) => {
        return {
          opacity: monitor.isDragging() ? 0.5 : 1,
        };
      },
    });

    const [, drop] = useDrop({
      accept: "item",
      drop(items) {
        if (!ref.current) {
          return;
        }
        const dragIndex = items.index;
        const hoverIndex = index;

        dispatch({
          type: MOVE_INGRIDIENT,
          data: { dragIndex, hoverIndex },
        });
        items.index = hoverIndex;
      },
    });

    drag(drop(ref));
    return (
      <li
        className={`${burgerConstructorStyle.item} pt-4 pr-3`}
        style={{ opacity }}
        ref={ref}
      >
        <DragIcon type="primary" />
        <ConstructorElement
          text={props.name}
          price={props.price}
          thumbnail={props.image}
          handleClose={() => onDelete(props.item.id)}
        />
      </li>
    );
  }
  const Constructor = () => {
    return (
      <div className={burgerConstructorStyle.container} ref={dropTarget}>
        {!bunData ? (
          <p
            className={`${burgerConstructorStyle.title} text text_type_main-large`}
          >
            Перетащите булку
          </p>
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
          <p
            className={`${burgerConstructorStyle.title} text text_type_main-large`}
          >
            Выберите ингредиент и перетащите
          </p>
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
  const FullPrice = () => {
    return (
      <div className={`${burgerConstructorStyle.fullPrice} pr-2`}>
        <p className="text text_type_digits-medium pr-2 pl-2">{price}</p>
        <CurrencyIcon />
      </div>
    );
  };
  return (
    <section className={`${burgerConstructorStyle.wrapper} ml-10`}>
      <Constructor />
      <div className={`${burgerConstructorStyle.total} pr-4 pb-10`}>
        <FullPrice />
        {ingridientData.length === 0 || !bunData ? (
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
