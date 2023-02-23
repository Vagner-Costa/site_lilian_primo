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
        this.mutationsPaginaAtual('/blog')
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