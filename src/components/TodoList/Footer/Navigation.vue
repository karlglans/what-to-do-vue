<template>
  <ul>
    <li><router-link to="/">All</router-link></li>
    <li><router-link to="/incomplete">Active</router-link></li>
    <li><router-link to="/complete">Complete</router-link></li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({name: 'Footer'})
export default class Footer extends Vue {
}
</script>

<style scoped>
ul {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  list-style-type: none;
  vertical-align: middle;
  display: table-cell;
  background-color: transparent;
}

.router-link-exact-active {
  border: 1px solid rgba(175, 47, 47, 0.2);
}

li {
  display: inline;
}

a {
  color: #777777;
  font-size: 14px;
  padding: 3px 7px;
  vertical-align: middle;
  text-decoration: none;
  border: 1px solid white;
}
</style>