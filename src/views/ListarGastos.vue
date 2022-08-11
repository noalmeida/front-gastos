<template>
 <div class="container-fluid">
      <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 p-5">  <h1 id="tituloListar">Listar Gastos</h1></div>
                  <div class="col-md-4"></div>
      </div>
      <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4"> 
                    <!-- interar os cards vindo do backend -->
                    <div class="card w-75">
                          <div class="card-body">
                            <h5 class="card-title">ID gasto</h5>
                            <p class="card-text">Nome da</p>
                            <router-link to="/detalhes"><a href="#" class="btn btn-warning">Detalhar</a></router-link>
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
export default {
  name: 'ListarGastos'
}
</script>
