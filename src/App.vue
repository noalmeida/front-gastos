<template>
  <nav>
    | <router-link to="/">Tela Inicial</router-link> 
  
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background:
        linear-gradient(rgb(166, 131, 247), transparent),
        linear-gradient(to top left, rgb(96, 251, 96), transparent),
        linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
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
