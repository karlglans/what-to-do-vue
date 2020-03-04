<template>
  <section id="todo-list">
    <Input
      v-bind:note="inputNote"
      v-on:checkboxChanged="changeCompleateStatusForAll"
      v-on:create-todo="createNote"/>
    <List
      v-bind:notes="notes"
      v-on:removeTodo="removeTodo"
      v-on:noteIsChanged="handleNoteChanged"
    />
    <Footer
      v-bind:notes="notes"
      v-on:removeCompleated="removeCompleated"
    />
  </section>
</template>

<script lang="ts">
import NoteStoreService, {sortAscId} from '../../services/NoteStoreService';
import { Component, Vue } from 'vue-property-decorator'
import Note from '@/models/Note'
import Input from './Input'
import List from './List.vue'
import Footer from './Footer'

@Component({name: 'TodoList', components: {List, Footer, Input}})
export default class TodoList extends Vue {
  todos: Note[] = [];
  inputNote = new Note('')
  noteStore = new NoteStoreService()

  get notes() {
    return this.todos
  }

  changeCompleateStatusForAll(compleated: boolean) {
    this.notes.forEach(note => note.compleated = compleated)
  }

  createNote() {
    const note = Object.assign(new Note(''), this.inputNote)
    note.assignAnId()
    this.todos.push(note)
    this.inputNote = new Note('')
    this.noteStore.addNote(note)
  }

  removeTodo(id: number) {
    const noteIdx = this.notes.findIndex( (note: Note) => note.id === id)
    if (noteIdx !== -1) {
      this.notes.splice(noteIdx, 1)
      this.noteStore.removeNote(id)
    }
  }

  handleNoteChanged(id: number) {
    const note = this.notes.find(n => n.id === id)
    if (note !== undefined) {
      this.noteStore.store(note)
    }
  }

  removeCompleated() {
    this.todos
      .filter( (note: Note) => note.compleated)
      .forEach(note => this.noteStore.removeNote(note.id))
    this.todos = this.todos.filter( (note: Note) => !note.compleated)
  }

  created() {
    Note.setNextId(this.noteStore.findLastId() + 1)
    this.noteStore.getNotes()
      .sort(sortAscId)
      .forEach(obj => this.todos.push(Object.assign(new Note(''), obj)))
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
