<template>
  <nav>
    | <router-link to="/">Tela Inicial</router-link> 
  
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #d2454d;
}
</style>
