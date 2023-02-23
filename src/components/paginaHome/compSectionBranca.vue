<template>
  <section class="section_branca">
    <div class="container_geral_banner">
      <button class="seta_esq" @click="methodsMoverSlider('D')">
        <img src="@/assets/icones/seta-esq.png" alt="">
      </button>

      <div class="container_slider_descricao" ref="container_slider_descricao">
        <div class="base_movimentacao" ref="base_movimentacao" :style="{transform: `translate(${computedPosLeft}px,0px)`}">
          <div class="box_conteudo" :style="{width: computedLarguraConteudo+'px'}" v-for="conteudo in conteudo_slider" :key="conteudo.id">
            <div class="box_img">
              <img v-if="conteudo.foto" :src="`conteudo.foto`" :alt="conteudo.id">
              <p v-else>FOTO</p>     
            </div>

            <div class="descricao_banner">
              <p>{{conteudo.descricao}}</p>
            </div>

            <div class="box_titulo_nome_sobrenome">
              <p>{{conteudo.titulo}}</p>
            </div>

            <div class="subtitulo_profissao">
              <p>{{conteudo.subtitulo}}</p>
            </div>
          </div>
        </div>
      </div>

      <button class="seta_dir" @click="methodsMoverSlider('E')">
        <img src="@/assets/icones/seta-dir.png" alt="">
      </button>
    </div>

    <div class="container_btn_contador">
      <div class="box_btn_contador" :style="{transform: `translate(${computedPosLeftBtnCirculo}px,0px)`}">
        <div class="btn_contador" :class="{btn_selecionado : conteudo_slider.indexOf(conteudo) == computedPosInicial}"
          v-for="conteudo in conteudo_slider" :key="conteudo.id" 
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
    name: 'compSectionBranca',
    data() {
      return{
        largura_container:'',
        tam_conteudo:0,
        pos_inicial:0,
        pos_left:0,
        pos_left_btn_circulo:0
      }
    },
    props: [
      'conteudo_slider'
    ],
    mounted(){
      this.methodsReset()
      window.addEventListener('resize',this.methodsReset)
    },

    computed: {
      computedPosLeft(){
        return this.pos_left
      },
      computedLarguraConteudo(){
        return this.largura_container
      },
      computedPosInicial(){
        return this.pos_inicial
      },
      computedPosLeftBtnCirculo(){
        return this.pos_left_btn_circulo
      }
    },

    methods: {
      methodsReset(){
        this.largura_container = this.$refs.container_slider_descricao.offsetWidth
        this.tam_conteudo = this.conteudo_slider.length
        this.pos_inicial = 0
        this.pos_left = 0
        this.pos_left_btn_circulo = 0
      },

      methodsMoverSlider(payload){
        if(payload === 'D'){
          if(this.pos_inicial > 0){
            this.pos_inicial--
            this.pos_left+= this.largura_container
            if(this.tam_conteudo > 3 && (this.pos_inicial > 0 && this.pos_inicial < this.tam_conteudo-2)){
              console.log(this.pos_inicial)
              this.pos_left_btn_circulo+= 20
            }
          }
        }else if(payload === 'E'){          
          if(this.pos_inicial < this.tam_conteudo-1){
            this.pos_inicial++
            this.pos_left+= -this.largura_container 
            if(this.tam_conteudo > 3 && (this.pos_inicial > 1 && this.pos_inicial < this.tam_conteudo-1) ){
              this.pos_left_btn_circulo+= -20
            }
          }
        }
      },
    }
}
</script>

<style>
  .section_branca{
    width:100%;
    height:auto;
    min-height:630px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color: var(--branco);
    padding:50px  324px;
    
  }
  .container_geral_banner{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    flex-wrap:nowrap;
    position:relative;
  }
  .seta_esq, .seta_dir{
    width:20px;
    min-width:20px;
    height:34px;
    min-height:34px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    background-color:var(--branco);
  }
  .container_slider_descricao{
    margin: 0px 50px;
    width:900px;
    height:500px;
    position:relative;
  }
  .base_movimentacao{
    height:100%;
    display:flex;
    flex-direction:row;
    position:absolute;
    transition: all 0.5s;
  }
  .box_conteudo{
    height:100%;
    padding-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
  }
  .box_img{
    width:120px;
    min-width:120px;
    height:120px;
    min-height:120px;
    background-color:var(--dourado);
    border-radius:60px;
    display:flex;
    justify-content: center;
    align-items:center;
    position:relative;
  }
  .box_img p{
    font-size:var(--tam-textos-web);
    font-family: var(--font-textos);
    font-weight:var(--peso-100);
    line-height:var(--alt-linha-textos-web);
    color: var(--branco);
    position:absolute;
  }
  .box_img img{
    width:100%;
    height:100%;
    object-fit: contain;
  }
  .descricao_banner{
    margin-top:30px;
  }
  .descricao_banner p{
    font-family: var(--font-textos);
    font-size:var(--tam-textos-web);
    font-weight:var(--peso-100);
    line-height:var(--alt-linha-textos-web);
    color:var(--azul-escuro);
    text-align:center;
  }
  .box_titulo_nome_sobrenome{
    margin-top:80px;
    padding-top:5px;
  }
  .box_titulo_nome_sobrenome p{
    font-family: var(--font-titulos);
    font-size: 30px;
    font-weight:var(--peso-100);
    line-height:var(--alt-linha-textos-web);
    color: var(--azul-escurao);
  }
  .subtitulo_profissao{
    width:103px;
    margin-top:18px;
  }
  .subtitulo_profissao p{
    font-family: var(--font-textos);
    font-size:16px;
    font-weight:100;
    color:var(--azul-escurao);
  }
  .container_btn_contador{
    width:60px;
    height:24px;
    margin-top:10px;
    overflow:hidden;
    padding:0px;
  }
  .box_btn_contador{
    display:inline-flex;
    position:relative;
    margin:0px;
  }
  .btn_contador{
    width:10px;
    height:10px;
    margin:0px 5px;
    border-radius:5px;
    background-color:var(--azul-escurao);
  }
  .btn_selecionado{
    background-color:var(--dourado)
  }
  @media screen and (min-width:0px) and (max-width:760px){
    .section_branca{
      padding:30px 10px;
      margin-top:40px;
    }  
    .container_geral_banner{
      width:100%;
      justify-content:center;
      align-items:center;
    }
    .box_img p{
      font-size:var(--tam-textos-mobile);
      line-height:var(--alt-linha-textos-mobile);
    }
    .seta_esq, .seta_dir{
      position:absolute;
      height:80px;
      border-radius:5px;
      z-index:5;
    }
    .seta_esq{
      left:10px;
      background-color: rgba(255,255,255,0.4);
    }
    .seta_dir{
      right:10px;
      background-color: rgba(255,255,255,0.4);
    }
    .descricao_banner p{
      font-size:var(--tam-textos-mobile);
      line-height:var(--alt-linha-textos-mobile);
    }
    
    .container_slider_descricao{
      width:100%;
      margin: 0px;
      padding:0px;
    }
    .box_titulo_nome_sobrenome{
      width:100%;
      margin-top:40px;
    }
    .box_titulo_nome_sobrenome p{
      font-size: 26px;
      line-height:var(--alt-linha-textos-mobile);
    }
    
  }
  @media screen and (min-width: 761px) and (max-width:990px){
    .section_branca{
      padding:52px 50px;
    }
    .box_img p{
      font-size:var(--tam-textos-tablet);
      line-height:var(--alt-linha-textos-tablet);
    }
    .box_titulo_nome_sobrenome p{
      font-size: 28px;
      line-height:var(--alt-linha-textos-tablet);
    }
    .descricao_banner p{
      font-size:var(--tam-textos-tablet);
      line-height:var(--alt-linha-textos-tablet);
    }
  }
  @media screen and (min-width: 991px) and (max-width:1400px){
    .section_branca{
      padding:52px 110px;
    } 
  }
</style>