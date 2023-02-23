<template>
  <section class="section_azul">
    <div class="box_titulo_topicos">
      <h3>Uma trajetória que gerou muitos resultados.</h3>
    </div>

    <div class="box_topicos">
      <BoxTopicos :icone="computedIcones[0]" :txt_topicos="textos[0]"/>
      <BoxTopicos :icone="computedIcones[1]" :txt_topicos="textos[1]"/>
      <BoxTopicos :icone="computedIcones[2]" :txt_topicos="textos[2]"/>
      <BoxTopicos :icone="computedIcones[3]" :txt_topicos="textos[3]"/>
      <BoxTopicos :icone="computedIcones[4]" :txt_topicos="textos[4]"/>
      <BoxTopicos :icone="computedIcones[5]" :txt_topicos="textos[5]"/>
    </div>
  </section>
</template>

<script>
import BoxTopicos from '@/components/paginaHome/compTopicos.vue' 

export default{
    name: 'compSectionAzul.vue',
    data() {
        return{
            textos : [
                'Ministrou mais de 60 palestras sobre tecnologia e empreendedorismo',
                'Gravou mais de 10 podcasts',
                'Convidada em programas de TV',
                'Realizou mais de 100 mentorias',
                'Escreveu mais de 30 colunas',
                'Rádio Nova Brasil Mais de 80 colunas Tecnologia sem Complicação'
            ],
            icones : [],
            foto: ''
        }
    },
    beforeMount(){
        this.icones = ['perfil.png','microfone.png','tv.png','perfil-tela.png','documento.png','tela-preenchida.png']
    },
    computed:{
        computedTextos(){
        return this.textos
        },
        computedIcones(){
        return this.icones
        },
        computedFoto(){
        return this.foto
        }
    },
    components:{
        BoxTopicos
    }
}
</script>

<style scoped>
    .section_azul{
      width:100%;
      height:auto;
      min-height:630px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      padding:50px 166px;
    } 
    .box_titulo_topicos{
        max-width:546px;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        margin-bottom:50px;
    }
    h3{
      font-family:var(--font-titulos);
      font-size:var(--tam-subtitulos-web);
      font-weight:var(--peso-400);
      line-height:var(--alt-linha-subtitulos-web);
      color:var(--branco);
      text-align:center;
    }
    .box_topicos{
      display:flex;
      justify-content:center;
      flex-wrap:wrap;
    }
  @media screen and (min-width:0px) and (max-width:760px){
    .section_azul{
      padding:50px 10px;
    }  
    .box_titulo_topicos{
      width:100%;
      height:auto;
    }
    h3{
      font-size:var(--tam-subtitulos-mobile);
      line-height:var(--alt-linha-subtitulos-mobile);
    }
  }
  @media screen and (min-width: 761px) and (max-width:990px){
    .section_azul{
      padding:50px 20px;
    } 
    .box_titulo_topicos{
      width:546px;
    }
    h3{
      font-size:var(--tam-subtitulos-tablet);
      line-height:var(--alt-linha-subtitulos-tablet);
    }
  }
  @media screen and (min-width: 991px) and (max-width:1400px){}
</style>