<template>
  <div>
    <v-card
      v-for="{ id, title, body } in items"
      :key="id"
      :title="title"
      :text="body"
      class="ma-2 pa-2"
      color="#a1ecf5"
      max-width="370"
    >
      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ body }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
