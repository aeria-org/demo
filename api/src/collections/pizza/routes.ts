import { createRouter } from 'aeria'

export const pizzaRoutes = createRouter()

pizzaRoutes.GET('/topRatedPizzas', async (context) => {
  return context.collections.pizza.functions.getAll({
    limit: 5,
    sort: {
      rating: -1,
    },
  })
})

