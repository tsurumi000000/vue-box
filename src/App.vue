<template>
  <div id="app">
    <H1>Next Base </H1>
    <b-nav tabs>
      <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="/createroom">createroom</router-link></b-nav-item>
      <b-nav-item><router-link to="/index">roomindex</router-link></b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  // padding: 30px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
