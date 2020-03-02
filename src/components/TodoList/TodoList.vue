<template>
  <section id="todo-list">
    <Input
      v-bind:note="inputNote"
      v-on:checkboxChanged="changeCompleateStatusForAll($event)"
      v-on:create-todo="createNote"/>
    <List
      v-bind:notes="notes"
      v-on:removeTodo="removeTodo"
    />
    <Footer
      v-bind:notes="notes"
      v-on:removeCompleated="removeCompleated"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Note from '../../models/Note'
import Input from './Input'
import List from './List.vue'
import Footer from './Footer'

@Component({name: 'TodoList', components: {List, Footer, Input}})
export default class TodoList extends Vue {
  todos = [
    new Note('the message1', true),
    new Note('the message2', false),
    new Note('the message3', true),
  ]

  inputNote = new Note('')

  get notes() {
    return this.todos;
  }

  changeCompleateStatusForAll(compleated: boolean) {
    this.notes.forEach(note => note.compleated = compleated)
  }

  createNote() {
    this.todos.push(Object.assign(new Note(''), this.inputNote))
    this.inputNote = new Note('')
  }

  removeTodo(id: number) {
    const noteIdx = this.notes.findIndex( (note: Note) => note.id === id)
    if (noteIdx !== -1) {
      this.notes.splice(noteIdx, 1)
    }
  }

  // @Watch('inputNote.compleated')
  // whatchIt(compleated: boolean) {
  //   this.notes.forEach(note => note.compleated = compleated)
  // }

  removeCompleated() {
    this.todos = this.todos.filter( (note: Note) => !note.compleated)
  }
}
</script>

<style scoped>
  #todo-list {
  position: relative;
  font-size: 24px;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  background-color: white;
  -moz-box-shadow:    0 0 5px 5px #eee;
  -webkit-box-shadow: 0 0 5px 5px #eee;
  box-shadow:         0 0 5px 5px #eee;
  }
</style>
