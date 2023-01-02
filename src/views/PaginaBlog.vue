<template>
    <section>
        <h1 class="titulos">BLOG</h1>

        <CompTopicos :imagens="computedImagem"/>
    </section>
</template>

<script>
import {mapMutations} from 'vuex'
import CompTopicos from '@/components/compTopicosPortifolioBlog.vue';

export default {
    name: 'PaginaBlog.vue',
    data() {
        return {
            pagina_atual: '',
            imagens : [
                {
                    id: '0001',
                    imagem: 'Rectangle27.png',
                    descricao: 'Hub de empresas, uma nova tendência'
                },
                {   
                    id: '0002',
                    imagem: 'Rectangle10.png',
                    descricao: 'Inteligência Artificial nos faz perguntar: o que é arte?'
                },
                {
                    id: '0003',
                    imagem: 'Rectangle11.png',
                    descricao: 'O cenário e o futuro da mobilidade elétrica na América Latina'
                },
                {   
                    id: '004',
                    imagem: 'Rectangle12.png',
                    descricao: 'Bem-vindo a Matrix, você vai precisar de óculos virtuais'
                },
                {   
                    id: '005',
                    imagem: 'Rectangle27.png',
                    descricao: 'Teletransporte holográfico ou uma porta para a Matrix?'
                },
                {   
                    id: '',
                    imagem: '',
                    descricao: ''
                },  
                {
                    id: '',
                    imagem: '',
                    descricao: ''
                },
                {
                    id: '',
                    imagem: '',
                    descricao: ''
                },
                {
                    id: '',
                    imagem: '',
                    descricao: ''
                },              
            ]
        }
    },
    beforeMount(){
        this.pagina_atual = window.location.pathname
        this.mutationsPaginaAtual(this.pagina_atual)
    },
    components: {
        CompTopicos
    },
    computed: {
        computedImagem(){
            return this.imagens
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