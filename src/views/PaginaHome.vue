<template>
  <section>
    <CompBanner :banner="computedBannerHome"/>
    <CompSectionAzul/>
    <CompSectionBranca v-if="computedConteudoSlider.length > 0" :conteudo_slider="computedConteudoSlider"/>
  </section>
</template>

<script>
import CompBanner from '@/components/compBanner.vue'
import CompSectionAzul from '@/components/paginaHome/compSectionAzul.vue'
import CompSectionBranca from '@/components/paginaHome/compSectionBranca.vue'

export default {
  name: 'PaginaHome',
  data(){
    return{
      bannerHome: 'banner-teste.jpg',
      conteudo_slider: [
        {
          id: '001',
          foto: '',
          descricao: 'texto de exemploO processo de Personal Branding foi essencial para a minha trajetória política. Além de entender como as pessoas te enxergam, as metodologias utilizadas conseguem identificar nossas potencialidades e a partir dai conseguir um resultado mais eficiente. texto de exemplo',
          titulo: 'NOME E SOBRENOME',
          subtitulo: 'PROFISSÂO'
        },
        {
          id: '002',
          foto: '',
          descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum ex quis felis mattis, at mattis libero maximus. Nullam sem mauris, efficitur tristique nisl maximus, feugiat pulvinar ante. Nunc accumsan, nisl a cursus maximus, velit sem malesuada mi, at mattis lacus lorem non urna. Nunc commodo imperdiet ante, sed auctor sapien consequat at.',
          titulo: 'teste 2',
          subtitulo: 'PROFISSÂO'
        },
        {
          id: '003',
          foto: '',
          descricao: 'Quisque a libero libero. Maecenas congue dolor orci, vel consequat lorem aliquam lobortis. Mauris fermentum aliquet feugiat. Quisque rhoncus lectus elit, eget mattis risus porttitor vitae. Etiam placerat eget dui faucibus congue. Maecenas accumsan orci nec nibh vestibulum, sed tempor lectus viverra.',
          titulo: 'teste 3',
          subtitulo: 'PROFISSÂO'
        },
        {
          id: '004',
          foto: '',
          descricao: 'Quisque a libero libero. Maecenas congue dolor orci, vel consequat lorem aliquam lobortis. Mauris fermentum aliquet feugiat. Quisque rhoncus lectus elit, eget mattis risus porttitor vitae. Etiam placerat eget dui faucibus congue. Maecenas accumsan orci nec nibh vestibulum, sed tempor lectus viverra.',
          titulo: 'teste 4',
          subtitulo: 'PROFISSÂO'
        },
        {
          id: '005',
          foto: '',
          descricao: 'Quisque a libero libero. Maecenas congue dolor orci, vel consequat lorem aliquam lobortis. Mauris fermentum aliquet feugiat. Quisque rhoncus lectus elit, eget mattis risus porttitor vitae. Etiam placerat eget dui faucibus congue. Maecenas accumsan orci nec nibh vestibulum, sed tempor lectus viverra.',
          titulo: 'teste 5',
          subtitulo: 'PROFISSÂO'
        },
      ],
    }
  },
  computed: {
    computedBannerHome(){
      return this.bannerHome
    },
    computedConteudoSlider(){
      return this.conteudo_slider
    }
  },
  components: {
    CompBanner,
    CompSectionAzul,
    CompSectionBranca
  }
}
</script>

<style scoped>
  section{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
  }
  
</style>
