<template>
  <div>
    <h1>HOLA SOY H1</h1>
     <h1>{{$count}}</h1> 
     <button @click="increment">Incrementar</button>
 
   
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { example } from '@/store'
export default Vue.extend({

  computed: {
    $count() {
      return example.$count
    }
  },

  methods: {
    increment() {
      example.increment(1)
    }
  }

})
</script>
