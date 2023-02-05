import React from "react";
import ResetStyle from './Reset.module.css'
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
export default function Reset () {
  return (
    <section className={ResetStyle.wrapper}>
      <form className={ResetStyle.form}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className="mt-6">
          <PasswordInput type="password" placeholder="Введите новый пароль" size={"default"} />
        </div>
        <div className="mt-6">
          <Input type="text" placeholder="Введите код из письма" />
        </div>

        <div className="mt-6">
          <Button htmlType="button" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
         Вспомнили пароль?
         <Link to='/login'>
          <Button htmlType="button" type="secondary" size="medium">
            Войти
          </Button>
          </Link>
        </p>
      </form>
    </section>
  )
}
