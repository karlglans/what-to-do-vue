<template>
    <ul>
      <ListItem v-for="note in filteredNotes" :key="note.id"
        v-bind:note="note"
        v-bind:activeNote="activeNote"
        v-on:focus-todo="focusTodo"
        v-on:removeTodo="$emit('removeTodo', note.id)"
        v-on:removeFocusOnTodo="removeFocusOnTodo"
      />
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Note from '../../models/Note';
import ListItem from './ListItem';

@Component({name: 'List', components: {ListItem}})
export default class List extends Vue {
  @Prop({required: true})
  notes!: Array<Note>

  activeNote = -1;

  focusTodo(id: number) {
    this.activeNote = id
  }

  removeFocusOnTodo() {
    this.activeNote = -1;
  }

  get filteredNotes(): Array<Note> {
    const route = this.$route; // proxy? 
    const { path } = route;
    const routeCompelte = path && path.includes("/complete");
    const routeIncompelte = path && path.includes("incomplete");
    const routeAll = path === "/" || !(routeCompelte || routeIncompelte);
    function decide(compleated: boolean): boolean {
      return routeCompelte && compleated || routeIncompelte && !compleated || routeAll;
    }
    return this.notes.filter( (note: Note) => decide(note.isCompleated()))
  }
}
</script>

<style scoped>
ul {
  box-sizing: border-box;
  overflow: hidden;
  list-style-type: none;
  display: block;
  width: 100%;
  border-top: 1px solid #E6E6E6;
}
</style>