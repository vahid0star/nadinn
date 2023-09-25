<template>

<div class="container flex-col items-center text-center justify-center" style="max-width: 600px;">
  <form @submit.prevent="addItem" class=" flex flex-row justify-content-center mt-5">
    <input v-model="newItem" type="text" placeholder="name" 
    class="w-100 form-control">
    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SAVE</button>
    
  </form>
  <!-- <ul>
          <li class="px-5" v-for="(item, index) in items" 
              :key="index">
              {{ item }}
              <button @click="removeItem(index)" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800">
                    Remove
                </button>
          </li>
      </ul> -->
      <div >Hi {{ items[items.length-1] }}</div>
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
</template>
<script>
  import { defineComponent } from 'vue';
  import {ref} from 'vue'
  import { Button, message } from 'ant-design-vue';
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