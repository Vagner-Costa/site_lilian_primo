<template>
    <section>
        <h1>PORTFÓLIO</h1>

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
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:100px 0px;
    }
    h1{
        color:var(--branco);
        font-size:var(--tam-titulos-web);
        font-family:var(--font-titulos);
        line-height:var(--alt-linha-titulos-web);
        font-weight:var(--peso-400);
        margin-bottom:100px;
    }
    @media screen and (min-width:0px) and (max-width:760px){
        section{
            padding:75px 0px;
        }
        h1{
            margin-bottom:50px;
            font-size:var(--tam-titulos-mobile);
            line-height:var(--alt-linha-titulos-mobile);
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        h1{
            font-size:var(--tam-titulos-tablet);
            line-height:var(--alt-linha-titulos-tablet);
            margin-bottom:76px;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){}
</style>
