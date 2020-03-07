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
  grid-area: nav;
  justify-self: center;
  align-self: center;
}

@media screen and (min-width: 430px) {
  ul {
    margin-top: 0;
  }
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