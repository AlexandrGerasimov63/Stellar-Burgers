import React from "react";
import { useSelector } from "react-redux";
import FeedNumberStyle from './FeedNumber.module.css'

export default function FeedNumber () {
  const wsData = useSelector((store) => store.wsReducer.message);

  const total = useSelector((store)=>store.wsReducer.total);
  const totalToday = useSelector((store)=> store.wsReducer.totalToday)

  const doneStatusArr = wsData.filter((item)=>item.status === "done")
  const pendingStatusArr = wsData.filter((item)=>item.status === "pending")

  return(
    <div>
    <div className={FeedNumberStyle.number_container}>
      <div className={FeedNumberStyle.number_ready_wrapper}>
        <p className={` text text_type_main-medium`}>Готовы:</p>
        <ul className={FeedNumberStyle.number_ready_list}>
          {doneStatusArr.map((item, index) => (
            <li
              key={index}
              className={`${FeedNumberStyle.number_ready} text text_type_digits-default mt-2`}
            >
              <p className="text text_type_digits-default mt-2">{item.number}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p
          className={`${FeedNumberStyle.number_pending} text text_type_main-medium`}
        >
          В работе:
        </p>
        <ul className={FeedNumberStyle.number_ready_list}>
          {pendingStatusArr.map((item, index) => (
            <li key={index}>
              <p className="text text_type_digits-default mt-2">
                {item.number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div>
      <p className="text text_type_main-medium mt-15">
        Выполнено за всё время:
      </p>
      <p
        className={`${FeedNumberStyle.number_total} text text_type_digits-large`}
      >
        {total}
      </p>
      <p className="text text_type_main-medium mt-15">
        Выполнено за сегодня:
      </p>
      <p
        className={`${FeedNumberStyle.number_total} text text_type_digits-large`}
      >
        {totalToday}
      </p>
    </div>
  </div>
  )
}
