<template>
    <div class="container-fluid p-5">
        <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4 p-5">  <h1 id="tituloCadastro">Cadastrar Gastos</h1></div>
              <div class="col-md-4"></div>
            
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                  <form>
                <div class="mb-3">
                    <label for="inputNome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="inputNome">
                    <div id="inputNome" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="inputDescricao" class="form-label">Descrição</label>
                    <textarea class="form-control" id="inputDescricao" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="inputDate" class="form-label">Data</label>
                    <input type="date" class="form-control" id="inputDate">
                </div>
                   <div class="mb-3">
                    <label for="inputValor" class="form-label">Valor</label>
                    <input type="number" class="form-control" id="inputValor">
                    <label for="inputTag" class="form-label">Tags</label>
                    <input type="text" class="form-control" id="inputTag">
                </div>
                    <div class="mx-auto" style="width: 200px;"> 
                        <button type="submit" class="btn btn-warning">Cadastrar</button>
                        </div>
                        
                        <button id="linkListar" type="button" class="btn btn-danger mt-1">Listar Gastos</button>
                       
                        
                    
                </form>
            </div>
            <div class="col-md-4"></div>
            
        </div> 
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
        </div>    
    </div>

    <div class="container">
    </div>
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'Cadastrar'
}
</script>

<style scoped>
#tituloCadastro, .btn {
    margin-left: 20% !important;
}
#linkListar {
    background-color: brown;
    color: azure;
    margin-bottom: 60%;
    margin-right: 14% !important;
}


</style>