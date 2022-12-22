<template>
    <section>           
        <article>  
            <CompBanner/>            
            <div class="box_txt_aboutme">
                <h1 class="titulos">ABOUT ME</h1>
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
            
        </article>
    </section>
</template>

<script>
import CompBanner from '@/components/paginaHome/compBanner.vue'
export default {
    name: 'PaginaAboutMe',
    data() {
        return{}
    },
    components:{
        CompBanner
    }
}
</script>

<style scoped>
    article{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        z-index:3;
    }
    .box_txt_aboutme{
        margin-top:-40px;
    }
    .box_txt_minhaHistoria{
        margin-top:144px;
    }
    .box_txt_minhaHistoria h3{
        color:var(--branco);
        font-family:var(--font-principal);
        font-size:68px;
        line-height:70px;
        font-weight:400;
    }
    .box_descricao{
        margin-top:54px;
        margin-bottom:402px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        max-width:1202px;
    }
    .box_descricao p{
        color:var(--branco);
        font-family:var(--font-principal);
        text-align:center;
        font-size:32px;
        margin-bottom:50px;
        line-height:32px;
        font-weight:100;
    }
    @media screen and (min-width:0px) and (max-width:760px){
        .box_txt_aboutme{
            margin-top:30px;
        }
        .box_txt_aboutme h1{
            font-size:40px;
            line-height:55px;
        }
        .box_txt_minhaHistoria{
            margin:50px 10px 0px 10px;
        }
        .box_txt_minhaHistoria h3{
            font-size:30px;
            line-height:35px;
        }
        .box_descricao{
            margin-top:54px;
            margin-bottom:100px;
            padding:0px 10px;
        }
        .box_descricao p{
            font-size:22px;
            text-align:justify;
            margin-bottom:30px;
            line-height:25px;
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        .box_txt_aboutme{
            margin-top:-30px;
        }
        .box_txt_aboutme h1{
            font-size:70px;
            line-height:75px;
        }
        .box_txt_minhaHistoria{
            margin:70px 10px 0px 10px;
        }
        .box_txt_minhaHistoria h3{
            font-size:50px;
            line-height:55px;
        }
        .box_descricao{
            margin-top:54px;
            margin-bottom:170px;
            padding:0px 50px;
        }
        .box_descricao p{
            font-size:28px;
            text-align:justify;
            margin-bottom:30px;
            line-height:32px;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        .box_txt_aboutme{
            margin-top:-30px;
        }
        .box_txt_aboutme h1{
            font-size:70px;
            line-height:75px;
        }
        .box_txt_minhaHistoria{
            margin:70px 10px 0px 10px;
        }
        .box_txt_minhaHistoria h3{
            font-size:50px;
            line-height:55px;
        }
        .box_descricao{
            margin-top:54px;
            margin-bottom:170px;
            padding:0px 70px;
        }
        .box_descricao p{
            font-size:28px; 
            margin-bottom:30px;
            line-height:32px;
        }
    }
    
</style>