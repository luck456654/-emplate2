import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {
  state: () => ({
   
    count: 0,
    data:[],
  }),
  getters: {
    
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    loaddata(data) {
      this.data=data
    },
  },
})