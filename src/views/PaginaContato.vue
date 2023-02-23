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
            bannerContato: 'contato.png'
        }
    },
    beforeMount(){      
        this.mutationsPaginaAtual('/contato')
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
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-top:100px;
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
            padding-top:75px;
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