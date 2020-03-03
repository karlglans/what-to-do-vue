<template>
  <div id="app">
    <main id="app-inner">
      <h1>todos</h1>
      <TodoList />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList';

@Component({name: 'App', components: {TodoList}})
export default class App extends Vue {

}
</script>

<style>
body, h1, h2, h3, h4, h5, h6, p, ol, ul, label {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f5f5f5;
  height: calc(100vh);
  width: 100%;
}

#app-inner {
  max-width: 550px;
  margin: 0 auto;
}

#app-inner > h1 {
  font-size: 100px;
  color: rgba(175, 47, 47, 0.15);
}
</style>
