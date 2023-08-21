<template>
  <v-text-field
    v-model="searchQuery"
    label="Искать посты"
    @input="onInput"
  />
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    onInput() {
      this.$emit('query', this.searchQuery);
    }
  }
}
</script>
