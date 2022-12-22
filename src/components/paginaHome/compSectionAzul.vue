<template>
    <section class="section_azul">
        <div class="box_titulo_topicos">
        <p>Uma trajetória que gerou muitos resultados.</p>
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
        display: flex;
        min-height:630px;
        flex-direction: column;
        align-items:center;
        padding: 52px 166px;
    } 
    .box_titulo_topicos{
        max-width:546px;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
    }
    .box_titulo_topicos p{
        font-weight:700;
        font-family:var(--font-principal);
        font-size:46px;
        color:var(--branco);
        text-align:center;
        line-height:46px;
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
      height:100%;
      padding:0px 10px;
    }
    .box_titulo_topicos p{
      font-size:var(--tam_font_titulo_mobile_tablet);
      line-height:40px;
    }
    .box_topicos{
      margin-top:50px;
    }
  }
  @media screen and (min-width: 761px) and (max-width:990px){
    .section_azul{
      padding: 52px 20px;
    } 
    .box_titulo_topicos{
      width:500px;
    }
    .box_titulo_topicos p{
      font-size:var(--tam_font_titulo_mobile_tablet);
      line-height:46px;
    }
    .box_topicos{
      margin-top:60px;
    }
  }
  @media screen and (min-width: 991px) and (max-width:1400px){
    .section_azul{
      padding: 52px 30px;
    } 
    .box_titulo_topicos{
      width:500px;
    }
    .box_titulo_topicos p{
      font-size:var(--tam_font_titulo_mobile_tablet);
      line-height:46px;
    }
    .box_topicos{
      margin-top:80px;
    }
  }
</style>