<template>  
<<<<<<< HEAD
   <div>{{todayDate}}</div>
   <h2>{{ greet }}</h2>
   <div class=" flex flex-row justify-center">
   <div v-text="message">
   </div>
   <h1 class="  px-2">"{{$store.state.count}}"</h1></div>
   </template>
   <script>  
   import moment from 'moment'  
   export default {    
       name: 'myComponent', 
       data () {  
           return {        
               todayDate: moment().format('H:MM'),
               message: greet
   
           }
       }  
   }
   var myDate = new Date();
   var hrs = myDate.getHours();
   var greet;
   
   if (hrs < 12)
     greet = 'Good Morning';
   else if (hrs >= 12 && hrs <= 17)
     greet = 'Good Afternoon';
   else if (hrs >= 17 && hrs <= 24)
     greet = 'Good Evening';
   </script>
   <style>
   
   </style>
=======
<div>{{todayDate}}</div>
<h2>{{ samm }}</h2>
<h2>{{ greet }}</h2>
<SlidersTwoTone />
<div >{{message}}</div>
<h1>{{ $store.state.count }}</h1>
<app-input :msg="message" @messageChange="message = $event"></app-input>

<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader />
   </template>

   <template v-slot:caption>
      <flux-caption />
   </template>

   <template v-slot:controls>
      <flux-controls />
   </template>

   <template v-slot:pagination>
      <flux-pagination />
   </template>

   <template v-slot:index>
      <flux-index />
   </template>
</vue-flux>

<button @click="$refs.slider.show('next')">NEXT</button>

</template>
<script>  
import {
   VueFlux,
   FluxCaption,
   FluxControls,
   FluxIndex,
   FluxPagination,
   FluxPreloader
} from 'vue-flux';

import name from "../views/Profile.vue";
import moment from 'moment'  
export default {    
    name: 'myComponent',
    props: ['samm'],
    components: {
      'app-input': name,
    },
    data () {  
        return {        
            todayDate: moment().format('H:MM'),
            message: ''


        }
        
    },
    computed: {
    count () {
      return $store.state.count
    }
  }   
}
var myDate = new Date();
var hrs = myDate.getHours();
var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';
</script>
<style>


</style>
>>>>>>> a1ef2a5cf9d11325fa72dcfe9acc014254ccc4f5
