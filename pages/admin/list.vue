<template>
  <v-card>
    <v-card-title>
      Posts
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="posts" :search="search">
      <template v-slot:items="props">
        <td>{{ props.item.title }}</td>

        <td>{{ new Date(props.item.date).toLocaleString('de-DE', dateDetail) }}</td>
        <td>{{ props.item.views }}</td>
        <td>{{ props.item.comments.length }}</td>
        <td>
          <v-btn color="primary" fab small dark>
            <v-icon>edit</v-icon>
          </v-btn>
        </td>
        <td>
          <v-btn color="error" fab small dark>
            <v-icon>delete</v-icon>
          </v-btn>
        </td>
      </template>
      console.log(posts)
      <template v-slot:no-results>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  middleware: ["admin-auth"],
  layout: "admin",
  async asyncData({ store }) {
    const posts = await store.dispatch("post/fetchAdmin");
    return { posts };
  },
  data() {
    return {
      dateDetail: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      },
      search: "",
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          prop: "title"
        },
        { text: "Date", prop: "date" },
        { text: "Views", prop: "views" },
        { text: "Comments", prop: "comments" },
        { sortable: false, text: "Edit" },
        { sortable: false, text: "Delete" }
      ]
    };
  }
};
</script>
