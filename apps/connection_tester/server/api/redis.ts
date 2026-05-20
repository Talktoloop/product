import { createClient } from 'redis'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const redis = createClient({ url: config.public.REDIS_URL as string })

  console.log(config.REDIS_URL, config)
  
  redis.on('error', (err) => console.error('Redis Client Error', err))
  await redis.connect()

  try {
    const method = event.req.method

    if (method === 'POST') {
      const body = await readBody(event)
      const { key, value } = body
      await redis.set(key, value)
      return { message: 'Key set successfully' }
    }
    
    if (method === 'GET') {
      const { key } = getQuery(event)
      const value = await redis.get(key as string)
      return { value }
    }
    
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  } finally {
    await redis.quit()
  }
})