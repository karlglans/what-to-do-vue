<template>
  <form @submit.prevent="signalCloseComponent">
      <input ref="edit"
        class="todo-edit"
        v-model='note.msg'
        v-on:blur="signalCloseComponent"
        />
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Note from '../../../models/Note';

@Component({name: 'Edit'})
export default class Edit extends Vue {
  @Prop({required: true})
  note!: Note

  signalCloseComponent() {
    this.$emit('removeFocusOnTodo', this.note);
  }
  
  created() {
    this.$nextTick(() => {
      (this.$refs.edit as HTMLElement).focus();
    });
  }
}
</script>

<style scoped>
.todo-edit {
  box-sizing: border-box;
  font-size: 22px;
  color: #4d4d4d;
  vertical-align: middle;
  display: table-cell;
  padding-left: 20px;
  height: 58px;
  width: 490px;
  border: 1px solid #777777;
  -moz-box-shadow:    inset 0 0 10px #999;
  -webkit-box-shadow: inset 0 0 10px #999;
  box-shadow:         inset 0 0 10px #999;
  outline: none;
}
</style>