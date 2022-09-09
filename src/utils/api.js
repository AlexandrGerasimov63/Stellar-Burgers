const config = {
  url: 'https://norma.nomoreparties.space/api',
  headers: {
    "Content-Type": "application/json",
  },
}


function checkResponse (res) {
  if (res.ok) {
    return res.json();
  }
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


