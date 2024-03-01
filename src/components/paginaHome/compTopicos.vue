<template>
  <div class="container_topicos">
    <div class="box_icones">
        <img v-if="conteudo.icone === 'poluicao-agua'" src="../../assets/imagensTopicos/poluicao-agua.png">
        <img v-if="conteudo.icone === 'desperdicio'" src="../../assets/imagensTopicos/desperdicio.png">
        <img v-if="conteudo.icone === 'jogar-lixo'" src="../../assets/imagensTopicos/jogar-lixo.png">
        <img v-if="conteudo.icone === 'plantar'" src="../../assets/imagensTopicos/plantar.png">
        <img v-if="conteudo.icone === 'poluicao-ar'" src="../../assets/imagensTopicos/poluicao-ar.png">
        <img v-if="conteudo.icone === 'reciclar'" src="../../assets/imagensTopicos/reciclar.png">
      </div>
    <div class="box_txt_topicos">
        <p>{{conteudo.texto}}</p>
    </div>
  </div>
</template>

<script>
    export default{
        name: 'compTopicos',
        data(){},
        props:[
          "conteudo"
        ]
    }
</script>

<style scoped>
  .container_topicos{
    display:flex;
    width:240px;
    flex-direction:column;
    align-items:center;
    margin:10px;
  }
  .box_icones {
    width:150px;
    height:150px;
    background-color: var(--branco);
    border-radius:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
  } 
  .box_txt_topicos{
    width:100%;
    margin-top:14px;
  }
  .box_txt_topicos p{
    color:var(--branco);
    font-family:var(--font-principal);
    font-weight:400;
    font-size:20px;
    text-align:center;
  }
  @media screen and (min-width:0px) and (max-width:760px){
    .container_topicos{
      width:160px; 
      margin:10px;
    }
    .box_icones{
      width:120px;
      height:120px;
    }
  }
  @media screen and (min-width: 761px) and (max-width:990px){
    .container_topicos{
      width:200px;
      margin:10px;
    }
    .box_icones{
      width:140px;
      height:140px;
    } 
  }
  @media screen and (min-width: 991px) and (max-width:1400px){
    .container_topicos{
      width:220px;
      margin:10px;
    }
    .box_icones{
      width:160px;
      height:160px;
    } 
  }
</style>