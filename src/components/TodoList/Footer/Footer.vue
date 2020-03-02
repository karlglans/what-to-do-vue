<template>
  <footer>
    <ItemCounter v-bind:notes="notes" />
    <Navigation />
    <button
      v-if="hasCompletedItems"
      class="clear-button"
      @click="$emit('removeCompleated')"
    >
      Clear completed
    </button>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Note from '../../../models/Note';
import ItemCounter from './ItemsCounter.vue';
import Navigation from './Navigation.vue';

@Component({name: 'Footer', components: {ItemCounter, Navigation}})
export default class Footer extends Vue {
  @Prop({required: true})
  notes!: Array<Note>

  get hasCompletedItems() {
    return this.notes.filter(n => n.compleated).length > 0;
  }

}
</script>

<style scoped>
footer {
  font-size: 14px;
  display: block;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 14px;
  /* background-color: green; */
  color: #777777;
  height: 18px;
  padding: 10px 15px; 
}
.clear-button {
  height: 20px;
  padding: 3px 7px;
  float: right;
  cursor: pointer;
  position: relative;
  border: none;
  font-size: 14px;
  background-color: transparent;
  color: #777777;
}
.clear-button:hover {
  text-decoration: underline;
}
</style>