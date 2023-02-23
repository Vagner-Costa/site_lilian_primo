<template>
    <section>       
        <CompBanner :banner="computedBannerAboutMe"/>  
        <div class="container_textos">          
            <div class="box_txt_aboutme">
                <h1>ABOUT ME</h1>
            </div>

            <div class="box_txt_minhaHistoria">
                <h3>Minha história</h3>
            </div>

            <div class="box_descricao">
                <p>
                    Formada em Sistema de Informação e com MBA em gestão Empresarial pública e
                    privada pela FAAP, e Mobilidade Eletrica pela Unicamp. Lilian Primo Albuquerque é
                    executiva de Tecnologia e trabalhou por mais de 15 anos na IBM. Atualmente esta CEO
                    e Co-founder na Mobye, startup de mobilidade que atua com veículos elétricos com o
                    objetivo de garantir a integridade do planeta e sociedade.
                </p>
                <p>
                    Ela também está Vice-presidente de Ti na ANEFAC, Vice-presidente do conselho
                    consultivo do Instituto Êxito de Empreendedorismo e uma das líderes do comitê de
                    investimento no Pool Ladies no Bossa Nova, além de Conselheira TrendsInnovation e
                    Colunista na Nova Brasil FM, IG empreenda, Ad News e Startupi. Lilian é referência em
                    inovação, tecnologias emergentes, Inteligência Artificial, Startups e mentorias. Com
                    experiências com imersões no ecossistema de Israel e Vale do Silício, além de
                    assigment na Índia, ela tem como vocação gerenciar e impulsionar novos negócios
                    para clientes em áreas que demandam grande transformação digital.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import {mapMutations} from 'vuex'
import CompBanner from '@/components/compBanner.vue'
export default {
    name: 'PaginaAboutMe',
    data() {
        return{
            pagina_atual: '',
            banner_aboutMe: 'mentes-brilhantes.png'
        }
    },
    beforeMount(){
        this.mutationsPaginaAtual('/about-me')
    },
    components:{
        CompBanner
    },
    computed:{
        computedBannerAboutMe(){
            return this.banner_aboutMe
        },
    },
    methods: {
        ...mapMutations(['mutationsPaginaAtual'])
    }
}
</script>

<style scoped>
    section{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .container_textos{
        width:100%;
        overflow:visible;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .box_txt_aboutme{
        margin-top:-60px;
    }
    h1{
        font-family:var(--font-titulos);
        font-size:var(--tam-titulos-web);
        font-weight:var(--peso-400);
        line-height:var(--alt-linha-titulos-web);
        color:var(--branco);
    }
    h3{
        color:var(--branco);
        font-family:var(--font-titulos);
        font-size:var(--tam-subtitulos-web);
        line-height:var(--alt-linha-subtitulos-web);
        font-weight:var(--peso-400);
        margin-top:100px;
    }
    .box_descricao{
        margin-top:50px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        max-width:1202px;
        margin-bottom:120px;
    }
    .box_descricao p{
        color:var(--branco);
        font-family:var(--font-textos);
        font-weight:var(--peso-100);
        font-size:var(--tam-textos-web);
        line-height:var(--alt-linha-textos-web);
        text-align:center;
    }
    @media screen and (min-width:0px) and (max-width:760px){
        .box_txt_aboutme{
            margin-top:-25px;
        }
        h1{
            font-family:var(--font-titulos);
            font-size:var(--tam-titulos-mobile);
            font-weight:var(--peso-400);
            line-height:var(--alt-linha-titulos-mobile);
            color:var(--branco);
        }
        h3{
            font-size:var(--tam-subtitulos-mobile);
            line-height:var(--alt-linha-subtitulos-mobile);
        }
        .box_descricao{
            margin-top:40px;
            padding:0px 10px;
        }
        .box_descricao p{
            font-size:var(--tam-textos-mobile);
            line-height:var(--alt-linha-textos-mobile);
            text-align:justify;
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        .box_txt_aboutme{
            margin-top:-30px;
        }
        h1{
            font-size:var(--tam-titulos-tablet);
            line-height:var(--alt-linha-titulos-tablet);
        }
        h3{
            font-size:var(--tam-subtitulos-tablet);
            line-height:var(--alt-linha-subtitulos-tablet);
        }
        .box_descricao{
            margin-top:40px;
            margin-bottom:100px;
            padding:0px 20px;
        }
        .box_descricao p{
            font-size:var(--tam-textos-mobile);
            line-height:var(--alt-linha-textos-mobile);
            text-align:justify;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        .box_descricao{
            padding:0px 70px;
        }
    }
    
</style>