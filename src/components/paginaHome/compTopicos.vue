<template>
    <div class="container_topicos">
        <div class="box_icones">
            <img :src="`imagensTopicosSectionAzul/${icone}`" alt="icone">
        </div>
        <div class="box_txt_topicos">
            <p>{{txt_topicos}}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'compTopicos',
        data(){
          return{}
        },
        props:[
          'icone',
          'txt_topicos'
        ]
    }
</script>

<style scoped>
  .container_topicos{
    display:flex;
    max-width:240px;
    min-width:230px;
    flex-direction:column;
    align-items:center;
    flex-grow:0;
    flex-basis:1;
    margin:10px;
  }
  .box_icones{
    width:158px;
    height:142px;
    background-color: var(--branco);
    border-radius:120px;
    display:flex;
    justify-content:center;
    align-items:center;
  } 
  .box_txt_topicos{
    width:100%;
    margin-top:14px;
  }
  p{
    color:var(--branco);
    font-family:var(--font-textos);
    font-weight:var(--peso-100);
    font-size:var(--tam-textos-web);
    line-height:var(--alt-linha-textos-web);
    text-align:center;
  }
  @media screen and (min-width:0px) and (max-width:760px){
    .container_topicos{
      min-width:145px;
      max-width:160px;  
      margin:12px;
      
    }
    .box_icones{
      width:120px;
      height:105px;
      border-radius:70px;
    }
    p{
      font-size:var(--tam-textos-mobile);
      line-height:var(--alt-linha-textos-mobile);
    }
  }
  @media screen and (min-width: 761px) and (max-width:990px){
    .container_topicos{
      min-width:210px;
      max-width:220px;
      margin:12px;
    }
    .box_icones{
      width:140px;
      height:125px;
      border-radius:75px;
    } 
    .box_txt_topicos{
      width:100%;
      margin-top:14px;
    }
    p{
      font-size:var(--tam-textos-tablet);
      line-height:var(--alt-linha-textos-tablet);
    }
  }
  @media screen and (min-width: 991px) and (max-width:1400px){
    .container_topicos{
      min-width:220px;
      max-width:230px;
      margin:15px;
    }
    .box_icones{
      width:150px;
      height:134px;
      border-radius:75px;
    } 
    .box_txt_topicos{
      width:100%;
      margin-top:14px;
    }
    .box_txt_topicos p{
      color:var(--branco);
      font-family:var(--font-principal);
      font-weight:400;
      font-size:var(--tam_font_mobile);
    }
  }
</style>