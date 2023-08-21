<template>
  <v-app-bar app>
    <v-btn-toggle group>
      <v-btn
        v-for="{ id, text, link } in navigations"
        :key="id"
        :to="link"
        class="rounded"
      >
        {{ text }}
      </v-btn>
    </v-btn-toggle>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navigations: [
        {
          id: 1,
          link: '/',
          text: 'Главная'
        },
        {
          id: 2,
          link: '/users',
          text: 'Пользователи'
        }
      ]
    }
  }
}
</script>