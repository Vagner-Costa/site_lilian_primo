<template>
    <section class="section_azul">
        <div class="box_titulo_topicos">
          <p class="titulos">Cuidando do meio ambiente com responsabilidade.</p>
        </div>
        <div class="box_topicos">
          <template v-for="dado,index in computedDados" :key="index">
            <BoxTopicos :conteudo="dado"></BoxTopicos>
          </template>
        </div>
    </section>
</template>

<script>
import BoxTopicos from '@/components/paginaHome/compTopicos.vue' 

export default{
    name: 'compSectionAzul.vue',
    data() {
        return{
            dados : [
              {texto:"Não poluir rios e mares",icone:"poluicao-agua"},
              {texto:"Não desperdiçar água",icone:"desperdicio"},
              {texto:"Jogue sempre o lixo no lixo",icone:"jogar-lixo"},
              {texto:"Cuidado e propteção ao meio ambiente",icone:"plantar"},
              {texto:"Evite poluir o ar com gazes tóxicos",icone:"poluicao-ar"},
              {texto:"Sempre recicle os materias reciclaveis",icone:"reciclar"}
            ],
        }
    },
    computed:{
        computedDados(){
        return this.dados
        },
        // computedIcones(){
        // return this.icones
        // },
        // computedFoto(){
        // return this.foto
        // }
    },
    components:{
        BoxTopicos
    }
}
</script>

<style scoped>
    .section_azul{
        display: flex;
        min-height:630px;
        flex-direction: column;
        align-items:center;
        padding: 52px 166px;
    } 
    .box_titulo_topicos{
        width:100%;
        max-width:650px;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
    }
    .box_topicos{
        margin-top:101px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        flex-grow:1;
        flex-wrap:wrap;
    }  
  @media screen and (min-width:0px) and (max-width:760px){
    .section_azul{
      padding: 30px 0px;
    }  
    .box_titulo_topicos{
      width:100%;
      padding:0px 10px;
    }
    .box_topicos{
      margin-top:50px;
    }
  }
  @media screen and (min-width: 761px) and (max-width:990px){
    .section_azul{
      padding: 52px 20px;
    } 
    .box_topicos{
      margin-top:60px;
    }
  }
  @media screen and (min-width: 991px) and (max-width:1400px){
    .section_azul{
      padding: 52px 30px;
    } 
    .box_topicos{
      margin-top:80px;
    }
  }
</style>