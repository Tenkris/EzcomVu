import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('user-product', {
  state: () => ({
    list: [
      {
        name: 'mountain1',
        imageUrl: 'https://picsum.photos/id/235/200/300',
        quantity: 1,
        about: 'testt',
        status: 'open',
        price: 100
      },
      {
        name: 'mountain2',
        imageUrl: 'https://picsum.photos/seed/picsum/200/300',
        quantity: 1,
        about: 'testt',
        status: 'open',
        price: 200
      },
      {
        name: 'stupid dog',
        imageUrl: 'https://picsum.photos/id/237/200/300',
        quantity: 1,
        about: 'testt',
        status: 'open',
        price: 300
      },
      {
        name: 'house and mountain',
        imageUrl: 'https://picsum.photos/id/236/200/300',
        quantity: 1,
        about: 'testt',
        status: 'open',
        price: 400
      }
    ]
  }),
  getters: {
    // This is a getter that returns the number of products
    productCount(state) {
      return state.list.length
    }
  },
  actions: {
    // This is an action that adds a product to the list
    filterProduct(searchname) {
      return this.list.filter(product => product.name.includes(searchname))
    }
  }
})
