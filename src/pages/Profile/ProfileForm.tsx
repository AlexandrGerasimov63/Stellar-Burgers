import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  checkUser,

  resetProfileValue,
  setProfile,
  setProfileValue,
  toggleInputEmail,
  toggleInputName,
  toggleInputPass,
  updateUser,
} from "../../services/actions/user";
import profileStyles from "./Profile.module.css";
import { useDispatch, useSelector } from "../../utils/types";



export default function ProfileForm () {
  const dispatch = useDispatch();
  const inputNameRef = React.useRef<HTMLInputElement>(null);
  const inputEmailRef = React.useRef<HTMLInputElement>(null);
  const inputPasswordRef = React.useRef<HTMLInputElement>(null)
  const userName = useSelector((store) => store.auth.userName);
  const userEmail = useSelector((store) => store.auth.userEmail);
  const userPass = useSelector((store) => store.auth.userPassword);
  const name = useSelector((store) => store.auth.name);
  const email = useSelector((store) => store.auth.email);
  const pass = useSelector((store) => store.auth.password);

  const nameInput = useSelector((store)=>store.auth.nameInput);
  const emailInput = useSelector((store)=>store.auth.emailInput);
  const passInput = useSelector((store)=>store.auth.passInput);


  const onChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setProfileValue(evt.target.name, evt.target.value));
  };

  useEffect(() => {
    dispatch(checkUser());
    dispatch(setProfile());
  }, []);


  function onClickReset(evt:React.FormEvent) {
    evt.preventDefault();
    dispatch(resetProfileValue());
  }

  function onSubmitUser(evt:React.FormEvent) {
    evt.preventDefault();
    dispatch(updateUser(name, email, pass));
  }

  function toggleName () {
    dispatch(toggleInputName());
    setTimeout(() => inputNameRef.current?.focus(), 0)
  }
  function toggleEmail () {
    dispatch(toggleInputEmail());
    setTimeout(() => inputEmailRef.current?.focus(), 0)
  }
  function togglePass () {
    dispatch(toggleInputPass());
    setTimeout(() => inputPasswordRef.current?.focus(), 0)
  }

  return(
    <form
    className={`${profileStyles.inputs_wrapper} ml-15`}
    onSubmit={onSubmitUser}
  >
    <div className={profileStyles.input}>
      <Input
        size="default"
        placeholder="Имя"
        icon={"EditIcon"}
        value={name || "Имя"}
        disabled={nameInput}
        onIconClick={toggleName}
        name="name"
        type="text"
        onChange={onChange}
        ref={inputNameRef}
      />
    </div>
    <div className="mt-6">
      <Input
        placeholder="Логин"
        icon={"EditIcon"}
        value={email || "Адрес электронной почты"}
        disabled={emailInput}
        onIconClick={toggleEmail}
        name="email"
        type="email"
        onChange={onChange}
        ref={inputEmailRef}
      />
    </div>
    <div className="mt-6">
      <Input
        placeholder="Пароль"
        icon={"EditIcon"}
        value={pass || "password"}
        disabled={passInput}
        onIconClick={togglePass}
        name="password"
        type="password"
        onChange={onChange}
        ref={inputPasswordRef}
      />
    </div>
    <div className={`${profileStyles.buttons_wrapper} mt-6`}>
      <Button
        htmlType="reset"
        disabled={
          name === userName && email === userEmail && pass === userPass
        }
        onClick={onClickReset}
      >
        Отмена
      </Button>
      <Button
        htmlType="submit"
        disabled={
          name === userName && email === userEmail && pass === userPass
        }
      >
        Сохранить
      </Button>
    </div>
  </form>
  )
}
