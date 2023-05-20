export const { PORT, JWT_SECRET, MONGO_URI } = process.env
if (!PORT) console.error('Error: PORT not set in .env')

export const amz = {
  type: '',
  SELLER_API_REGION: '',
  CLIENT_ID: '',
  CLIENT_SECRET: '',
  ACCESS_TOKEN: '',
  REFRESH_TOKEN: '',
  PROFILE_ID: '',
  PERMISSION_SCOPE: '',
  REDIRECT_URL: '',
  AUTH_GRANT_URL: '',
  SCOPE: '',
  TOKEN_URL: ''
}

// const updateKeys = async () => {
//   const client = new MongoClient(MONGO_URI)
//   const mongoRes = await client.connect()
//   console.log('mongoRes', mongoRes)

//   const res = await client
//     .db('conkero')
//     .collection('keys')
//     .findOne({ type: 'amazon' })
//   console.log('res', res)
//   for (const key in amz) {
//     amz[key] = res[key]
//   }
//   await client.close()
// }

// updateKeys()
