import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";
import FeedDetailsStyle from "./FeedDetails.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";


export default function FeedDetails() {

  const Data = useSelector((store)=>store.wsReducer.message)
  const wsDataUser = useSelector((store)=>store.wsUserReducer.message)
  const { id } = useParams();
  let match = useRouteMatch()
  const isProfile = `/profile/orders/:id`;


  const ingredients = useSelector(
    (store) => store?.burgerIngridient.ingridients
  );

  let wsData = match.path===isProfile ? wsDataUser : Data;

  let order = useMemo(() => {
    return wsData?.find((el) => el._id === id);
  }, [wsData]);
  const ingrList = order?.ingredients;

  const orderIngredientsData = useMemo(() => {
    return ingrList?.map((id) => {
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

  function isCount(el) {
    return orderIngredientsData.filter((item) => {
      return item === el;
    }).length;
  }


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
          {[...new Set(orderIngredientsData)].map((item, index) => {
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
          {<FormattedDate date={new Date(order?.createdAt)} />}
        </p>
        <div className={FeedDetailsStyle.total_wrapper_box}>
          <p className="text text_type_digits-default mr-2">
            {orderTotalPrice}
          </p>
          <CurrencyIcon />
        </div>
      </div>
    </div>
  );
}
