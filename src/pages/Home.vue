<template>
  <LayoutPage title="Посты">
    <template v-if="posts">
      <SearchForm @query="getSearchQuery" />

      <Card
        :items="filteredPosts"
        class="d-flex flex-wrap justify-center"
      />
    </template>
    <p v-else class="subtitle-2">
      Ничего не найдено
    </p>
  </LayoutPage>
</template>

<script>
import LayoutPage from '../layout/LayoutPage.vue';

import Card from '../components/Card.vue';
import SearchForm from '../components/SearchForm.vue';

import { fetchPosts } from '../api';

export default {
  name: 'Home',
  components: {
    LayoutPage,
    Card,
    SearchForm
  },
  data() {
    return {
      searchQuery: '',
      posts: []
    }
  },
  computed: {
    filteredPosts() {
      return this.posts?.filter(({ title }) => title.includes(this.searchQuery)) || [];
    }
  },
  methods: {
    getSearchQuery(query) {
      this.searchQuery = query;
    }
  },
  async created() {
    this.posts = await fetchPosts({ _page: 1, _limit: 6 });
  }
}
</script>
