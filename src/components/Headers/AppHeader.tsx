import React, { ReactNode } from "react";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./AppHeader.module.css";
import { NavLink, Link } from "react-router-dom";

type THeader = {
  children: ReactNode

}
type TMenu = {
  itemStyle: string,
  text?: string,
  styleText?: string,
  icon: JSX.Element
}
export default function Appheader() {
  function Header({children}:THeader) {
    return (
      <header className={`${headerStyle.header}`}>{children}</header>
    );
  }
  function Menu({children}:THeader) {
    return <nav className={`${headerStyle.navbar}`}>{children}</nav>;
  }
  function MenuList({children}:THeader) {
    return (
      <ul className={`${headerStyle.menu}`}>
        <li className={headerStyle.menuList}>{children}</li>
      </ul>
    );
  }
  function MenuItem({text,icon, itemStyle,styleText }: TMenu) {
    return (
      <div className={itemStyle}>
        {icon}
        <p className={styleText}>{text}</p>
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
            exact
          >
            <MenuItem
              text="Конструктор"
              icon={<BurgerIcon type="secondary" />}
              itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-1 pt-4 pb-4 pr-5 mr-2`}
              styleText={`text text_type_main-default pl-2`}
            />
          </NavLink>
          <NavLink to="/feed"
          className={`${headerStyle.link}`}
          activeClassName={headerStyle.activeLink}
          exact
          >
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
        <NavLink to="/profile"
        className={`${headerStyle.link}`}
        activeClassName={headerStyle.activeLink}
        // exact
        >
          <MenuItem
            text="Личный кабинет"
            icon={<ProfileIcon type="secondary" />}
            itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4`}
            styleText={`text text_type_main-default pl-2`}
          />
        </NavLink>
      </Menu>
    </Header>
  );
}
