<template>

<div class="container flex-col items-center text-center justify-center   " style="max-width: 600px;">
  <h2 class="text-center mt-5">to do app</h2>
  <div class=" flex flex-row justify-content-center mt-5">
    <input type="text" v-model="task" placeholder="Enter task" 
    class=" w-100 form-control">
    <a-button class=" bg-slate-700" type="primary" style="background-color: rgb(21, 155, 250);" @click="submitTask">Submit</a-button>
  </div>
  <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col" class=" text-center" v-for="x in items" :key="x.text">{{ x.text }}</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(task,index) in tasks" :key="index">
      <td>
        <span :class="{'line-through':task.status=== 'finished'}">
        {{ task.name }}
        </span>
      </td>
      <td>
        <span
        class="pointer noselect"
        @click="changeStatus(index)"
        :class="{
          'text-yellow-400' :task.status === 'to-do',
          'text-green-400' :task.status === 'finished',
          'text-red-400' :task.status === 'in-progress'}">
      {{ capitalizeFirstChar(task.status) }}  
      
        </span>
      </td>
      <td class=" text-center">
        <div @click="editTask(index)">
          <p class="fas fa-pen pointer"></p>
        </div>
      </td>
      <td class=" text-center">
        <div @click="deleteTask(index)">
          <span class="fas fa-trash pointer"></span>
        </div>
      </td>
    </tr>

  </tbody>
</table>
</div>
</template>

<script>

import { Button } from 'ant-design-vue';
    const ButtonGroup = Button.Group;
  
    export default {
      components: {
        AButton: Button,
        AButtonGroup: ButtonGroup,
      },
      props: ['Task'],
      name: "Todo",
      
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
</script>

<style >


</style> 