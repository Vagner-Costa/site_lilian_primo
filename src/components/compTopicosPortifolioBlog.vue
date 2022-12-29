<template>
    <div class="container_video" v-if="videos">
        <div v-for="video in videos" class="box_videos_descricao" :key="video.id">
            <div class="box_video">
                <img v-if="video.imagem" :src="`imagensVideosTopicosPortfolio/${video.imagem}`" :alt="video.id">
                <button class="btn_play" v-if="video.imagem" @click="actionsModalPaginaPortfolio(video)">
                    <img src="../assets/icones/image1.png" alt="play">
                </button>
            </div>
            <div class="box_descricao">
                <p v-if="video.descricao">{{video.descricao}}</p>
                <p v-else>Título Aqui</p>
            </div>
        </div>
    </div>

    <div class="container_video" v-if="imagens">
        <div v-for="imagem in imagens" class="box_videos_descricao" :key="imagem.id">
            <div class="box_video">
                <img v-if="imagem.imagem" :src="`imagensTopicosBlog/${imagem.imagem}`" :alt="imagem.id">
            </div>
            <div class="box_descricao">
                <p v-if="imagem.descricao">{{imagem.descricao}}</p>
                <p v-else>Título Aqui</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'compTopicosPortfolioBlog',
    data() {
        return {}
    },
    props: [
        'videos','imagens'
    ],

    methods: {
        ...mapActions(['actionsModalPaginaPortfolio'])
    }
}
</script>

<style scoped>
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
        padding:0px 10px;
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