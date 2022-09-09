import React from "react";
import orderDetailsStyle from "./OrderDetails.module.css";
import doneImg from "../../images/done.svg"
import { useSelector } from "react-redux";

function OrderDetails() {
  const orderNumber = useSelector(store=>store.order.orderNumber);
  const isLoading = useSelector(store=>store.order.isLoading);
  const hasError = useSelector(store=>store.order.hasError);
  const error = useSelector(store=>store.order.error)



  return (
    <div className={`${orderDetailsStyle.wrapper}  pr-25 pl-25`}>
      <p
        className={`${orderDetailsStyle.text} text text_type_digits-large pt-15 pb-8`}
      >
        {isLoading && `Загрузка...`}
        {hasError && `${error}`}
        {!isLoading && !hasError && orderNumber}
      </p>
      <p
        className={`${orderDetailsStyle.text} text text_type_main-medium pb-15`}
      >
        идентификатор заказа
      </p>
      <img src={doneImg} alt="Иконка подтверждения" className={`${orderDetailsStyle.img} pb-15`}/>
      <p
        className={`${orderDetailsStyle.text} text text_type_main-default pb-2`}
      >
        ваш заказ начали готовить
      </p>
      <p
        className={`${orderDetailsStyle.text} text text_type_main-default text_color_inactive pb-30`}
      >
        дождитесь ответа от орбитальной станции
      </p>
    </div>
  );
}

export { OrderDetails };
