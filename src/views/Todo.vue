<template>
  <!-- <div class="container flex-col items-center text-center justify-center   " style="max-width: 600px;">
    <h2 class="text-center mt-5">to do app</h2>
    <div class=" flex flex-row justify-content-center mt-5">
      <input type="text" v-model="task" placeholder="Enter task" 
      class=" w-100 form-control">
      <a-button class=" bg-slate-700" type="primary" style="background-color: rgb(21, 155, 250);" @click="submitTask">Submit</a-button>
    </div>
  </div> -->

  <Todo :Task="Task" :Status= "Status" :Edit="Edit" :Delete= "Delete" />

  </template>
  
  <script>
  import Todo from "../components/Todo2.vue";
  import { Button } from 'ant-design-vue';
      const ButtonGroup = Button.Group;
    
      export default {
        components: {
          Todo,
          AButton: Button,
          AButtonGroup: ButtonGroup,
        },
        
        data() {
          return{
            Task: 'Task',  
            Status: 'Status', 
            Edit: 'Edit',  
            Delete: 'Delete'
              
        
                      
      }
      
    }
  } 

  </script>
  


<!-- <template>

  <div class="container flex-col items-center text-center justify-center   " style="max-width: 600px;">
  <h2 class="text-center mt-5">to do app</h2>
  <div class=" flex flex-row justify-content-center mt-5">
      <input type="text" v-model="task" placeholder="Enter task" 
      class=" w-100 form-control">
      <a-button class=" bg-slate-700" type="primary" style="background-color: rgb(21, 155, 250);" @click="submitTask">Submit</a-button>
    </div>
  </div>
<<<<<<< HEAD
=======
  <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col" class=" text-center" v-for="x in items" :key="x.text">{{ x.text }}</th>
    </tr>
  </thead>
  <tbody>
>>>>>>> a1ef2a5cf9d11325fa72dcfe9acc014254ccc4f5


  <Todo :Task="Task" :Status= "Status" :Edit="Edit" :Delete= "Delete" />
</template>
<script>
import Todo from "../components/Todo2.vue";
import { Button } from 'ant-design-vue';
    const ButtonGroup = Button.Group;
  
    export default {
      components: {
        Todo,
        AButton: Button,
        AButtonGroup: ButtonGroup,
      },
<<<<<<< HEAD
=======
      props: ['Task'],
      name: "Todo",
>>>>>>> a1ef2a5cf9d11325fa72dcfe9acc014254ccc4f5
      
      data() {
        return{
          items: [
              { text: 'Task',  },
              { text: 'Status', },
              { text: 'Edit',  },
              { text: 'Delete', },
              
        
            ],
          task: "",
          editedTask: null,
          statuses: ["to-do", "in-progress", "finished"],
          
          tasks: [
            {
              name: "task one",
              status: "to-do",
            },
            {
              name: "task two",
            status: "in-progress",
          },
          {
            name: "task three",
            status: "finished",
          },
        ],
    };
    
  },
  computed() {
            

        },
  
  methods: {
    capitalizeFirstChar(str){
      return str.charAt(0).toUpperCase() +str.slice(1);
    },
    
    
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if(++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },
    
    //delete task
    deleteTask(index){
      this.tasks.splice(index, 1);
    },

    //edit task
    editTask(index){
      this.task=this.tasks[index].name;
      this.editedTask=index;
    },
    
    submitTask(){
      if(this.task.length === 0)return;
      
      if(this.editedTask != null){
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }else{
        this.tasks.push({
          name: this.task,
          status: "todo",
        });
      }

      this.task = "";
      
    },
  }, 
};
</script> -->

<style >


</style> 