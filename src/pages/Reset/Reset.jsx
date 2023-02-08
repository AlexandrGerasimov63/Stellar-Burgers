import React from "react";
import ResetStyle from './Reset.module.css'
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { recoveryPass, setRecoveryValue } from "../../services/actions/user";




export default function Reset () {
  const dispatch = useDispatch();
  const pass = useSelector((store)=>store.auth.password);
  const code = useSelector((store)=>store.auth.code);
  const resetPassComplit = useSelector((store)=>store.auth.resetPass)
  const err = useSelector((store)=>store.auth.error)
  const hasError = useSelector((store)=>store.auth.hasError)
  const recoveryPassComplited = useSelector((store)=>store.auth.recoveryPass)

  console.log(recoveryPassComplited);


  function inputRecovery (evt){
    dispatch(setRecoveryValue(evt.target.name, evt.target.value));
  }

  function submitRecovery (evt) {
    evt.preventDefault();
    dispatch(recoveryPass(pass, code))
  }

  if(!resetPassComplit){
    return <Redirect to='/forgot' />
  }

  if(recoveryPassComplited) {
    return <Redirect to='/' />
  }

  return (
    <section className={ResetStyle.wrapper}>
      <form className={ResetStyle.form} onSubmit={submitRecovery}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <div className="mt-6">
          <PasswordInput
          placeholder="Введите новый пароль"
          size={"default"}
          name="password"
          value={pass}
          onChange={inputRecovery}
          />
        </div>
        <div className="mt-6">
          <Input
          type="text"
          placeholder="Введите код из письма"
          name="code"
          value={code}
          onChange={inputRecovery}
          />
        </div>

        <div className="mt-6">
          <Button htmlType="button" type="primary" size="medium" onClick={submitRecovery}>
            Сохранить
          </Button>
        </div>
        {hasError && <p>{`${err}`}</p>}
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
