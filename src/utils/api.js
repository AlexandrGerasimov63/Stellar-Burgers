

const config = {
  url: 'https://norma.nomoreparties.space/api',
  headers: {
    "Content-Type": "application/json",
  },
  endPointAuth: 'https://norma.nomoreparties.space/api/auth'
}
// const endPoint = {
//
//
//   logout : 'https://norma.nomoreparties.space/api/auth/logout',
//   refreshToken : 'https://norma.nomoreparties.space/api/auth/token'
// }

function checkResponse (res) {

  if (res.ok) {

    return res.json();
  }
  // if(!res.ok){
  //   return res.json();
  // }
  return Promise.reject(new Error(`${res.status}`));
};


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
  const res = await fetch (`${config.endPointAuth}/login`,{
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: config.headers,
  });
  return checkResponse(res);
}

export const getRegistrationRecuest =async (name, email,password) => {
  const res = await fetch(`${config.endPointAuth}/register`,{
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
    headers: config.headers,
  });
    return checkResponse(res);

}
