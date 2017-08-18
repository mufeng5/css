<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="onClick">Click</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  onClick:function () {
  
  }
  }
}
</script>
