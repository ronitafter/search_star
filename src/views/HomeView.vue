<template>
<div>
  <search-bar-vue @input="handleSearchInput" />
  <cards/>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import SearchBarVue from '@/components/searchBar/SearchBar.vue'
import Cards from '@/components/cards/Cards.vue'
export default Vue.extend({
  name: 'Home',
  components: {
    /* eslint-disable */
    SearchBarVue,
    Cards 
  },
  methods: {
    handleSearchInput(value: string): void {
      console.log('*** search for? ', value)
    }
  }
})
</script>
