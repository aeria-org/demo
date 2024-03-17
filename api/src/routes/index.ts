import { createRouter, getDatabaseCollection } from 'aeria'
import { pizzaRoutes } from '../collections/pizza/routes.js'
import * as collections from '../collections'

export const router = createRouter()
router.group('/pizza', pizzaRoutes)

/**
 * Resets documents from the database each half an hour.
 * Log collection is reseted every 10 days.
 */
router.GET('/reset', (context) => {
  if( context.request.headers['x-api-secret'] !== process.env.RESET_SECRET ) {
    return {
      success: false
    }
  }

  for( const collection in collections ) {
    const dbCollection = getDatabaseCollection(collection)
    dbCollection.deleteMany({
      created_at: {
        $lte: collection === 'log'
          ? new Date(Date.now() - 3600000 * 24 * 10)
          : new Date(Date.now() - 1800000)
      }
    })
  }

  return {
    success: true
  }
})

