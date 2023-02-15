import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./AppHeader.module.css";
import { NavLink, Link } from "react-router-dom";

export default function Appheader() {
  function Header(props) {
    return (
      <header className={`${headerStyle.header}`}>{props.children}</header>
    );
  }
  function Menu(props) {
    return <nav className={`${headerStyle.navbar}`}>{props.children}</nav>;
  }
  function MenuList(props) {
    return (
      <ul className={`${headerStyle.menu}`}>
        <li className={headerStyle.menuList}>{props.children}</li>
      </ul>
    );
  }
  function MenuItem(props) {
    return (
      <div className={props.itemStyle}>
        {props.icon}
        <p className={props.styleText}>{props.text}</p>
      </div>
    );
  }
  return (
    <Header>
      <Menu>
        <MenuList>
          <NavLink
            to="/"
            className={`${headerStyle.link}`}
            activeClassName={headerStyle.activeLink}
          >
            <MenuItem
              text="Конструктор"
              icon={<BurgerIcon type="secondary" />}
              itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-1 pt-4 pb-4 pr-5 mr-2`}
              styleText={`text text_type_main-default pl-2`}
            />
          </NavLink>
          <NavLink to="/feed" className={`${headerStyle.link}`}>
            <MenuItem
              text="Лента заказов"
              icon={<ListIcon type="secondary" />}
              itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4 pr-3`}
              styleText={`text text_type_main-default pl-2`}
            />
          </NavLink>
        </MenuList>
        <Link to="/" className={`${headerStyle.link}`}>
          <MenuItem icon={<Logo />} itemStyle={`${headerStyle.logo}`} />
        </Link>
        <NavLink to="/profile" className={`${headerStyle.link}`}>
          <MenuItem
            text="Личный кабинет"
            icon={<ProfileIcon type="secondary" />}
            itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4`}
            styleText={`text text_type_main-default text_color_inactive pl-2`}
          />
        </NavLink>
      </Menu>
    </Header>
  );
}
