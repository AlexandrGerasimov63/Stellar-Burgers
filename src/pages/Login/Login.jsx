import React from "react";
import LoginStyle from "./Login.module.css";
import {
  Input,
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";





export default function Login() {

  const [email, setEmail] = React.useState('')

  const onChangeEmail = e => {
    setEmail(e.target.value)

    console.log(value.email)
  }
  const [value, setValue] = React.useState('')
  const onChange = e => {
    setValue(e.target.value)
    console.log(value.value)
  }
  return (
    <section className={LoginStyle.wrapper}>
      <form className={LoginStyle.form}>
        <p className="text text_type_main-medium">Вход</p>
        <div className="mt-6">
          <EmailInput


          name="email"
          value={email}
          onChange={onChangeEmail}/>
        </div>
        <div className="mt-6">
          <PasswordInput

            onChange={onChange}
            value={value}
            name={'password'}
            extraClass="mb-2"/>
        </div>

        <div className="mt-6">
          <Button htmlType="button" type="primary" size="medium">
            Войти
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вы новый пользователь?
          <Link to='/register'>
          <Button htmlType="button" type="secondary" size="medium">
            Зарегестрироваться
          </Button>
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?
          <Link to='/forgot'>
          <Button htmlType="button" type="secondary" size="medium">
            Восстановить пароль
          </Button>
          </Link>
        </p>
      </form>
    </section>
  );
}
