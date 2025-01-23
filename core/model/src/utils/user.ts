import type { User, UserByEmailQuery, UserErrorResult, UserResult } from '../types/user'
import { result } from './result'

export function userByEmailQuery(email: string): UserByEmailQuery {
  return {
    __type: 'UserByEmailQuery',
    email,
  }
}

export const response = {
  user: (user: User) =>
    result<User, UserResult>().withMeta.one().build({
      __type: 'UserResult',
      data: user,
    }),
  error: (message: string) =>
    result<UserErrorResult['data'], UserErrorResult>().withMeta.one().build({
      __type: 'UserErrorResult',
      data: { message },
    }),
}
