<template>
    <section>
        <h1 class="titulos">Portfólio</h1>

       <CompTopicos :videos="computedVideos" />
    </section>
</template>

<script>
import {mapMutations} from 'vuex'
import CompTopicos from '../components/compTopicosPortifolioBlog.vue'

export default {
    name: 'PaginaPortfolio.vue',
    data() {
        return{
            pagina_atual: '',
            videos : [
                {
                    id: '0001',
                    imagem: 'Rectangle27.png',
                    video: '',
                    descricao: 'EMPRESA DE PATINETES ELÉTRICOS VALE MESMO R$15 MILHÕES? | Primo Startups #16'
                },
                {   
                    id: '0002',
                    imagem: 'Rectangle10.png',
                    video: '',
                    descricao: 'ESTE PITCH CHOCOU JOÃO KEPLER E SUA CONVIDADA'
                },
                {
                    id: '0003',
                    imagem: 'Rectangle11.png',
                    video: '',
                    descricao: 'Mobye | Os Desafios da Mulher Empreendedora Lilian Primo Albuquerque no Café com Segurança'
                },
                {   
                    id: '',
                    imagem: '',
                    video: '',
                    descricao: ''
                },
                {   
                    id: '',
                    imagem: '',
                    video: '',
                    descricao: ''
                },
                {   
                    id: '',
                    imagem: '',
                    video: '',
                    descricao: ''
                },  
                {
                    id: '',
                    imagem: '',
                    video: '',
                    descricao: ''
                },
                {
                    id: '',
                    imagem: '',
                    video: '',
                    descricao: ''
                },
                {
                    id: '',
                    imagem: '',
                    video: '',
                    descricao: ''
                },              
            ]
        }
    },
    beforeMount(){
        this.mutationsPaginaAtual('/portfolio')
    },
    components: {
        CompTopicos 
    },
    computed:{
        computedVideos(){
            return this.videos
        }
    },
    methods: {
        ...mapMutations(['mutationsPaginaAtual'])
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
    }
</style>
