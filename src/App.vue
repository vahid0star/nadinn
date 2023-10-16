<template>
  <nav class=" bg-opacity-50 bg-slate-400 mb-3">
   <p>app bar</p> 
   <div class="visible sm:invisible">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/todo">todo</router-link> |
      <router-link to="/Weather">weather</router-link> |
      <router-link to="/Profile">Profile</router-link> |
   </div>
   </nav>
  <router-view/>
  <!-- <profile @fat="lift" class="" style="visibility: hidden;"></profile>
  <dashboard header=item ></dashboard> -->
  <SlidersTwoTone />
  
<aside class="opacity-70 fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0">
   <div class="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <router-link to="/">
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="ml-3">Dashboard</span>
            </a>
        </router-link>
        <router-link to="/Todo">            
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="ml-3">Todos</span>
            </a>
        </router-link>
        <router-link to="/Weather">
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="ml-3">Weather</span>
            </a>
        </router-link>
        <router-link to="/Profile">
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="ml-3">Profile</span>
            </a>
        </router-link>
      </ul>
      
    </div>
    <app-input :msg="message" @messageChange="message = $event"></app-input>
</aside>
</template>

<script>
  import dashboard from '../src/views/Dashboard.vue'
<<<<<<< HEAD
  import name from "../src/views/Profile.vue";
  export default{
    name: 'myComponent',
    props: ['samm'],
    components: {dashboard,'app-input': name,
},
data () {  
        return {        
            message: ''
        } 
    },
=======
  import profile from '../src/views/Profile.vue'

  export default{
    components: {dashboard,profile},
>>>>>>> a1ef2a5cf9d11325fa72dcfe9acc014254ccc4f5
    methods:{
      lift(){
        items[items.length-1]
      }
    } 
  }


</script>


<style>
a{
   font-family: "Serif";
  text-align: center;
  color: #000000;
  font-size: medium;
  font-weight: bolder;
}
#app {
  font-family: "Serif";
  text-align: center;
  color: #000000;
  font-size: medium;
  font-weight: bolder;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
