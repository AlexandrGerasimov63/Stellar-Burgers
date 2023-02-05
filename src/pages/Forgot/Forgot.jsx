import React from "react";
import ForgotStyle from "./Forgot.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
export default function Forgot() {
  return (
    <section className={ForgotStyle.wrapper}>
      <form className={ForgotStyle.form}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className="mt-6">
          <EmailInput type="text" placeholder="E-mail" size={"default"} />
        </div>
        <div className="mt-6">
          <Button htmlType="button" type="primary" size="medium">
            Восстановить
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль?
          <Link to="/login">
            <Button htmlType="button" type="secondary" size="medium">
              Войти
            </Button>
          </Link>
        </p>
      </form>
    </section>
  );
}
