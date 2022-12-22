<template>
    <section v-show="gettersModalPaginaPortfolio">
        <div class="box_btn_fechar_modal">
            <button @click="mutationsModalPaginaPortfolio()">x</button>
        </div>
        <div class="container_video">

        </div>
        <div class="container_descricao">

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
        ...mapGetters(['gettersModalPaginaPortfolio'])
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
        background-color:rgba(0,0,0,0.7);
        position:fixed;
        z-index:2;
        padding:20px 40px;
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
</style>