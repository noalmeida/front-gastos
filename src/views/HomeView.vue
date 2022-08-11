<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <cadastrar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cadastrar from '@/components/Cadastrar.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'HomeView',
  components: {
    Cadastrar
  }
}
</script>

    Cadastrar