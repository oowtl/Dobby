import { createStore } from 'vuex'
import axios from 'axios'

const BASE_URL = 'http://k5d105.p.ssafy.io:3000';

export default createStore({
  state: {
    calendarData :[],
  },
  mutations: {
    setCalendarData( state, payload ) {
      state.calendarData = payload
    }
  },
  actions: {
    getCalendarData( {commit} ) {
      console.log('store axios')
      axios.
        get(`${BASE_URL}+/calendar/personal`)
        .then( response => {
          commit('setCalendarData', response)
        }
        )
        .catch( error => {
          console.log(error)
        })
    }
  },
  modules: {}
})
