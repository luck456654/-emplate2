<template>
  <div>
    <div>
      <button @click="increment()">increment</button>
      <button @click="loaddata()">loadata</button>
      <button @click="reset()">reset</button>
    </div>
    <div>count: {{ counterStore.count }}</div>
    <div>double: {{ counterStore.double }}</div>
    <div>data: {{ counterStore.data }}</div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import axios from 'axios'


const counterStore = useCounterStore()


function increment() {
  counterStore.increment()
}
function loaddata() {
    axios.get('https://catfact.ninja/fact')
        .then(response => {
          counterStore.loaddata(response.data);
          })
}

function reset() {
  counterStore.$reset()
}
</script>