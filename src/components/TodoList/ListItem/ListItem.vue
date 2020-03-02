<template>
  <li
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-on:dblclick="$emit('focus-todo', note.id)">
    <label
      class="todo"
      v-if="activeNote !== note.id"
      v-bind:class="{ completed: note.compleated }"
    >
      {{ note.msg }}
    </label>
    <Edit
      v-if="activeNote === note.id"
      v-bind:note="note"
      v-on:removeFocusOnTodo="$emit('removeFocusOnTodo', note.id)" />
    <DeleteButton 
      v-if="hover && activeNote !== note.id"
      @click.native="$emit('removeTodo', note.id)"
    />
    <Checkbox v-if="activeNote !== note.id" v-bind:note="note"/>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Note from '../../../models/Note';
import Edit from './Edit.vue';
import Checkbox from './Checkbox.vue';
import DeleteButton from './DeleteButton.vue';

@Component({name: 'ListItem', components: {Edit, Checkbox, DeleteButton}})
export default class ListItem extends Vue {
  @Prop({required: true})
  note!: Note

  @Prop({required: true})
  activeNote!: number

  hover = false
}
</script>

<style scoped>
label {
  cursor: default;
  display: table-cell;
  color: #4d4d4d;
  padding: 15px 15px 15px 0;
}
.completed {
  color: #d9d9d9;
  text-decoration: line-through;
  /* color: red; */
}
li {
  border-bottom: 1px solid #ededed;
  position: relative;
  /* display: block; */
  display: list-item;
  height: 58px;
  width: 100%;
  padding-left: 60px;
}
/* li button {
  position: absolute;
  right:80px;
  top: 20px;
  border: none;
  background-color: transparent;
  color: #cc9a9a;
  cursor: pointer;
} */
</style>