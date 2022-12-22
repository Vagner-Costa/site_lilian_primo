<template>
    
    <section>
        <h1 class="titulos">Portfólio</h1>

        <div class="container_video">
            <div v-for="video in videos" class="box_videos_descricao" :key="video">
                <div class="box_video">
                    <img v-if="video.video" :src="`img_videos/${video.video}`" alt="video">
                    <button class="btn_play" v-if="video.video" @click="actionsModalPaginaPortfolio(video.id)">
                        <img src="../assets/image1.png" alt="play">
                    </button>
                </div>
                <div class="box_descricao">
                    <p v-if="video.descricao">{{video.descricao}}</p>
                    <p v-else>Título Aqui</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'PaginaPortfolio.vue',
    data() {
        return{
            videos : [
                {
                    id: '0001',
                    video: 'Rectangle27.png',
                    descricao: 'EMPRESA DE PATINETES ELÉTRICOS VALE MESMO R$15 MILHÕES? | Primo Startups #16'
                },
                {   
                    id: '0002',
                    video: 'Rectangle10.png',
                    descricao: 'ESTE PITCH CHOCOU JOÃO KEPLER E SUA CONVIDADA'
                },
                {
                    id: '0003',
                    video: 'Rectangle11.png',
                    descricao: 'Mobye | Os Desafios da Mulher Empreendedora Lilian Primo Albuquerque no Café com Segurança'
                },
                {   
                    video: '',
                    descricao: ''
                },
                {   
                    video: '',
                    descricao: ''
                },
                {   
                    video: '',
                    descricao: ''
                },  
                {
                    video: '',
                    descricao: ''
                },
                {
                    video: '',
                    descricao: ''
                },
                {
                    video: '',
                    descricao: ''
                },              
            ]
        }
    },
    methods: {
        ...mapActions(['actionsModalPaginaPortfolio'])
    }
}
</script>

<style scoped>
    section{
        border-top: solid 1px var(--dourado);
        padding-bottom:328px;
    }
    section h1{
        margin-top:76px;
        margin-bottom:133px;
    }
    .container_video{
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
    }
    .box_videos_descricao{
        width:512px;
        height:382px;
        display:flex;
        flex-direction:column;
        background-color:var(--branco);
        flex-shrink: 1;
        margin:0px 23px 119px 23px;
        border-radius:0px 0px 10px 10px;
    }
    .box_video{
        width:100%;
        height:100%;  
        position:relative; 
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .box_video img{
        width:100%;
        object-fit: contain;
    }
    .btn_play{
        position:absolute;
        background-color:transparent;
        cursor: pointer;
    }
    .box_descricao{
        width:100%;
        max-height:116px;
        min-height:116px;
        background-color:var(--dourado);
        display:flex;
        justify-content:center;
        align-items:center;
        padding:34px 10px 0px 10px;
    }
    .box_descricao p{
        color:var(--branco);
        text-align:center;
        font-size:20px;
        font-family:var(--font-principal);
    }
    @media screen and (min-width:0px) and (max-width:760px){
        section{
            padding-bottom:150px;
        }
        section h1{
            margin-top:30px;
            margin-bottom:50px;
        }
        .titulos{
            font-size:40px;
            line-height:50px;
        }
        .container_video{
            flex-direction:column;
            flex-wrap:nowrap;
            justify-content:flex-start;
            align-items:center;
        }
        .box_videos_descricao{
            width:100%;
            max-width:512px;
            height:300px;
            margin:0px 0px 40px 0px;
            border-radius:0px;
        }
        .box_video img{
            min-width:100%;
            min-height:100%;
        }
        .btn_play{
            position:absolute;
            background-color:transparent;
            cursor: pointer;
        }
        .box_descricao{
            max-height:90px;
            min-height:90px;
            padding:10px;
        }
        .box_descricao p{
            font-size:18px;
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        section{    
            padding-bottom:120px;
        }
        section h1{
            font-size:70px;
            line-height:85px;
            margin-top:76px;
            margin-bottom:76px;
        }
        .container_video{
            justify-content:space-around;
        }
        .box_videos_descricao{
            width:370px;
            height:280px;
            margin:0px 5px 40px 5px;
            border-radius:0px 0px 10px 10px;
        }
        .box_descricao{
            max-height:80px;
            min-height:80px;
            padding:10px 10px 0px 10px;
        }
        .box_descricao p{
            font-size:18px;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        section{    
            padding-bottom:250px;
        }
        section h1{
            font-size:90px;
            line-height:100px;
            margin-bottom:110px;
        }
        .container_video{
            justify-content:space-evenly;
        }
        .box_videos_descricao{
            width:490px;
            height:382px;
            margin:0px 10px 70px 10px;
        }
        .box_descricao p{
            font-size:20px;
        }
    }
</style>
