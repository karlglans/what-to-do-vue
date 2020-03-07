<template>
  <span class="counter">{{outputText()}}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Note from '@/models/Note'

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
  justify-self: self-start;
  align-self: center;
  padding: 3px 7px;
  font-size: 14px;
}
</style>