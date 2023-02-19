import { getCookie } from "../../utils/cookie";
const token = getCookie("accessToken");

export function socketMiddleware(url, actions, isLogin = false) {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
      actions;

      const token = getCookie("accessToken");
      if (type === wsInit) {
        socket = !isLogin
          ? new WebSocket(url)
          : new WebSocket(`${url}?token=${token}`);
      } else if (type === onClose && socket) {
        socket.close();
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };
        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };
        // функция, которая вызывается при получении события от сервера
        socket.onmessage = (event) => {
          let { data } = event;
          data = JSON.parse(data);
          dispatch({ type: onMessage, payload: data });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
  };
}
