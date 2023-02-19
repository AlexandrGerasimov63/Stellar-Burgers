export const WS_USER_CONNECTION_START = 'WS_USER_CONNECTION_START'
export const WS_USER_CONNECTION_SUCCESS = 'WS_USER_CONNECTION_SUCCESS'
export const WS_USER_CONNECTION_CLOSED = 'WS_USER_CONNECTION_CLOSED'
export const WS_USER_CONNECTION_FAILED = 'WS_USER_CONNECTION_FAILED'
export const WS_USER_GET_MESSAGE = 'WS_USER_GET_MESSAGE'
export const WS_USER_SEND_MESSAGE = 'WS_USER_SEND_MESSAGE'

export function wsUserConnectedStart() {
	return {
		type: WS_USER_CONNECTION_START
	};
};

export function wsUserConnectedSuccess() {
	return {
		type: WS_USER_CONNECTION_SUCCESS
	};
};

export function wsUserConnectedClosed() {
	return {
		type: WS_USER_CONNECTION_CLOSED
	};
};

export function wsUserConnectedFailed() {
	return {
		type: WS_USER_CONNECTION_FAILED
	};
};

export function wsUserGetMessage(message) {
	return {
		type: WS_USER_GET_MESSAGE,
		payload: message
	};
};

export function wsUserSendMessage(message) {
	return {
		type: WS_USER_SEND_MESSAGE,
		payload: message
	};
};
