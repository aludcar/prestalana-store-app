import { AuthUser, AuthActions } from "../types/auth"
import { AUTH_USER, CLOSE_USER_SESSION } from "../actions/authActions";


const initialState: AuthUser = {
    username: "",
    token: "",
    isAuthenticated: false,
}
const authReducer = (state: AuthUser = initialState, action: AuthActions): AuthUser => {
    switch (action.type) {
        case AUTH_USER:
            return handleAuthUser(state, action.payload);
        case CLOSE_USER_SESSION:
            return handleCloseUserSession(state);
        default:
            return state;
    }
}

const handleAuthUser = (state: AuthUser, { username, token, isAuthenticated }: AuthUser): AuthUser => {
    return {
        ...state,
        username,
        token,
        isAuthenticated
    }
}

const handleCloseUserSession = (state: AuthUser): AuthUser => {
    return {
        ...state,
        isAuthenticated:false
    };
}

export default authReducer