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
  updateUser,
} from "../../services/actions/user";
import profileStyles from "./Profile.module.css";

export default function Profile() {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.auth.userName);
  const userEmail = useSelector((store) => store.auth.userEmail);
  const userPass = useSelector((store) => store.auth.userPassword);
  const name = useSelector((store) => store.auth.name);
  const email = useSelector((store) => store.auth.email);
  const pass = useSelector((store) => store.auth.password);
  const err = useSelector((store) => store.auth.error);
  const hasError = useSelector((store) => store.auth.hasError);
  const location = useLocation();
  const background = location.state && location.state.background;

  const onChange = (evt) => {
    dispatch(setProfileValue(evt.target.name, evt.target.value));
  };

  useEffect(() => {
    dispatch(checkUser());
    dispatch(setProfile());
  }, []);

  const [inputOpen, changeInput] = useState(true);
  const changeFieldClick = () => changeInput(!inputOpen);

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

  return (
    <section className={profileStyles.content_box}>
      <div className={profileStyles.menu_wrapper}>
        <ul className={profileStyles.menu_list}>
          <li>
            <NavLink
              to="/profile"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              activeClassName={profileStyles.active_button}
            >
              Профиль
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              to="/profile/orders"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
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
        <p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
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
                disabled={inputOpen}
                onIconClick={changeFieldClick}
                name="name"
                type="text"
                onChange={onChange}
              />
            </div>
            <div className="mt-6">
              <Input
                placeholder="Логин"
                icon={"EditIcon"}
                value={email || "Адрес электронной почты"}
                disabled={inputOpen}
                onIconClick={changeFieldClick}
                name="email"
                type="email"
                onChange={onChange}
              />
            </div>
            <div className="mt-6">
              <Input
                placeholder="Пароль"
                icon={"EditIcon"}
                value={pass || "password"}
                disabled={inputOpen}
                onIconClick={changeFieldClick}
                name="password"
                type="password"
                onChange={onChange}
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
          <div className=""><h1>Привет</h1></div>
        </Route>
      </Switch>
      </div>
    </section>
  );
}
