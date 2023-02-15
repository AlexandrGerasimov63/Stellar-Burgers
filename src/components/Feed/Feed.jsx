import React from "react";
import FeedStyle from "./Feed.module.css"
import FeedCard from "../FeedCard/FeedCard";


export default function Feed () {
  return(
    <section className={FeedStyle.wrapper}>
      <h1 className="text text_type_main-large mt-10">Лента заказов</h1>
      <FeedCard/>
    </section>
  )
}
