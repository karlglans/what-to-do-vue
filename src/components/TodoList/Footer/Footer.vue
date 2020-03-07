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
import { Component, Prop, Vue } from 'vue-property-decorator'
import Note from '@/models/Note'
import ItemCounter from './ItemsCounter.vue'
import Navigation from './Navigation.vue'

@Component({name: 'Footer', components: {ItemCounter, Navigation}})
export default class Footer extends Vue {
  @Prop({required: true})
  notes!: Array<Note>

  get hasCompletedItems() {
    return this.notes.filter(n => n.compleated).length > 0
  }

}
</script>

<style scoped>
footer {
  font-size: 14px;
  padding: 10px 15px; 
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(1em, auto) minmax(1em, auto);
  grid-template-areas: "counter clean" 
    "nav nav";
}

footer > :nth-child(1) {
  grid-area: counter;
}

/* This solution is stolen from the orginal TodolistMVC */
footer::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  pointer-events: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 430px) {
  footer {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(1em, auto); 
    grid-template-areas: "counter nav clean"
  }
}

.clear-button {
  grid-area: clean;
  white-space: nowrap;
  height: 20px;
  padding: 3px 7px;
  justify-self: self-end;
  align-self: center;
  cursor: pointer;
  border: none;
  font-size: 14px;
  background-color: transparent;
  color: #777;
}
.clear-button:hover {
  text-decoration: underline;
}
</style>