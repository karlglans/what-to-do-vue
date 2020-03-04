<template>
  <div class="container" >
    <input type="checkbox"
      v-model="checked"
      class="checkbox-marked"
    />
    <span></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Note from '@/models/Note';

@Component({name: 'TodoCheckbox'})
export default class Checkbox extends Vue {
  @Prop()
  markChecked!: boolean

  get checked() {
    return this.markChecked;
  }

  set checked(value) {
    this.$emit('markAllCompealted', !this.markChecked)
  }
}
</script>

<style scoped>
.checkbox-marked {
  position: absolute;
  left: 10px;
  top: 13px;
  width: 2.1em;
  height: 2.1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
}

.container > input + span::before {
  transform: rotate(90deg);
  font-size: 22px;
  content: '❯';
  display: block;
  text-align: center;
  color: #ddd;
  position: absolute;
  left: 1.5rem;
  top: 1.0rem;
  pointer-events: none;
}

.container > input:checked + span::before {
  color: #737373; 
}

</style>