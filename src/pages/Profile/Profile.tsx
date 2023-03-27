import React from "react";

// import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch , useLocation} from "react-router-dom";
import {
  logout,
} from "../../services/actions/user";
import profileStyles from "./Profile.module.css";
import OrdersHistory from "../../components/OrdersHistory/OrdersHistory";
import ProfileForm from "./ProfileForm";
import { ProtectedRoute } from "../../components/ProtectedRoute/ProtectedRoute";
import { ILocation, useDispatch, useSelector } from "../../utils/types";



export default function Profile() {
  const err = useSelector((store) => store.auth.error);
  const hasError = useSelector((store) => store.auth.hasError);
  const dispatch = useDispatch()
  const location = useLocation<ILocation>();
  const background = location.state?.background;




  function logoutUser() {
    dispatch(logout());
  }


  return (
    <section className={profileStyles.content_box}>
      <div className={profileStyles.menu_wrapper}>
        <ul className={profileStyles.menu_list}>
          <li>
            <NavLink
              to="/profile"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              activeClassName={profileStyles.active_button}
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              to="/profile/orders"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              activeClassName={profileStyles.active_button}
              exact
            >
              История заказов
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              onClick={logoutUser}
              to="/login"
            >
              Выход
            </NavLink>
          </li>
          {hasError && <p>{`${err}`}</p>}
        </ul>
        {location.pathname ==='/profile' && (<p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>)}
        {location.pathname ==='/profile/orders' && (<p className="text text_type_main-small text_color_inactive mt-20">
        В этом разделе вы можете просмотреть свою историю заказов
        </p>)}
      </div>
      <div>
      <Switch location={background || location}>
        <Route path="/profile" exact>
          <ProfileForm/>
        </Route>
        <ProtectedRoute path="/profile/orders" >
          <OrdersHistory/>
        </ProtectedRoute>
      </Switch>

      </div>
    </section>
  );
}
