<template>
  <span class="counter">{{outputText()}}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Note from '../../../models/Note';

@Component({name: 'ItemsCounter'})
export default class Footer extends Vue {
  @Prop({required: true})
  notes!: Array<Note>

  outputText() {
    const nNotes = this.notes.filter(note => !note.compleated).length
    if (nNotes == 1) return '1 item left'
    else return `${nNotes} items left`
  }
}
</script>

<style scoped>
.counter {
  display: block;
  height: 20px;
  padding: 3px 7px;
  position: relative;
  float: left;
  font-size: 14px;
  text-align: left;
}
</style>