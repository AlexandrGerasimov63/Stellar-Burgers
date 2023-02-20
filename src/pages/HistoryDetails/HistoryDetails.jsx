import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import OrderHistoryDetails from "../../components/OrderHistoryDetails/OrderHistoryDetails";
import { wsUserConnectedClosed, wsUserConnectedStart } from "../../services/actions/wsActionUsers";
import HistoryDetailsStyle from './HistoryDetails.module.css'

export default function HistoryDetails () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsUserConnectedStart());
    return () => dispatch(wsUserConnectedClosed());
  }, []);


  return(
    <div>
      <OrderHistoryDetails/>
    </div>
  )
}
