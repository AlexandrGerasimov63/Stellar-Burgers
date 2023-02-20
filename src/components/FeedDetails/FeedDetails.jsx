import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FeedDetailsStyle from "./FeedDetails.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function FeedDetails() {
  const ingredients = useSelector(
    (store) => store.burgerIngridient.ingridients
  );
  const wsData = useSelector((store) => store.wsReducer.message);
  const { id } = useParams();
  const order = wsData?.find((el) => el._id === id);
  const ingrList = order?.ingredients;

  let summ = 0;
  let dataArr = [];
  if (ingrList) {
    for (let el of ingredients) {
      for (let id of ingrList) {
        if (el._id === id) {
          dataArr.push(el);
          summ += el.price;
        }
      }
    }
  }

  function isCount(el) {
    let count = dataArr.filter((item) => {
      return item === el;
    }).length;
    return count;
  }

  const date = () => {
    return <FormattedDate date={new Date(order?.createdAt)} />;
  };

  return (
    <div className={FeedDetailsStyle.wrapper}>
      <div>
        <p
          className={`${FeedDetailsStyle.number} text text_type_digits-default `}
        >
          #{order?.number}
        </p>
      </div>
      <p
        className={`${FeedDetailsStyle.name} text text_type_main-medium mt-10`}
      >
        {order?.name}
      </p>
      {order?.status === "done" && (
        <p
          className={`${FeedDetailsStyle.status} text text_type_main-default mt-3 pt-3`}
        >
          Выполнен
        </p>
      )}
      <p
        className={`${FeedDetailsStyle.compound} text text_type_main-medium mt-15 `}
      >
        Состав :
      </p>
      <div className={FeedDetailsStyle.item_box}>
        <ul className={FeedDetailsStyle.items_list}>
          {[...new Set(dataArr)].map((item, index) => {
            return (
              <li className={`${FeedDetailsStyle.ingr_item} mt-6`} key={index}>
                <div className={FeedDetailsStyle.list_ingr_wrapper}>
                  <div className={FeedDetailsStyle.image_wrapper}>
                    <div className={FeedDetailsStyle.image_wrapper_box}>
                      <img
                        className={FeedDetailsStyle.image}
                        src={item.image_mobile}
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <p className="text text_type_main-default ml-4">
                    {item.name}
                  </p>
                </div>

                <div className={FeedDetailsStyle.price_wrapper}>
                  <p className="text text_type_digits-default mr-2">
                    {isCount(item)} x {item.price}
                  </p>
                  <CurrencyIcon />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${FeedDetailsStyle.total_wrapper} mt-10`}>
        <p className="text text_type_main-default text_color_inactive">
          {date()}
        </p>
        <div className={FeedDetailsStyle.total_wrapper_box}>
          <p className="text text_type_digits-default mr-2">{summ}</p>
          <CurrencyIcon />
        </div>
      </div>
    </div>
  );
}
