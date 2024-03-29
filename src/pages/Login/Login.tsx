import React from "react";
import LoginStyle from "./Login.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { setLoginValue, login } from "../../services/actions/user";
import { ILocation, useDispatch, useSelector } from "../../utils/types";



export default function Login() {
  const dispatch = useDispatch()
  const email = useSelector((store)=>store.auth.email)
  const pass = useSelector((store)=>store.auth.password)
  const err = useSelector((store)=>store.auth.error)
  const hasError = useSelector((store)=>store.auth.hasError)
  const isLogin = useSelector((store)=>store.auth.isLogin)
  const location = useLocation<ILocation>();

  function inputUser(evt:React.ChangeEvent<HTMLInputElement>) {
    dispatch(setLoginValue(evt.target.name, evt.target.value));
  }

  function submitForm(evt:React.FormEvent) {

    evt.preventDefault();
    dispatch(login( email, pass));
  }

  if(isLogin){
    return <Redirect to={location?.state?.from || '/'} />
  }

  return (
    <section className={LoginStyle.wrapper}>
      <form className={LoginStyle.form} onSubmit={submitForm}>
        <p className="text text_type_main-medium">Вход</p>
        <div className="mt-6">
          <EmailInput


          name="email"
          value={email}
          onChange={inputUser}/>
        </div>
        <div className="mt-6">
          <PasswordInput

            onChange={inputUser}
            value={pass}
            name={'password'}
            extraClass="mb-2"/>
        </div>

        <div className="mt-6">
          <Button htmlType="submit" type="primary" size="medium"  disabled={!email || !pass}>
            Войти
          </Button>
        </div>
        {hasError && <p>{`${err}`}</p>}
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
