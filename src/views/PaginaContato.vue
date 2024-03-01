
<template>
    <section>
        <h1 class="titulos distancia">CONTATO</h1>  
        <div class="container_img_dados">
            <div class="container_img">
                <img src="../assets/logotipo/arvore1.png" alt="img">
            </div>

            <div class="container_dados">
                <h3 class="subtitulo dist1">Dados de contato:</h3>

                <p class="texto dist2">E-mail: teste@testemail.com.br</p>

                <p class="texto dist2">Whatsapp: (xx) 9xxxx-xxxx</p>

                <p class="texto dist2">Telefone: (xx) 9xxxx-xxxx</p>

                <div class="container_redes_sociais">
                    <div class="container_img_redes">
                        <img class="" src="../assets//icones/facebook.png" alt="img">
                    </div>

                    <div class="container_img_redes">
                        <img class="" src="../assets//icones/twitter.png" alt="img">
                    </div>

                    <div class="container_img_redes">
                        <img class="" src="../assets//icones/instagram.png" alt="img">
                    </div>

                    <div class="container_img_redes">
                        <img class="" src="../assets//icones/linkedin.png" alt="img">
                    </div>

                    <div class="container_img_redes">
                        <img class="" src="../assets//icones/whatsapp.png" alt="img">
                    </div>
                    
                </div>

            </div>
        </div>    
    </section>
</template>

<script>
import CompBanner from '@/components/compBanner.vue'

export default {
    name: 'PaginaContato.vue',
    data() {
        return {
        }
    },
    
    components: {
        CompBanner
    },
    computed:{}
}
</script>

<style scoped>
    section{
        padding-bottom:80px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .distancia{
        margin:70px 0px;
    }
    .container_img_dados{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;

    }
    .dist1{
        margin-bottom:70px;
        width:100%;
        text-align:center;
    }
    .container_img, .container_dados{
        width:100%;
        max-width:500px;
        height:450px;
        display:flex;
        flex-direction:column;
        position:relative;
    }
    .container_img{
        justify-content:center;
        align-items:center;
    }
    .dist2{
        margin-bottom:15px;
    }
    .container_redes_sociais{
        width:100%;
        position:absolute;
        bottom:0;
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;
    }
    .container_img_redes{
        width:55px;
        height:55px;
        border-radius:100%;
        background-color:var(--branco);
        display:flex;
        justify-content:center;
        align-items:center;
        padding:10px;
    }


    @media screen and (min-width:0px) and (max-width:760px){
        .distancia{
            margin:70px 0px 10px 0px
        }
        .container_img_dados{
            flex-direction:column;
            align-items:center
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        .distancia{
            margin:70px 0px 10px 0px
        }
        .container_img_dados{
            flex-direction:column;
            align-items:center
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        .distancia{
            margin:70px 0px
        }
        .container_img_dados{
            flex-direction:row;
        }
    }
</style>