import React, {useEffect} from "react";
// import { useDispatch } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import FeedDetails from "../../components/FeedDetails/FeedDetails";
import { wsUserConnectedClosed, wsUserConnectedStart } from "../../services/actions/wsActionUsers";
import { getCookie } from "../../utils/cookie";
import { ILocation } from "../../utils/types";
import HistoryDetailsStyle from './HistoryDetails.module.css'
import { useDispatch } from "../../utils/types";

export default function HistoryDetails () {
  const dispatch = useDispatch();
  const token = getCookie("accessToken")
  const location = useLocation<ILocation>();

  useEffect(() => {
    dispatch(wsUserConnectedStart());
    return () => {dispatch(wsUserConnectedClosed())};
  }, []);

  if(!token){
    return <Redirect to={location?.state?.from || '/login'} />
  }




  return(
    <div className={HistoryDetailsStyle.wrapper}>
      <FeedDetails/>
    </div>
  )
}
