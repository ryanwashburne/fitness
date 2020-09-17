import { getValues } from './data/google'

export const handler = async (event, context) => {
  const payload = await getValues()
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'ok',
      payload,
    }),
  }
}
