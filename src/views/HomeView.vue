<template>
  <search-bar-vue />
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBarVue from '@/components/SearchBar.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    SearchBarVue
  }
})
</script>
