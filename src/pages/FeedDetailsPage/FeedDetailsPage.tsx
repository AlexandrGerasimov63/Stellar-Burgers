import React, {useEffect} from "react";
// import { useDispatch } from "react-redux";
import FeedDetails from "../../components/FeedDetails/FeedDetails";
import { wsConnectedClosed, wsConnectedStart } from "../../services/actions/wsAction";
import { useDispatch } from "../../utils/types";
import FeedPageStyle from './FeedDetailsPage.module.css'



export default function FeedDetailsPage () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectedStart());
    return () => {dispatch(wsConnectedClosed())};
  }, []);

  return(
    <div className={FeedPageStyle.wrapper}>
      <FeedDetails/>
    </div>
  )
}
