import Vue from 'vue'
import VueTypes from 'vue-types'

export default Vue.extend({
  name: 'search',
  data: () => {
    return {
      internalValue: ''
    }
  },
  props: {
    value: VueTypes.string.def(''),
    type: VueTypes.string.def('text')
  },
  created () {
    this.internalValue = this.value
  },
  methods: {
    updateValue (value: string) {
      this.$emit('input', value)
      this.$emit('update:value', value)
    }
  }
})
