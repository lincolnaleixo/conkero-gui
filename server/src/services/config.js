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

export const spConfig = {
  "CLIENT_ID": "",
  "CLIENT_SECRET": "",
  "REFRESH_TOKEN": "",
  "AWS_ACCESS_KEY_ID": "",
  "AWS_SECRET_ACCESS_KEY": "",
  "ACCESS_TOKEN": "",
  "SELLER_ID": "",
  "LWA_TOKEN_EXPIRES_AT": "",
  "MARKETPLACE_ID": "",
  "STS_ACCESS_KEY": "",
  "STS_SECRET_KEY": "",
  "STS_SESSION_TOKEN": "",
  "ORDER_ID_MULTIPLE_ITEMS": "",
  "ORDER_ORDERID": "",
  "STS_ACCESS_TOKEN_REQUEST": "",
  "AWS_REGION": "",
  "STS_TOKEN_EXPIRES_AT": "",
  "LWA_TOKEN_URL": "",
  "STS_TOKEN_URL": "",
  "BASEURL": ""
}

export const RESET_WEBSITE_URL = 'http://localhost:3000/auth/reset'

const updateKeys = async () => {
  const client = new MongoClient(MONGO_URI)
  await client.connect()

  const adsRes = await client
    .db('admin')
    .collection('config')
    .findOne({ _id: 'ads' })
  for (const key in adsConfig) {
    adsConfig[key] = adsRes[key]
  }
  const spRes = await client
    .db('admin')
    .collection('config')
    .findOne({ _id: 'sp' })
  for (const key in spConfig) {
    spConfig[key] = spRes[key]
  }
  await client.close()
}

updateKeys()
