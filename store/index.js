import Vuex from 'vuex'

import mutations from './mutations'

export default () => {
  return new Vuex.Store({
    state: {
      about_me: "",
      skills: {},
      experiences: []
    },
    mutations
  })
}