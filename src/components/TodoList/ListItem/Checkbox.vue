<template>
  <div class="container" >
    <input type="checkbox" id="checkbox" v-model="note.compleated" class="checkbox-round"/>
     <span></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Note from '../../../models/Note';

@Component({name: 'TodoCheckbox'})
export default class Edit extends Vue {
  @Prop({required: true})
  note!: Note

  @Watch('note.compleated')
  whatchIt(compleated: boolean) {
    this.$emit('noteIsChanged', this.note.id)
  }
}
</script>

<style scoped>
.checkbox-round {
  position: absolute;
  left: 10px;
  top: calc(50% - 1.5em);
  /* bottom: 13px; */
  width: 2.1em;
  height: 2.1em;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
}

.container > input:checked + span::before {
  content: '\2713';
  display: block;
  text-align: center;
  color: #5DC2AF;
  position: absolute;
  left: 1.2rem;
  top: calc(50% - 20px);
  pointer-events: none;
}

.checkbox-round:checked {
  border: 1px solid #AEE0D7;
}
</style>