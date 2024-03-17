import { init } from 'aeria'
import { config } from './config.js'
import { router } from './routes/index.js'
import * as collections from './collections/index.js'

export {
  collections,
  router,
}

export default init({
  config,
  callback: (context) => {
    return router.install(context)
  },
})

