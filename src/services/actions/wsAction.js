export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_FAILED = 'WS_CONNECTION_FAILED';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';

export function wsConnectedStart() {
	return {
		type: WS_CONNECTION_START
	};
};

export function wsConnectedSuccess() {
	return {
		type: WS_CONNECTION_SUCCESS
	};
};

export function wsConnectedClosed() {
	return {
		type: WS_CONNECTION_CLOSED
	};
};

export function wsConnectedFailed() {
	return {
		type: WS_CONNECTION_FAILED
	};
};

export function wsGetMessage(message) {
	return {
		type: WS_GET_MESSAGE,
		payload: message
	};
};

export function wsSendMessage(message) {
	return {
		type: WS_SEND_MESSAGE,
		payload: message
	};
};
