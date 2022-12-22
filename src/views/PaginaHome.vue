<template>
  <CompBanner/>
  <CompSectionAzul/>
  <CompSectionBranca />
</template>

<script>
import CompBanner from '@/components/paginaHome/compBanner.vue'
import CompSectionAzul from '@/components/paginaHome/compSectionAzul.vue'
import CompSectionBranca from '@/components/paginaHome/compSectionBranca.vue'

export default {
  name: 'PaginaHome',
  data(){
    return{}
  },
  
  components: {
    CompBanner,
    CompSectionAzul,
    CompSectionBranca
  }
}
</script>

<style scoped>
  
</style>
