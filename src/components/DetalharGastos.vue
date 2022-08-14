<template>
 <div class="container-fluid p-5">
      <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4">  <h1 id="tituloDetalhar">Detalhar</h1></div>
                  <div class="col-md-4"></div>
      </div>
      <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 p-5"> 
                    <!-- bloco de detalhes -->
                    <div class="card w-75">
                          <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">Id gasto</li>
                                <input v-model="ObgResponseDetalhes.id" type="text" class="form-control" align="center" id="idGasto" aria-describedby="idGasto">
                                <li class="list-group-item">Nome da pessoa</li>
                                <input v-model="ObgResponseDetalhes.nome" type="text" class="form-control" align="center" id="Nome" aria-describedby="Nome">
                                <li class="list-group-item">Descrição</li>
                                <textarea v-model="ObgResponseDetalhes.descricao" class="form-control" id="inputDescricao" rows="3"></textarea>
                                <li class="list-group-item">data/hora</li>
                                <input v-model="ObgResponseDetalhes.datahora" type="date" class="form-control" align="center" id="inputDate">
                                <li class="list-group-item">Valor</li>
                                 <input v-model="ObgResponseDetalhes.valor" type="number" class="form-control" align="center" id="inputValor">
                                <li class="list-group-item">Tags</li>
                                <input v-model="ObgResponseDetalhes.tags" type="text" class="form-control" align="center" id="inputTag">
                             </ul>
                          </div>
                     </div>


                  </div>
                    
                  <div class="col-md-4"></div>
      </div>
 </div>


</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Gastos from "../services/gastos"

export default {
  name: 'DetalharGastos',
  data(){
        return{
            id:'',
            ObgResponseDetalhes : {}
        }
      },
   mounted(){
       this.detalhesById();
      },
   created() {
        if(this.$route.params.id){
         this.id = this.$route.params.id;
        }
      },

   methods: {
       detalhesById (){
         Gastos.listarById(this.id).then(res=> {
            console.log("entrou aqui na chamada deltahes by id")
            console.log(res.data);
            console.log(res);
            this.ObgResponseDetalhes = res.data;
         })
       }
      }
}
</script>
<style>
.w-75 {
   margin-left: 10% !important;
}
.form-control {
  color:brown;
  font-weight: 700;
  text-align: center
}
</style>