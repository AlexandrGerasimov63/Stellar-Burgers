import React, { useEffect } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch , useLocation} from "react-router-dom";
import {
  checkUser,
  logout,
  resetProfileValue,
  setProfile,
  setProfileValue,
  toggleInputEmail,
  toggleInputName,
  toggleInputPass,
  updateUser,
} from "../../services/actions/user";
import profileStyles from "./Profile.module.css";
import OrdersHistory from "../../components/OrdersHistory/OrdersHistory";

export default function Profile() {
  const dispatch = useDispatch();
  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);
  const inputPasswordRef = React.useRef(null)
  const userName = useSelector((store) => store.auth.userName);
  const userEmail = useSelector((store) => store.auth.userEmail);
  const userPass = useSelector((store) => store.auth.userPassword);
  const name = useSelector((store) => store.auth.name);
  const email = useSelector((store) => store.auth.email);
  const pass = useSelector((store) => store.auth.password);
  const err = useSelector((store) => store.auth.error);
  const hasError = useSelector((store) => store.auth.hasError);
  const nameInput = useSelector((store)=>store.auth.nameInput);
  const emailInput = useSelector((store)=>store.auth.emailInput);
  const passInput = useSelector((store)=>store.auth.passInput);

  const location = useLocation();
  const background = location.state?.background;

  const onChange = (evt) => {
    dispatch(setProfileValue(evt.target.name, evt.target.value));
  };

  useEffect(() => {
    dispatch(checkUser());
    dispatch(setProfile());
  }, []);


  function logoutUser() {
    dispatch(logout());
  }

  function onClickReset(evt) {
    evt.preventDefault();
    dispatch(resetProfileValue());
  }

  function onSubmitUser(evt) {
    evt.preventDefault();
    dispatch(updateUser(name, email, pass));
  }

  function toggleName () {
    dispatch(toggleInputName());
    setTimeout(() => inputNameRef.current.focus(), 0)
  }
  function toggleEmail () {
    dispatch(toggleInputEmail());
    setTimeout(() => inputEmailRef.current.focus(), 0)
  }
  function togglePass () {
    dispatch(toggleInputPass());
    setTimeout(() => inputPasswordRef.current.focus(), 0)
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
          <form
            className={`${profileStyles.inputs_wrapper} ml-15`}
            onSubmit={onSubmitUser}
          >
            <div className={profileStyles.input}>
              <Input
                size="default"
                placeholder="Имя"
                icon={"EditIcon"}
                value={name || "Имя"}
                disabled={nameInput}
                onIconClick={toggleName}
                name="name"
                type="text"
                onChange={onChange}
                ref={inputNameRef}
              />
            </div>
            <div className="mt-6">
              <Input
                placeholder="Логин"
                icon={"EditIcon"}
                value={email || "Адрес электронной почты"}
                disabled={emailInput}
                onIconClick={toggleEmail}
                name="email"
                type="email"
                onChange={onChange}
                ref={inputEmailRef}
              />
            </div>
            <div className="mt-6">
              <Input
                placeholder="Пароль"
                icon={"EditIcon"}
                value={pass || "password"}
                disabled={passInput}
                onIconClick={togglePass}
                name="password"
                type="password"
                onChange={onChange}
                ref={inputPasswordRef}
              />
            </div>
            <div className={`${profileStyles.buttons_wrapper} mt-6`}>
              <Button
                htmlType="reset"
                disabled={
                  name === userName && email === userEmail && pass === userPass
                }
                onClick={onClickReset}
              >
                Отмена
              </Button>
              <Button
                htmlType="submit"
                disabled={
                  name === userName && email === userEmail && pass === userPass
                }
              >
                Сохранить
              </Button>
            </div>
          </form>
        </Route>
        <Route path="/profile/orders" >
          <OrdersHistory/>
        </Route>
      </Switch>
      </div>
    </section>
  );
}
