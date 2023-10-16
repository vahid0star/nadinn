<template>

<div class="container flex-col items-center text-center justify-center" style="max-width: 600px;">
  <form @submit.prevent="addItem" class=" flex flex-row justify-content-center mt-5">
    <input v-model="$store.state.count" type="text" placeholder="name" 
    class="w-100 form-control">
    <button @click="select" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SAVE</button>
    
  </form>
<<<<<<< HEAD
  <h1>{{ $store.state.count }}</h1>
  
=======
  <input type="text" :value="msg" @input="changeMessage">
  <!-- <ul>
          <li class="px-5" v-for="(item, index) in items" 
              :key="index">
              {{ item }}
              <button @click="removeItem(index)" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800">
                    Remove
                </button>
          </li>
      </ul> -->
      <div id="name" >Hi {{ items[items.length-1] }}</div>
>>>>>>> a1ef2a5cf9d11325fa72dcfe9acc014254ccc4f5
  <select class=" my-10 text-4lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
  <option  @click="updateCount">them</option>
  <option id="opt1">Daily</option>
  <option id="opt2">Weekly</option>
  <option id="opt3">Monthly</option>
  <option id="opt4">Annually</option>
</select>
<select class=" my-10 text-4lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
  <option selected  @click="updateCount">local</option>
  <option id="opt1">tehran</option>
  <option id="opt2">mashhad</option>
  <option id="opt3">shiraz</option>
  <option id="opt4">yazd</option>
</select>
</div>
<dashboard header="Sign a for a give"/>
</template>
<script>
  import dashboard from '../views/Dashboard.vue'
  import { defineComponent } from 'vue';
  import {ref} from 'vue'
  import { App, Button, message } from 'ant-design-vue';
    const ButtonGroup = Button.Group;
    const pervCount = JSON.parse(localStorage.count || 0)
    const count = ref(pervCount)

    function updateCount(amount) {
      count.value = count.value + amount
      localStorage.setItem('count'.count.value)
    }

export default defineComponent({
  
  props: {username:String,},
  
    components: {
      name:'App',
      dashboard,
    AButton: Button,
    AButtonGroup: ButtonGroup,
    
  },
  data() {

            return {
                newItem: '',
                items: [],
                username : 'fhtfhtfhfthtfh'
            };
        },
        computed: {
            totalItems() {
                return this.items.length;
            },
        },
        mounted() {
            
            // Load items from localStorage on component mount
            this.items = JSON.parse(localStorage.getItem('items')) || [];
        },
        
        methods: {
<<<<<<< HEAD
=======
          changeMessage(event){
            this.message = event.target.value;
            this.$emit('messageChanged', this.message);
          },
>>>>>>> a1ef2a5cf9d11325fa72dcfe9acc014254ccc4f5
            select(){
              this.$emit('fat')
            },
            addItem() {
                this.items.push(this.newItem);
                this.newItem = '';
                localStorage.setItem('items', JSON.stringify(this.items));
            },
            removeItem(index) {
                this.items.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(this.items));
            },
        },
});

  
</script>    
<style>

</style>