import { AuthActions, AuthUser } from "../types/auth";

export const AUTH_USER = "AUTH_USER";
export const CLOSE_USER_SESSION = "CLOSE_USER_SESSION";

export const authUser = ({ username, token, isAuthenticated }: AuthUser): AuthActions => ({
    type: AUTH_USER,
    payload: { username, token, isAuthenticated }
})

export const closeUserSession = () => ({ type: CLOSE_USER_SESSION})