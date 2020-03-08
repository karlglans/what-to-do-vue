<template>
  <li
    @mouseover="hover = true"
    @mouseleave="hover = false" noteIsChanged
    v-on:dblclick="$emit('focus-todo', note.id)"
  >
    <CheckboxSvg
      v-if="activeNote !== note.id"
      v-bind:note="note"
      v-on:noteIsChanged="$emit('noteIsChanged', note.id)"
    />
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
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Note from '@/models/Note'
import Edit from './Edit.vue'
import DeleteButton from './DeleteButton.vue'
import CheckboxSvg from './Checkbox'

@Component({name: 'ListItem', components: {Edit, DeleteButton, CheckboxSvg}})
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
  font-size: 24px;
  padding: 15px 15px 15px 60px;
}
.completed {
  color: #d9d9d9;
  text-decoration: line-through;
}
li {
  border-bottom: 1px solid #ededed;
  position: relative;
  display: list-item;
  min-height: 58px;
  width: 100%;
}
</style>