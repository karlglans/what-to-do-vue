<template>
  <div class="container" >
    <CheckboxChecked v-if="note.compleated" />
    <Unchecked v-if="!note.compleated" />
    <input type="checkbox" id="checkbox" v-model="note.compleated" class="hitbox-round"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Note from '@/models/Note';
import CheckboxChecked from './CheckSvg.vue'
import Unchecked from './Unchecked.vue'

@Component({name: 'TodoCheckbox', components: {CheckboxChecked, Unchecked}})
export default class Edit extends Vue {
  @Prop({required: true})
  note!: Note

  @Watch('note.compleated')
  whatchIt(){
    this.$emit('noteIsChanged', this.note.id)
  }
}
</script>

<style scoped>
.hitbox-round {
  position: absolute;
  left: 12px;
  top: calc(50% - 1.25em);
  width: 2.1em;
  height: 2.1em;
  border-radius: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
}

.checkbox-checked-svg {
  position: absolute;
  left: 10px;
  top: calc(50% - 0.85em);
}
</style>