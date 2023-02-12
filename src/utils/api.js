const config = {
  url: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  },
  endPointAuth: "https://norma.nomoreparties.space/api/auth",
};


function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`${res.status}`));
}

export const getIngredientsData = async () => {
  const res = await fetch(`${config.url}/ingredients`);
  return checkResponse(res);
};

export const getOrderNumber = async (productsId) => {
  const res = await fetch(`${config.url}/orders`, {
    method: "POST",
    body: JSON.stringify({
      ingredients: productsId,
    }),
    headers: config.headers,
  });

  return checkResponse(res);
};

export const getLoginRecuest = async (email, password) => {
  const res = await fetch(`${config.endPointAuth}/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: config.headers,
  });
  return checkResponse(res);
};

export const getRegistrationRecuest = async (name, email, password) => {
  const res = await fetch(`${config.endPointAuth}/register`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
    headers: config.headers,
  });
  return checkResponse(res);
};

export const getResetPass = async (email) => {
  const res = await fetch(`${config.url}/password-reset`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
    headers: config.headers,
  });
  return checkResponse(res);
};

export const getRecoveryPass = async(pass, code) => {
  const res = await fetch(`${config.url}/password-reset/reset`, {
    method: "POST",
    body: JSON.stringify({
      password: pass,
      token:code,
    }),
    headers: config.headers,
  });
  return checkResponse(res);
}

export const getLogout = async () => {
  const token = localStorage.getItem("refreshToken");
  const res = await fetch(`${config.endPointAuth}/logout`,{
    method: "POST",
    body: JSON.stringify({
      token:token
    }),
    headers: config.headers,
  });
  return checkResponse(res);
}


export const updateUserInfo = async (name, email, pass, token) => {
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
  return checkResponse(res)
}

export const getUser = async (token) => {
  const res = await fetch(`${config.endPointAuth}/user`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  return checkResponse(res)
}

export const updateToken = async(token) => {
  const res = await fetch(`${config.endPointAuth}/token`,{
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      token:token
    }),
  });
  return checkResponse(res)
}
