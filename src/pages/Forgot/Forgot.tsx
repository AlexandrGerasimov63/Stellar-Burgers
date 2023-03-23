import React from "react";
import ForgotStyle from "./Forgot.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { setResetValue, resetPass } from "../../services/actions/user";
import { useDispatch, useSelector } from "../../utils/types";
import { ReactEventHandler } from "react";
// import { useDispatch, useSelector } from "react-redux";






export default function Forgot() {
  const dispatch = useDispatch();
  const email = useSelector((store)=>store.auth.email)
  const isLogin = useSelector((store)=>store.auth.isLogin)
  const resetPassComplit = useSelector((store)=>store.auth.resetPass)
  const err = useSelector((store)=>store.auth.error)
  const hasError = useSelector((store)=>store.auth.hasError)

  function inputEmailReset (evt:React.ChangeEvent<HTMLInputElement>){
    dispatch(setResetValue(evt.target.name, evt.target.value));
  }

  function submitResetForm(evt:React.FormEvent) {
    evt.preventDefault();
    dispatch(resetPass(email))
  }

  if(isLogin){
    return <Redirect to='/' />
  }

  if(resetPassComplit){
   return <Redirect to='/reset' />
  }


  return (
    <section className={ForgotStyle.wrapper}>
      <form className={ForgotStyle.form} onSubmit={submitResetForm}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className="mt-6">
          <EmailInput
          name="email"
          value={email}
          placeholder="E-mail"
          size={"default"}
          onChange={inputEmailReset}/>
        </div>
        <div className="mt-6">
          <Button htmlType="submit" type="primary" size="medium" disabled={!email} >
            Восстановить
          </Button>
        </div>
        {hasError && <p>{`${err}`}</p>}
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
