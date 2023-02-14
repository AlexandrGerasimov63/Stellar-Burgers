import React from "react";
import RegistrationStyle from "./Register.module.css";
import {
  Input,
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormValue, registration } from "../../services/actions/user";

export default function Registration() {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.auth.name);
  const email = useSelector((store) => store.auth.email);
  const pass = useSelector((store) => store.auth.password);
  const err = useSelector((store)=>store.auth.error);
  const hasError = useSelector((store)=>store.auth.hasError);
  const isLogin = useSelector((store)=>store.auth.isLogin)

  function inputUser(evt) {
    dispatch(setFormValue(evt.target.name, evt.target.value));
  }


  function submitForm(evt) {
    evt.preventDefault();
    dispatch(registration(name, email, pass));
  }

  if(isLogin){
    return <Redirect to='/' />
  }

  return (
    <section className={RegistrationStyle.wrapper}>
      <form className={RegistrationStyle.form} onSubmit={submitForm}>
        <p className="text text_type_main-medium">Регистрация</p>
        <div className="mt-6">
          <Input
          type="text"
          placeholder="Имя"
          name={"name"}
          value={name}
          onChange={inputUser}
          size={"default"} />
        </div>
        <div className="mt-6">
          <EmailInput
          name={"email"}
          value={email}
          onChange={inputUser}
             />
        </div>
        <div className="mt-6">
          <PasswordInput
          name={'password'}
          value={pass}
          onChange={inputUser}
           />
        </div>
        <div className="mt-6">
          <Button htmlType="submit" type="primary" size="medium"  disabled={!name || !email || !pass}>
            Зарегистрироваться
          </Button>
        </div>
        <p>{hasError && `${err}`}</p>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Уже зарегистрированы?
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
