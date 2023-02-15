import React from "react";
import FeedCardStyle from "./FeedCard.module.css";

export default function FeedCard() {
  return (
    <div className={`${FeedCardStyle.wrapper} mr-2 mt-6 pt-6 pb-6 pl-6 pr-6 `}>
      <div className={FeedCardStyle.card_wrapper}>
        <div className={FeedCardStyle.title_wrapper}>
          <p className="text text_type_digits-default">Я карточка</p>
          <p className="text text_type_main-default text_color_inactive">Я дата</p>
        </div>
        <h3 className="text text_type_main-medium mt-6">А я название бургера</h3>
      </div>
    </div>
  );
}
