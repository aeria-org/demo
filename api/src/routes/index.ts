import { createRouter, getDatabaseCollection } from 'aeria'
import { pizzaRoutes } from '../collections/pizza/routes.js'
import * as collections from '../collections'

export const router = createRouter()
router.group('/pizza', pizzaRoutes)

/**
 * Resets documents from the database each half an hour.
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
        $lte: new Date(Date.now() - 1800000)
      }
    })
  }

  return {
    success: true
  }
})

