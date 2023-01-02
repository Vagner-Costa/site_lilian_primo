
<template>
    <section>
        <h1 class="titulos">CONTATO</h1>

        <CompBanner :banner="computedBannerContato"/>
    </section>
</template>

<script>
import {mapMutations} from 'vuex'
import CompBanner from '@/components/compBanner.vue'

export default {
    name: 'PaginaContato.vue',
    data() {
        return {
            bannerContato: 'banner-teste.jpg'
        }
    },
    beforeMount(){
        this.pagina_atual = window.location.pathname
        this.mutationsPaginaAtual(this.pagina_atual)
    },
    components: {
        CompBanner
    },
    computed:{
        computedBannerContato(){
            return this.bannerContato
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
    }
    section h1{
        margin-top:76px;
        margin-bottom:47px;
    }
    @media screen and (min-width:0px) and (max-width:760px){
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
        section h1{
            font-size:70px;
            line-height:85px;
            margin-top:76px;
            margin-bottom:76px;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        section h1{
            font-size:90px;
            line-height:100px;
            margin-bottom:110px;
        }
    }
</style>