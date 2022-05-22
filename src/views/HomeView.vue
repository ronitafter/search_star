<template>
  <search-bar-vue />
</template>
<script lang="ts">
import Vue from 'vue'
import SearchBarVue from '@/components/SearchBar.vue'
import Cards from '@/components/Cards.vue'
export default Vue.extend({
  name: 'Home',
  components: {
    /* eslint-disable */
    SearchBarVue,
    Cards 
  }
})
</script>
