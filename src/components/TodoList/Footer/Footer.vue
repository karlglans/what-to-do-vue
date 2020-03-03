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
  color: #777777;
  height: 44px;
  padding: 10px 15px;
}

footer::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 430px) {
  footer {
    height: 18px;
  }
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