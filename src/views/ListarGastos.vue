<template>
<h1 id="tituloListar">Listar Gastos</h1>

<div class="l-cards" >
  <article class="c-card" v-for="arr  in ArrData" :key="arr.id">
    <div class="c-card__image">
      <div class="c-card__content">
      <span class="u-text-placeholder" style="width:50%">ID = {{arr.id}}</span>
      <span class="u-text-placeholder-nome">Nome = {{arr.nome}}</span>
      <span class="u-text-placeholder" style="width:50%">Valor = {{arr.valor}}</span>
       <router-link :to="{ name: 'detalhar', params: { id: arr.id}}"><button type="button" class="btn btn-primary">Detalhes</button></router-link>
      </div>
    </div>
  </article>
  
</div>


</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Gastos from '../services/gastos'
export default {
  name: 'ListarGastos',
  mounted(){
    this.listar();
  },
  data(){
    return{
      id: null,
      nome: null,
      tag: null,
      ArrData: [],
    }
  },
  methods:{
      listar(){
        Gastos.listar().then(res => {
        console.log(res);
          var ArrData = res.data;
          this.ArrData = ArrData;
       })
    }
    
  }
  
  
}

</script>

<style scoped>

.u-text-placeholder {
  background-color: #a2a8b1;
  display: inline-block;
  height: 20px;
  margin-left: 65px;
  font-weight: 600;
}
.u-text-placeholder-nome {
  margin-left: 5px;
  background-color: #a2a8b1;
  display: inline-block;
  height: 20px;
  font-weight: 600;
}


.l-cards {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  padding: 30px;
}

.c-card {
  background-color: #ced4da;
  border-radius: .6rem;
  display: flex;
  flex-direction: column;
  width: 300px;
}
 .c-card__content {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    padding: 15px;
    height: 150px;
  }

</style>
