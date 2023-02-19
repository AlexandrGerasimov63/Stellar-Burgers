import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import FeedCardStyle from "./FeedCard.module.css";


export default function FeedCard({ data }) {
  const { createdAt, number, name } = data;
  const ingredients = useSelector((store) => store.burgerIngridient.ingridients);

  const ingrList = data?.ingredients;
  const date = () => {
    return <FormattedDate date={new Date(createdAt)} />;
  };

  const orderIngredientsData = useMemo(() => {
    return ingrList.map((id) => {
      return ingredients?.find((item) => {
        return id === item._id;
      });
    });
  }, [ingrList, ingredients]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredientsData?.reduce((sum, item) => {
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredientsData]);

  const maxLength = ingrList.length;
  const hideItems = maxLength - 6;

  return (
    <div className={`${FeedCardStyle.wrapper} mr-2 mt-6 pt-6 pb-6 pl-6 pr-6 `}>
      <div className={FeedCardStyle.card_wrapper}>
        <div className={FeedCardStyle.title_wrapper}>
          <p className="text text_type_digits-default">#{number}</p>
          <p className="text text_type_main-default text_color_inactive">
            {date()}
          </p>
        </div>
        <h3 className="text text_type_main-medium mt-6">{name}</h3>
      </div>
      <div className={`${FeedCardStyle.ingredients_wrapper} mt-6`}>
        <ul className={FeedCardStyle.ingredients_list}>
          {orderIngredientsData &&
            maxLength <= 5 &&
            orderIngredientsData.map((item, index) => {
              return (
                <li key={index} className={FeedCardStyle.ingredient_item}>
                  <div className={FeedCardStyle.ingredients_image_wrapper}>
                    <div className={FeedCardStyle.ingredients_image_box}>
                      {item &&
                      <img
                      className={FeedCardStyle.ingredients_image}
                      src={item.image_mobile}
                      alt={item.name}
                      />}
                    </div>
                  </div>
                </li>
              );
            })}
          {orderIngredientsData &&
            maxLength >= 6 &&
            orderIngredientsData.slice(0, 5).map((item, index) => {
              return (
                <li key={index} className={FeedCardStyle.ingredient_item}>
                  <div className={FeedCardStyle.ingredients_image_wrapper}>
                  <div className={FeedCardStyle.ingredients_image_box}>
                  {item && <img src={item.image_mobile} alt={item.name} className={FeedCardStyle.ingredients_image}/>}
                  </div>
                  </div>
                </li>
              );
            })}
          {orderIngredientsData &&
            maxLength > 6 &&
            orderIngredientsData.slice(5, 6).map((item, index) => {
              return (
                <li key={index} className={FeedCardStyle.ingredient_item}>
                  <div className={FeedCardStyle.ingredients_image_wrapper}>
                    <div className={FeedCardStyle.ingredients_image_box}>
                      <div className={FeedCardStyle.ingredients_image_wrapper_hidden}>
                        <div className={FeedCardStyle.ingredients_image_box}>
                          <img src={item.image_mobile} alt={item.name} className={FeedCardStyle.ingredients_image_hidden}/>
                        </div>

                        <p className={`${FeedCardStyle.hidden_text} text text_type_main-default`}>+{hideItems}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
        <div className={FeedCardStyle.ingredients_price_wrapper}>
          <p className="text text_type_digits-default mr-2">{orderTotalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
