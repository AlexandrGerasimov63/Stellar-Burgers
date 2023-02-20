import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useEffect, useMemo} from "react";
import { useSelector } from "react-redux";
import OrderCardStyle from './OrderHistoryCard.module.css'


export default function OrderHistoryCard ({data}) {
  const { createdAt, number, name, status } = data;
  const ingredients = useSelector((store) => store?.burgerIngridient.ingridients);

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
    <div className={`${OrderCardStyle.wrapper} mr-2 mb-6 pt-6 pb-6 pl-6 pr-6 `}>
      <div className={OrderCardStyle.card_wrapper}>
        <div className={OrderCardStyle.title_wrapper}>
          <p className="text text_type_digits-default">#{number}</p>
          <p className="text text_type_main-default text_color_inactive">
            {date()}
          </p>
        </div>
        <h3 className="text text_type_main-medium mt-6">{name}</h3>
      </div>
      {status === "done" && (
        <p
          className={`${OrderCardStyle.status} text text_type_main-default mt-3 pt-3`}
        >
          Выполнен
        </p>
      )}
       {status === "pending" && (
        <p
          className={`text text_type_main-default mt-3 pt-3`}
        >
          Готовится
        </p>
      )}
      {status === "created" && (
        <p
          className={`text text_type_main-default mt-3 pt-3`}
        >
          Создан
        </p>
      )}
      <div className={`${OrderCardStyle.ingredients_wrapper} mt-6`}>
        <ul className={OrderCardStyle.ingredients_list}>
          {orderIngredientsData &&
            maxLength <= 5 &&
            orderIngredientsData.map((item, index) => {
              return (
                <li key={index} className={OrderCardStyle.ingredient_item}>
                  <div className={OrderCardStyle.ingredients_image_wrapper}>
                    <div className={OrderCardStyle.ingredients_image_box}>
                      {item &&
                      <img
                      className={OrderCardStyle.ingredients_image}
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
                <li key={index} className={OrderCardStyle.ingredient_item}>
                  <div className={OrderCardStyle.ingredients_image_wrapper}>
                  <div className={OrderCardStyle.ingredients_image_box}>
                  {item && <img src={item.image_mobile} alt={item.name} className={OrderCardStyle.ingredients_image}/>}
                  </div>
                  </div>
                </li>
              );
            })}
          {orderIngredientsData &&
            maxLength > 6 &&
            orderIngredientsData.slice(5, 6).map((item, index) => {
              return (
                <li key={index} className={OrderCardStyle.ingredient_item}>
                  <div className={OrderCardStyle.ingredients_image_wrapper}>
                    <div className={OrderCardStyle.ingredients_image_box}>
                      <div className={OrderCardStyle.ingredients_image_wrapper_hidden}>
                        <div className={OrderCardStyle.ingredients_image_box}>
                          <img src={item.image_mobile} alt={item.name} className={OrderCardStyle.ingredients_image_hidden}/>
                        </div>

                        <p className={`${OrderCardStyle.hidden_text} text text_type_main-default`}>+{hideItems}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
        <div className={OrderCardStyle.ingredients_price_wrapper}>
          <p className="text text_type_digits-default mr-2">{orderTotalPrice}</p>
          <CurrencyIcon type="primary" />

        </div>
      </div>
    </div>
  );
}
