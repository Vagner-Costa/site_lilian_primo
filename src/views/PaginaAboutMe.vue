<template>
    <section>       
            <CompBanner banner="aboutMe"/>            
            <div class="box_txt_aboutme">
                <h1 class="titulos">ABOUT ME</h1>
            </div>

            <div class="box_txt_minhaHistoria">
                <h3 class="subtitulo">Minha história</h3>
            </div>

            <div class="box_descricao">
                <p class="texto distancia">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, 
                    quam non efficitur mattis, velit diam sodales nunc, et porta eros massa 
                    vel dolor. Proin ultricies ligula quam, ac tempus odio egestas a. Quisque 
                    lacinia orci, at egestas est varius feugiat. Quisque quis euismod orci. 
                    Nunc molestie, lectus et lobortis pulvinar, neque ligula blandit libero, 
                    sodales nec.
                </p>
                <p class="texto">
                    Curabitur leo risus, cursus ut scelerisque at, scelerisque at augue. Suspendisse 
                    quis ex et enim vestibulum faucibus non et lectus. Quisque molestie fringilla 
                    sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat 
                    pulvinar bibendum. Phasellus ut urna ac quam pretium sollicitudin ut ullamcorper 
                    metus. Fusce iaculis augue vitae nisi molestie ultricies. Mauris tincidunt mattis 
                    imperdiet.
                </p>
            </div>
        
    </section>
</template>

<script>
import CompBanner from '@/components/compBanner.vue'
export default {
    name: 'PaginaAboutMe',
    data() {
        return{}
    },
    components:{
        CompBanner
    },
    computed:{}
}
</script>

<style scoped>
    section{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
    }
    .box_txt_aboutme{
        margin-top:-25px;
    }
    .box_txt_minhaHistoria{
        margin-top:80px;
    }
    .box_descricao{
        margin-top:55px;
        margin-bottom:100px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        max-width:1202px;
    }
    .distancia{
        margin-bottom:40px
    }
    @media screen and (min-width:0px) and (max-width:760px){
        .box_txt_aboutme{
            margin-top:-20px;
        }
        .box_txt_minhaHistoria{
            margin-top:50px;
        }
        .box_descricao{
            margin-bottom:80px;
            padding:0px 10px;
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        .box_txt_aboutme{
            margin-top:-25px;
        }
        .box_txt_minhaHistoria{
            margin-top:50px;
        }
        .box_descricao{
            padding:0px 50px;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        .box_txt_aboutme{
            margin-top:-25px;
        }
        .box_txt_minhaHistoria{
            margin-top:50px;
        }
        .box_descricao{
            padding:0px 50px;
        }
    }
    
</style>