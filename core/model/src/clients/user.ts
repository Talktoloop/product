import { ModelClient } from '../ModelClient'
import type { UserQueryContract, UserCommandContract } from '../types/user'
import type { QueryDispatcher, CommandDispatcher } from '../types/client'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import { response } from '../utils/user'

const userQueryDispatcher: QueryDispatcher<UserQueryContract> = {
  UserByEmailQuery: async (client, query) => {
    const { email } = query
    const apiResponse = await client.user.userControllerProfile()
    if (apiResponse.email !== email) {
      return response.error('User not found')
    }
    return response.user(apiResponse)
  },
}

const userCommandDispatcher: CommandDispatcher<UserCommandContract> = {}

export class UserClient extends ModelClient<UserQueryContract, UserCommandContract> {
  constructor(config: Partial<OpenAPIConfig>) {
    super(config, userQueryDispatcher, userCommandDispatcher)
  }
}
