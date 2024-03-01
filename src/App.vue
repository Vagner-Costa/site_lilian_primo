<template>
  <CompCabecalho/>
  <router-view></router-view>
  <CompRodape/>
</template>

<script>

import CompCabecalho from '@/components/compCabecalho'
import CompRodape from '@/components/compRodape.vue'
export default{
  data() {
    return{}
  },
  components: {
    CompCabecalho,
    CompRodape,
  }
}
</script>

