<template>
    <div class="container-fluid">
        <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">  <h1 id="tituloCadastro">Cadastrar Gastos</h1></div>
              <div class="col-md-4"></div>
            
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
            <form @submit.prevent="salvar">
                <div class="mb-3">
                    <label for="inputNome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="inputNome" v-model="gasto.nome">
                    <div id="inputNome" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="inputDescricao" class="form-label">Descrição</label>
                    <textarea class="form-control" id="inputDescricao" rows="3" v-model="gasto.descricao"></textarea>
                </div>
                <div class="mb-3">
                    <label for="inputDate" class="form-label">Data</label>
                    <input type="date" class="form-control" v-model="gasto.datahora" id="inputDate">
                </div>
                   <div class="mb-3">
                    <label for="inputValor" class="form-label">Valor</label>
                    <input type="number" min="0" max="50000" step=".01" class="form-control" v-model="gasto.valor" id="inputValor">
                    <label for="inputTag" class="form-label">Tags</label>
                    <input type="text" class="form-control" v-model="gasto.tags" id="inputTag">
                </div>
                    <div class="container-button"> 
                        <span id="span__buttom">
                            <button type="submit" class="btn btn-warning">Cadastrar</button>
                        </span>
                        <span id="span__buttom">
                            <router-link to="/listar">
                            <button type="button" id="buttom_listar" class="btn btn-primary">Listar Gastos</button>
                            </router-link>
                        </span>
                        
                        </div>
                        
                        
                       
                        
                    
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
import Gasto from '../services/gastos'
export default {
  name: 'Cadastrar',
  data(){
    return {
        gasto:{
            nome: '',
            descricao: '',
            datahora: '',
            valor: '',
            tags: ''
        },
        gastos: []
    }
  },

  methods: {
      
      salvar(){
          console.log(this.gasto)
          Gasto.salvar(this.gasto).then(res=>{
             document.querySelector('form').reset();
             alert('Salvo com sucesso')
          
          })
      },
     
	  
    
  }
}
</script>

<style scoped>
#tituloCadastro {
    margin-left: 4% !important;
   
}
.container-button {
    display: flex !important;
    justify-content: space-around;
   
}
#buttom_listar {
    margin-bottom:20%;
    background-color: #6c5ce7;
    border-color: #5f27cd;
}
.btn {
    width: 200px;
    background-color: #ff7675;
    color:aliceblue;
    border-color: #d63031;
}
.btn:hover{
    background-color: #576574;
}
#buttom_listar:hover {
    background-color: #576574; 
}


</style>