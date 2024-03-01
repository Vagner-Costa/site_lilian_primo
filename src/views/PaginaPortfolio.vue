<template>
    <section>
        <h1 class="titulos distancia">PORTIFÓLIO</h1>
       <CompTopicos :portifolio="computedVideos" />
    </section>
</template>

<script>
import CompTopicos from '../components/compTopicosPortifolioBlog.vue'

export default {
    name: 'PaginaPortfolio.vue',
    data() {
        return{
            videos : [
                {
                    id: 'p1',
                    imagem: 'img1',
                    video: '',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {   
                    id: 'p2',
                    imagem: 'img2',
                    video: '',
                    descricao: 'Fusce ornare gravida lectus, sit amet cursus nisl iaculis sed.'
                },
                {
                    id: 'p3',
                    imagem: 'img3',
                    video: '',
                    descricao: 'Curabitur non justo auctor, scelerisque ipsum sed, auctor ex.'
                },
                {
                    id: 'p4',
                    imagem: 'img4',
                    video: '',
                    descricao: 'Maecenas sollicitudin porta nunc, eget scelerisque nisi euismod vitae.'
                },
                {
                    id: 'p5',
                    imagem: 'img5',
                    video: '',
                    descricao: 'Suspendisse tempor nisl in sapien pellentesque scelerisque. '
                },
                {
                    id: 'p6',
                    imagem: 'img6',
                    video: '',
                    descricao: 'Aliquam arcu elit, euismod eget arcu id, convallis ultricies nisl. Integer '
                },
                {
                    id: 'p7',
                    imagem: 'img7',
                    video: '',
                    descricao: 'Maecenas et turpis quis erat pellentesque accumsan at malesuada est.'
                },
              
            ]
        }
    },
    components: {
        CompTopicos,
    },
    computed:{
        computedVideos(){
            return this.videos
        }
    },
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
            padding-bottom:80px;
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
