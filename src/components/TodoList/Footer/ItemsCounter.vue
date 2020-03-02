<template>
  <span class="counter">{{count()}} items left</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Note from '../../../models/Note';

@Component({name: 'ItemsCounter'})
export default class Footer extends Vue {
  @Prop({required: true})
  notes!: Array<Note>

  count() {
    return this.notes.filter(n => !n.compleated).length
  }
}
</script>

<style scoped>
.counter {
  display: block;
  /* background-color: red; */
  /* border: 1px solid black; */
  height: 20px;
  padding: 3px 7px;
  position: relative;
  float: left;
  font-size: 14px;
  text-align: left;
}
</style>