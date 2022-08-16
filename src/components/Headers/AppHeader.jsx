import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyle from "./AppHeader.module.css";

export default function Appheader(props) {
  function Header(props) {
    return <header className={`${headerStyle.header}`}>{props.children}</header>;
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
      <div className={props.itemStyle }>
        <a href={props.link} className={`${headerStyle.link}`}>
          {props.icon}
          <p className={props.styleText}>{props.text}</p>
        </a>
      </div>
    );
  }
  return (
    <Header>
      <Menu>
        <MenuList>
          <MenuItem
            text="Конструктор"
            link={"#"}
            icon={<BurgerIcon type="primary" />}
            itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-1 pt-4 pb-4 pr-5 mr-2`}
            styleText={`text text_type_main-default pl-2`}
          />
          <MenuItem
            text="Лента заказов"
            link={"#"}
            icon={<ListIcon type="secondary" />}
            itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4 pr-3`}
            styleText={`text text_type_main-default text_color_inactive pl-2`}
          />
        </MenuList>
        <MenuItem link={"#"}
        icon={<Logo />}
        itemStyle={`${headerStyle.logo}`}
        />
        <MenuItem
          text="Личный кабинет"
          link={"#"}
          icon={<ProfileIcon type="secondary"/>}
          itemStyle={`${headerStyle.menuItems} mt-4 mb-4 pl-5 pt-4 pb-4`}
          styleText={`text text_type_main-default text_color_inactive pl-2`}
        />
      </Menu>
    </Header>
  );
}
