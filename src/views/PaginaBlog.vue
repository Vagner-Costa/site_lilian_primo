<template>
    <section>
        <h1 class="titulos distancia">BLOG</h1>

        <CompTopicos :blog="computedBlog"/>
    </section>
</template>

<script>
import CompTopicos from '@/components/compTopicosPortifolioBlog.vue';

export default {
    name: 'PaginaBlog.vue',
    data() {
        return {
            imagem : [
                {
                    id: 'b1',
                    imagem: '',
                    descricao: 'Praesent dictum dignissim viverra. Etiam eros ipsum, venenatis sed odio ac.'
                },
                {   
                    id: 'b2',
                    imagem: '',
                    descricao: 'Aliquam ut vehicula diam. Nulla sodales condimentum risus quis sagittis.'
                },
                {
                    id: 'b3',
                    imagem: '',
                    descricao: ' Sed ornare, ligula in fringilla imperdiet, sapien ante vehicula tortor, nec sodales lorem ipsum eu magna. '
                },
                {   
                    id: 'b4',
                    imagem: '',
                    descricao: 'Curabitur pretium aliquet eleifend. Curabitur mattis elit erat, eu hendrerit nulla finibus in. '
                },
                {   
                    id: 'b5',
                    imagem: '',
                    descricao: ' Vestibulum commodo nunc molestie, fringilla nulla non, sagittis tellus. '
                },             
            ]
        }
    },
    components: {
        CompTopicos
    },
    computed: {
        computedBlog(){
            return this.imagem
        }
    }
}
</script>

<style scoped>
    section{
        padding-bottom:80px;
    }
    .distancia{
        margin:70px 0px;
    }
    @media screen and (min-width:0px) and (max-width:760px){
        section{
            padding-bottom:80px;
        }
        .distancia{
            margin:70px 0px;
        }
    }
    @media screen and (min-width:761px) and (max-width:990px){
        section{    
            padding-bottom:60px;
        }
        .distancia{
            margin:70px 0px;
        }
    }
    @media screen and (min-width:991px) and (max-width:1400px){
        section{    
            padding-bottom:80px;
        }
        .distancia{
            margin:70px 0px;
        }
    }
</style>