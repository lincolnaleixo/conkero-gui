import { MongoClient } from 'mongodb'

export const { PORT, JWT_SECRET, MONGO_URI, GMAIL_USERNAME, GMAIL_PASS } = process.env
if (!PORT) console.error('Error: PORT not set in .env')

export const adsConfig = {
  CLIENT_ID: '',
  CLIENT_SECRET: '',
  ACCESS_TOKEN: '',
  REFRESH_TOKEN: '',
  PROFILEID: '',
  ADID: '',
  TARGETID: '',
  REPORTID: '',
  CAMPAIGNID: '',
  ADGROUPID: '',
  KEYWORDID: '',
  PERMISSION_SCOPE: '',
  REDIRECT_URI: '',
  TOKEN_EXPIRES_AT: '',
  AUTH_GRANT_URL: '',
  TOKEN_URL: '',
  API_URL: ''
}

export const RESET_WEBSITE_URL = 'http://localhost:3000/auth/reset'

const updateKeys = async () => {
  const client = new MongoClient(MONGO_URI)
  await client.connect()

  const res = await client
    .db('admin')
    .collection('config')
    .findOne({ _id: 'ads' })
  for (const key in adsConfig) {
    adsConfig[key] = res[key]
  }
  await client.close()
}

updateKeys()
