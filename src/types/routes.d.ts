import { ReactNode } from 'react'

export type ProtectedRouteProps = {
    children: ReactNode;
}

export type RouterError = {
    status?: number;
    message: string
  }
  