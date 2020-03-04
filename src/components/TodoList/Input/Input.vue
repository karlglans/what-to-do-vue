<template>
  <div class="todo-input-wrapper">
    <form v-on:submit='handleSubmit'>
      <Checkbox
        v-bind:markChecked="allNotsSelected"
        v-on:markAllCompealted="setMarkCompleated"
      />
      <input
        class="todo-input"
        placeholder='What needs to be done?'
        v-model='note.msg'
      />
    </form>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import Note from '@/models/Note';
import Checkbox from './Checkbox.vue';

@Component({name: 'Input', components: {Checkbox}})
export default class ListItem extends Vue {
  @Prop({required: true})
  note!: Note

  @Prop({required: true})
  allNotsSelected!: boolean

  setMarkCompleated(isChecked: boolean) {
    this.$emit('checkboxChanged', isChecked)
  }

  handleSubmit(e: Event) {
    e.preventDefault()
    if (this.note.msg.length > 0) {
      this.$emit('create-todo')
    }
  }  
}
</script>

<style scoped>
.todo-input-wrapper {
  position: relative;
}
.todo-input {
  padding: 16px 16px 16px 60px;
  font-size: 24px;
  color: #4d4d4d;
  outline: none;
  box-sizing: border-box;
  vertical-align: middle;
  height: 65px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #F7F7F7;
}
/* https://www.w3schools.com/cssref/sel_placeholder.asp */ 
::-webkit-input-placeholder {
  color: #d9d9d9;
  font-style: italic;
}
:-ms-input-placeholder {
  color: #d9d9d9;
  font-style: italic;
}
::placeholder {
  color: #d9d9d9;
  font-style: italic;
}
</style>