import React, { useEffect } from "react";
import OrdersHistoryStyle from "./OrdersHistory.module.css";
import {
  wsUserConnectedStart,
  wsUserConnectedClosed,
} from "../../services/actions/wsActionUsers";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { openHistoryModal } from "../../services/actions/profileHistory";
import FeedCard from "../FeedCard/FeedCard";

export default function OrdersHistory() {
  const location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsUserConnectedStart());
    return () => dispatch(wsUserConnectedClosed());
  }, []);

  const wsData = useSelector((store) => store?.wsUserReducer.message);
  wsData.reverse()

  const getOpenHistoryModal = () => {
    dispatch(openHistoryModal())
  }

  return (
    <div className={`${OrdersHistoryStyle.content_box}`}>
      <ul className={OrdersHistoryStyle.content_list}>
        {wsData.map((data) => (
          <li
            key={data._id}
            className={OrdersHistoryStyle.content_list_item}
            onClick={getOpenHistoryModal}
          >
            <Link
              to={{
                pathname: `/profile/orders/${data._id}`,
                state: { background: location },
              }}

              className={OrdersHistoryStyle.content_list_item}
            >
              <FeedCard data={data} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
