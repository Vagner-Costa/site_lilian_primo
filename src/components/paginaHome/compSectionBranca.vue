<template>
    <section class="section_branca">
    <div class="container_geral_banner">
      <button class="seta_esq">
        <img src="@/assets/icones/seta-esq.png" alt="">
      </button>

      <div class="box_banner_descricao">
        <div class="box_img">
          <img src="" alt="">
          <p>FOTO</p>     
        </div>

        <div class="descricao_banner">
          <p>
            texto de exemploO processo de Personal Branding foi essencial
            para a minha trajetória política. Além de entender como as
            pessoas te enxergam, as metodologias utilizadas conseguem identificar
            nossas potencialidades e a partir dai conseguir um resultado mais
            eficiente. texto de exemplo
          </p>
        </div>

        <div class="box_titulo_nome_sobrenome">
          <p>NOME E SOBRENOME</p>
        </div>

        <div class="subtitulo_profissao">
          <p>PROFISSÃO</p>
        </div>
      </div>

      <button class="seta_dir">
        <img src="@/assets/icones/seta-dir.png" alt="">
      </button>
    </div>

    <div class="box_btn_contador">
      <button class="btn_contador"></button>
      <button class="btn_contador"></button>
      <button class="btn_contador"></button>
      <button class="btn_contador"></button>
    </div>
  </section>
</template>

<script>
export default{
    name: 'compSectionBranca',
    data() {
        return{}
    },
}
</script>


<style>
  /*conteúdo section branca*/
  .section_branca{
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
  .box_banner_descricao{
    margin: 0px 50px;
    width:800px;
    height:500px;
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
    .box_banner_descricao{
      width:100%;
      margin: 0px;
      border:solid 1px #f00;
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