import { BaseType } from "../types/base";

export type AuthUser = {
    username: string;
    token: string;
    isAuthenticated?:boolean;
}

export type AuthActions = BaseType & {
    payload: AuthUser;
}