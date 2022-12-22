<template>
  <ModalPaginaPortfolio/>
  <CompCabecalho/>
  <router-view></router-view>
  <CompRodape/>
</template>

<script>
import ModalPaginaPortfolio from './components/modalPaginaPortfolio/modalPaginaPortfolio.vue'
import CompCabecalho from '@/components/compCabecalho'
import CompRodape from '@/components/compRodape.vue'
export default{
  data() {
    return{}
  },
  components: {
    CompCabecalho,
    CompRodape,
    ModalPaginaPortfolio
  }
}
</script>

