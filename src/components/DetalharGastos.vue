<template>
 <div class="container-fluid">
      <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 p-5">  <h1 id="tituloDetalhar">Detalhar</h1></div>
                  <div class="col-md-4"></div>
      </div>
      <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4"> 
                    <!-- bloco de detalhes -->
                    <div class="card w-75">
                          <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">Id gasto</li>
                                <input type="text" class="form-control" id="idGasto" aria-describedby="idGasto">
                                <li class="list-group-item">Nome da pessoa</li>
                                <input type="text" class="form-control" id="Nome" aria-describedby="Nome">
                                <li class="list-group-item">Descrição</li>
                                <textarea class="form-control" id="inputDescricao" rows="3"></textarea>
                                <li class="list-group-item">data/hora</li>
                                <input type="date" class="form-control" id="inputDate">
                                <li class="list-group-item">Valor</li>
                                 <input type="number" class="form-control" id="inputValor">
                                <li class="list-group-item">Tags</li>
                                <input type="text" class="form-control" id="inputTag">
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
export default {
  name: 'DetalharGastos'
}
</script>
<style>
.w-75 {
   margin-left: 10% !important;
}
</style>