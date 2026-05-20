import type { UserProfileRO } from '@ourloop/product-core-api/talk-to-loop'
import type { MessageContract, QueryObject, ResultObject } from '@ourloop/product-core-types'

export interface User extends UserProfileRO {}

export interface UserErrorResult extends ResultObject<{ message: string }> {
  __type: 'UserErrorResult'
  data: { message: string }
}

export interface UserResult extends ResultObject<User> {
  __type: 'UserResult'
  data: User
}

export interface UserByEmailQuery extends QueryObject {
  __type: 'UserByEmailQuery'
  email: string
}

export type UserByEmailQueryContract = MessageContract<
  UserByEmailQuery,
  UserResult | UserErrorResult
>

export type UserQueryContract = UserByEmailQueryContract // extend using the union operator `... | ...`

export type UserCommandContract = never
