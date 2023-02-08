import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import profileStyles from "./Profile.module.css";

export default function Profile() {
  const name = useSelector((store) => store.auth.userName);
  const email = useSelector((store) => store.auth.userEmail);
  const pass = useSelector((store) => store.auth.userPassword);
  const [inputOpen, changeInput] = useState(true);
  const changeFieldClick = () =>changeInput(!inputOpen);


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
              to="/orders"
              className={`${profileStyles.menu_button} text text_type_main-medium`}
            >
              История заказов
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink
              className={`${profileStyles.menu_button} text text_type_main-medium`}
              to="/login"
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className="text text_type_main-small text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <form className={`${profileStyles.inputs_wrapper} ml-15`}>
        <div className={profileStyles.input}>
          <Input
            size="default"
            placeholder="Имя"
            icon={"EditIcon"}
            value={name || 'Имя'}
            disabled={inputOpen}
            onIconClick={changeFieldClick}
            name="name"
            type="text"
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
          />
        </div>
        <div className="mt-6">
          <Input
            placeholder="Пароль"
            icon={"EditIcon"}
            value={pass || "password"}
            disabled={inputOpen}
            onIconClick={changeFieldClick}
            name="pass"
            type="password"
          />
        </div>
        {/* <div className={`${profileStyles.buttons_wrapper} mt-6`}>
          <Button>
            Отмена
          </Button>
          <Button>Сохранить</Button>
        </div> */}
      </form>
    </section>
  );
}
