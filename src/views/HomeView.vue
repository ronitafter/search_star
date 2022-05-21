<template>
  <search-bar-vue />
</template>
<script lang="ts">
import Vue from 'vue'
import SearchBarVue from '@/components/SearchBar.vue'
import CardVue from '@/components/Card.vue'
export default Vue.extend({
  name: 'Home',
  components: {
    SearchBarVue,
    /* eslint-disable */
    CardVue
  }
})
</script>
