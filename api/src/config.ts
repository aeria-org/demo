import type { ApiConfig } from 'aeria'

export const config: ApiConfig = {
  apiUrl: process.env.API_URL,
  secret: process.env.APPLICATION_SECRET,
  logSuccessfulAuthentications: true,
  database: {
    mongodbUrl: process.env.MONGODB_URL,
  },
  defaultUser: {
    username: process.env.GODMODE_USERNAME,
    password: process.env.GODMODE_PASSWORD,
  },
  storage: {
    fs: process.env.STORAGE_PATH,
    tempFs: process.env.STORAGE_TEMP_PATH,
  },
}

