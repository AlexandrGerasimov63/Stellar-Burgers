import React, { useEffect } from "react";
import FeedStyle from "./Feed.module.css";
import FeedCard from "../FeedCard/FeedCard";
import { useDispatch, useSelector } from "react-redux";
import {
  wsConnectedClosed,
  wsConnectedStart,
} from "../../services/actions/wsAction";
import { useLocation, Link } from "react-router-dom";
import FeedNumber from "../FeedNumber/FeedNumber";
import { openFeedModal } from "../../services/actions/feed";

export default function Feed() {
  const dispatch = useDispatch();
  const wsData = useSelector((store) => store.wsReducer.message);
  const location = useLocation();

  const getOpenFeedModal = () => {
    dispatch(openFeedModal())
  }
  useEffect(() => {
    dispatch(wsConnectedStart());
    return () => dispatch(wsConnectedClosed());
  }, []);

  return (
    <section className={FeedStyle.wrapper}>
      <h2 className="text text_type_main-large mt-10">Лента заказов</h2>
      <div className={FeedStyle.content_wrapper}>
        <div className={`${FeedStyle.content_box} mr-15`}>
          <ul className={FeedStyle.content_list}>
            {wsData.map((data) => (
              <li key={data._id} className={FeedStyle.content_list_item} onClick={getOpenFeedModal}>
                <Link
                  to={{
                    pathname: `/feed/${data._id}`,
                    state: { background: location },
                  }}
                  className={FeedStyle.content_list_item}
                >
                  <FeedCard data={data} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <FeedNumber />
      </div>
    </section>
  );
}
