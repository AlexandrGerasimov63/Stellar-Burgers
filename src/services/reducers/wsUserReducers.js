import { WS_USER_CONNECTION_SUCCESS, WS_USER_CONNECTION_CLOSED, WS_USER_CONNECTION_FAILED, WS_USER_GET_MESSAGE } from "../actions/wsActionUsers"

const initialState = {
    message: [],
    isConnect: false,
    isError: false
}


export function wsUserReducer(state = initialState, action) {
   switch (action.type) {
    case WS_USER_CONNECTION_SUCCESS: {
        return {
            ...state,
            isConnect: true
        }
    }
    case WS_USER_CONNECTION_CLOSED: {
        return {
            ...state,
            isConnect: false
        }
    }
    case WS_USER_CONNECTION_FAILED: {
        return {
            ...state,
            isConnect: false,
            isError: true
        }
    }
    case WS_USER_GET_MESSAGE: {
        return {
            ...state,
            message: action.payload.orders
        }
    }

    default:
    return state
   }
}
