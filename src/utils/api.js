const config = {
  url: 'https://norma.nomoreparties.space/api/ingredients',
  headers: {
    "Content-Type": "application.json",
  },
}


function checkResponse (res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`${res.status}`));
};


function getData () {
 return fetch(`${config.url}`)
  .then(checkResponse)
}



export {getData}
