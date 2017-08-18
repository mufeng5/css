<template>
  <div id="app">
/*    <h1>{{title}}</h1>
    <input type="text" v-model="title">
    <button @click="add">点击</button>
  </p>
    <lable>请输入:</lable><input type="text" v-model="shuru">
    <h3>{{shuru}}</h3>
    <button @click="fanzhuan">翻转字符</button>
  </p>
    首字母大写<br>
    <input type="text" v-model=" message">
    {{ message | capitalize }}

  <p>随机显示show或hide:
    <div v-if="Math.random() >0.5">show</div>
    <div v-else>hide</div>
    */
   <component-a></component-a>
  </div>


</template>

<script>
import ComponentA from  "E:\git\vue\project\src\components\compmentA.vue"
export default {
  name: '#app',
  /*data(){
    return{
      title:"hello this my first vue app",
      shuru:"",
      message: ""
    }
  },*/
  components: { ComponentA } ,
 /* methods:{
    add: function(){
      alert (this.title)
    },
    fanzhuan: function(){
      this.shuru = this.shuru.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }*/
}
</script>
