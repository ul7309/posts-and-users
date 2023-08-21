<template>
  <v-container>
    <h1 v-if="title" class="mb-12">{{ title }}</h1>

    <slot />
  </v-container>
</template>

<script>
export default {
  name: 'LayoutPage',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>