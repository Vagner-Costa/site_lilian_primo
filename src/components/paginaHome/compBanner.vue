<template>
    <div class="banner">
        <img src="@/assets/banners/banner-teste.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'compBanner',
    data(){
        return{}
    }
}
</script>

<style scoped>
    .banner{
        width:1920px;
        height:930px;
    }
    .banner img{
        width:100%;
        object-fit: contain;
    }
    @media screen and (min-width:0px) and (max-width:760px){
        .banner{
            width:100%;
            height:100%;
        }
        .banner img{
            width:100%;
            object-fit: contain;
        }
    }
    @media screen and (min-width: 761px) and (max-width:990px){
        .banner{
            width:100%;
            height:100%;
        }
        .banner img{
            width:100%;
            object-fit: contain;
        }
    }
    @media screen and (min-width: 991px) and (max-width:1400px){
        .banner{
            width:100%;
            height:100%;
        }
        .banner img{
            width:100%;
            object-fit: contain;
        }
    }
</style>