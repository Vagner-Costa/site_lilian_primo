<template>
    <section v-show="gettersModalPaginaPortfolio">
        <div class="box_btn_fechar_modal">
            <button @click="mutationsModalPaginaPortfolio()">x</button>
        </div>
        <div class="container_video">
            <img :src="`videos_portfolio/${gettersVideo.imagem}`" alt="">
        </div>
        <div class="container_descricao">
            <h1>{{gettersVideo.descricao}}</h1>
        </div>
    </section>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'modalPaginaPortfolio',
    data() {
        return{}    
    },
    computed:{
        ...mapGetters(['gettersModalPaginaPortfolio','gettersVideo'])
    },
    methods: {
        ...mapMutations(['mutationsModalPaginaPortfolio'])
    }
}
</script>

<style scoped>
    section{
        width:100vw;
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        background-color:rgba(0,0,0,0.9);
        position:fixed;
        top:0;
        z-index:10;
        padding:30px 40px 50px 40px;
    }
    .box_btn_fechar_modal{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:flex-end;
    }
    .box_btn_fechar_modal button{
        background-color:var(--dourado);
        padding:5px 8px;
        color:var(--branco);
        font-size:30px;
        font-family: var(--font-principal);
        cursor: pointer;
        border-radius:5px;
    }
    .box_btn_fechar_modal button:hover{
        border:solid 1px var(--branco);
    }
    .container_video{
        width:70%;
        background-color:var(--branco);
    }
    .container_video img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
    .container_descricao{
        width:70%;
    }
    .container_descricao h1{
        font-family:var(--font-principal);
        color:var(--branco);
        font-size:22px;
        font-weight:300;
        text-align:center;
    }
    @media screen and (min-width:0px) and (max-width:760px){
        section{
            padding:0;
            justify-content:flex-start;
        }
        .box_btn_fechar_modal{
            padding:10px;
            margin-bottom:200px;
        }
        .container_video{
            width:100%;
        }   
        .container_descricao{
            width:100%;
            padding:0px 10px;
            margin-top:50px;
        }
        .container_descricao h1{
            font-size:18px;
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        section{
            padding:20px;
            justify-content:space-between;
        }
        .box_btn_fechar_modal{
            padding:0px;
        }
        .container_video{
            width:90%;
        }   
        .container_descricao{
            width:90%;
            padding:0px;
            margin-bottom:30px;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        .container_video{
            width:80%;
        }   
        .container_descricao{
            width:80%;
            padding:0px;
        }
    }

</style>