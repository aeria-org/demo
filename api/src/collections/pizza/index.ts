import { defineCollection, get, getAll, insert, remove, count } from 'aeria'

export const pizza = defineCollection({
  description: {
    $id: 'pizza',
    icon: 'pizza',
    properties: {
      name: {
        type: 'string',
      },
      price: {
        type: 'number',
      },
      rating: {
        type: 'integer',
        minimum: 1,
        maximum: 5,
        hint: 'Insert a number from 1 to 5',
      },
    },
    presets: ['crud'],
  },
  functions: {
    get,
    getAll,
    insert,
    remove,
    count,
  },
})

