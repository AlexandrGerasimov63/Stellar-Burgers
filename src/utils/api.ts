import { getCookie } from "./cookie";
import { IIngredientType, IWsOrder } from "./types";

const config = {
  url: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  },
  endPointAuth: "https://norma.nomoreparties.space/api/auth",
};


const checkResponse = <I>(res:Response):Promise<I> =>{
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`${res.status}`));
}

interface IGetDataIngredients {
  data: IIngredientType[],
  success: boolean
}

export const getIngredientsData = async () => {
  const res = await fetch(`${config.url}/ingredients`);
  return checkResponse<IGetDataIngredients>(res);
};

interface IGetOrderNumber {
  name:string,
  order: IWsOrder,
  success: boolean
}
export const getOrderNumber = async (productsId:number) => {
  const token = getCookie("accessToken")
  const res = await fetch(`${config.url}/orders`, {
    method: "POST",
    body: JSON.stringify({
      ingredients: productsId,

    }),
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });

  return checkResponse<IGetOrderNumber>(res);
};

interface IGetUserRequest {
  success: boolean,
  user: {
    email: string,
    name: string
  }
  accessToken: string;
  refreshToken: string;
}

export const getLoginRecuest = async (email:string, password:string | number) => {
  const res = await fetch(`${config.endPointAuth}/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: config.headers,
  });
  return checkResponse<IGetUserRequest>(res);
};

export const getRegistrationRecuest = async (name:string, email:string, password:string) => {
  const res = await fetch(`${config.endPointAuth}/register`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
    headers: config.headers,
  });
  return checkResponse<IGetUserRequest>(res);
};

export const getResetPass = async (email:string) => {
  const res = await fetch(`${config.url}/password-reset`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
    headers: config.headers,
  });
  return checkResponse<IGetUserRequest>(res);
};

export const getRecoveryPass = async(pass:string, code:string) => {
  const res = await fetch(`${config.url}/password-reset/reset`, {
    method: "POST",
    body: JSON.stringify({
      password: pass,
      token:code,
    }),
    headers: config.headers,
  });
  return checkResponse<IGetUserRequest>(res);
}
interface IGetLogout {
  message: string;
  success: boolean;
  refreshToken: string;
};
export const getLogout = async () => {
  const token = localStorage.getItem("refreshToken");
  const res = await fetch(`${config.endPointAuth}/logout`,{
    method: "POST",
    body: JSON.stringify({
      token:token
    }),
    headers: config.headers,
  });
  return checkResponse<IGetLogout>(res);
}


export const updateUserInfo = async (name:string, email:string, pass:string, token:string) => {
  const res = await fetch (`${config.endPointAuth}/user`,{
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      email: email,
      password: pass,
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  return checkResponse<IGetUserRequest>(res)
}

export const getUser = async (token:string) => {
  const res = await fetch(`${config.endPointAuth}/user`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  return checkResponse<IGetUserRequest>(res)
}

export const updateToken = async(token:string) => {
  const res = await fetch(`${config.endPointAuth}/token`,{
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      token:token
    }),
  });
  return checkResponse<IGetUserRequest>(res)
}
