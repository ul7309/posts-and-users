<template>
  <div>
    <v-simple-table v-if="hasItems">
      <template v-slot:default>
        <thead>
          <tr>
            <th
              v-for="{ id, title } in heads"
              :key="id"
              class="text-left"
            >
              {{ title }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="{ name, email } in items"
            :key="name"
          >
            <td>{{ name }}</td>
            <td>{{ email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <p v-else class="subtitle-2">
      Ничего не найдено
    </p>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    heads: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    hasItems() {
      return this.items.length;
    }
  }
}
</script>

