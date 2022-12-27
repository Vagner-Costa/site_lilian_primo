<template>
  <section class="section_branca">
    <div class="container_geral_banner">
      <button class="seta_esq" @click="methodsMoverSlider('D')">
        <img src="@/assets/icones/seta-esq.png" alt="">
      </button>

      <div class="container_banner_descricao" ref="container_banner_descricao">
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

    <div class="box_btn_contador">
      <button class="btn_contador"></button>
    </div>
  </section>
</template>

<script>
export default{
    name: 'compSectionBranca',
    data() {
      return{
        largura_container: '',
        base_movimentacao : '',
        pos_left : 0
      }
    },
    mounted(){
      this.methodsObterPosicoes()
      window.addEventListener('resize',this.methodsObterPosicoes)
    },
    
    props: [
      'conteudo_slider'
    ],
    computed: {
      computedPosLeft(){
        return this.pos_left
      },
      computedLarguraConteudo(){
        return this.largura_container.width
      },
      computedBaseMovimentacao(){
        return this.base_movimentacao
      }
    },
    methods: {
      methodsObterPosicoes(){
        this.largura_container = this.$refs.container_banner_descricao.getBoundingClientRect();
        this.base_movimentacao = this.$refs.base_movimentacao.getBoundingClientRect();
        this.pos_left = 0
      },

      methodsMoverSlider(payload){
        this.largura_container = this.$refs.container_banner_descricao.getBoundingClientRect();
        this.base_movimentacao = this.$refs.base_movimentacao.getBoundingClientRect();
        if(payload === 'D'){
          if(this.base_movimentacao.left + this.largura_container.width <= this.largura_container.left){
            this.pos_left += this.largura_container.width            
          }
        }else if(payload === 'E'){
          if(this.base_movimentacao.right - this.largura_container.width >= this.largura_container.right){
            this.pos_left+= -this.largura_container.width           
          }
        }
      }
    }
}
</script>


<style>
  /*conteúdo section branca*/
  .section_branca{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: var(--branco);
    padding:52px 324px;
    min-height:630px;
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
  .container_banner_descricao{
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
    background-color:#ccc;
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
    font-size:18px;
    font-family: var(--font-principal);
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
    font-family: var(--font-principal);
    font-size:22px;
    color:var(--azul-escuro);
    text-align:center;
  }
  .box_titulo_nome_sobrenome{
    margin-top:80px;
  }
  .box_titulo_nome_sobrenome p{
    font-family: var(--font-principal);
    font-size: 32px;
    font-weight:bold;
    color: var(--azul-escurao);
  }
  .subtitulo_profissao{
    width:103px;
    margin-top:18px;
  }
  .subtitulo_profissao p{
    font-family: var(--font-principal);
    font-size:18px;
    font-weight:400;
    color:var(--azul-escurao);
  }
  .box_btn_contador{
    width:60px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    margin-top:10px;  
  }
  .btn_contador{
    width:10px;
    height:10px;
    border-radius:5px;
    background-color:var(--azul-escurao);
    cursor:pointer;
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
    .container_banner_descricao{
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
      text-align:center;
    }
  }
  @media screen and (min-width: 761px) and (max-width:990px){
    .section_branca{
      padding:52px 50px;
    }
  }
  @media screen and (min-width: 991px) and (max-width:1400px){
    .section_branca{
      padding:52px 110px;
    } 
  }
</style>