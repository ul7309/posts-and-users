<template>
  <LayoutPage title="Пользователи">

    <v-select
      v-if="users"
      v-model="defaultSelected"
      :items="sortedTypes"
      :item-text="INIT_SORTED_VALUE.NAME"
      :item-value="INIT_SORTED_VALUE.VALUE"
      label="Сортировать по:"
      @change="onChange"
    />

    <Table :items="sortedUsers" :heads="heads" />
  </LayoutPage>
</template>

<script>
import LayoutPage from '../layout/LayoutPage.vue';

import Table from '../components/Table.vue';

import { fetchUsers } from '../api';

const INIT_SORTED_VALUE = {
  NAME: 'name',
  VALUE: 'value'
}

const INIT_SORTED = [
  {
    name: "По имени",
    value: INIT_SORTED_VALUE.NAME
  },
  {
    name: "По email",
    value: INIT_SORTED_VALUE.VALUE
  }
];

export default {
  name: 'TablePage',
  components: {
    LayoutPage,
    Table
  },
  data () {
    return {
      INIT_SORTED_VALUE,
      users: [],
      heads: [
        {
          id: 1,
          title: 'Имя'
        },
        {
          id: 2,
          title: 'Email'
        }
      ],
      sortedTypes: INIT_SORTED,
      defaultSelected: INIT_SORTED[0],
      defaultFieldName: INIT_SORTED_VALUE.NAME
    }
  },
  computed: {
    sortedUsers() {
      const sorted = this.users;
      return sorted?.sort((a, b) => a[this.defaultFieldName] > b[this.defaultFieldName] ? 1 : -1) || [];
    },
  },
  methods: {
    onChange(fieldName) {
      this.defaultFieldName = fieldName;
    }
  },
  async created() {
    this.users = await fetchUsers({ _page: 1, _limit: 6 });
  }
}
</script>