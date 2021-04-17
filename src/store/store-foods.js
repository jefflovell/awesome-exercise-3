import Vue from 'vue'
import { uid } from 'quasar'


const state = {
    foods: {
        'ID1': {
          name: 'Burger',
          rating: 4,
          imageUrl: 'https://i.imgur.com/0umadnY.jpg',
          description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.'
        },
        'ID2': {
          name: 'Pizza',
          rating: 5,
          imageUrl: 'https://i.imgur.com/b9zDbyb.jpg',
          description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.'
        },
        'ID3': {
          name: 'Sprouts',
          rating: 1,
          imageUrl: 'https://i.imgur.com/RbKjUjB.jpg',
          description: 'The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.'
        }
    }
}

const mutations = {
//syncronous methods
    // updateFood( state, payload ){
    //     Object.assign(state.foods[payload.id], payload.updates)
    // },
    // deleteFood( state, id ){
    //     Vue.delete( state.foods, id )
    // },
    // addFood( state, payload ) {
    //   Vue.set(state.foods, payload.id, payload.food)
    // }
}

const actions = {
//asynchronous methods
    // updateFood({ commit }, payload ) {
    //     commit( 'updateFood', payload)
    // },
    // deleteFood({ commit }, id ) {
    //     commit( 'deleteFood', id )
    // },
    // addTask({ commit }, task) {
    //   let foodId = uid()
    //   let payload = {
    //     id: foodId,
    //     food: food
    //   }
    //   commit('addFood', payload)
    // }
}

const getters = {
    foods: (state) => {
        return state.foods
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}