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

        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="open(props.item.id)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="remove(props.item.id)"
          >
            delete
          </v-icon>
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
					prop: "title",
					value: 'title'
        },
        { text: "Date", prop: "date",
					value: 'date' },
        { text: "Views", prop: "views",
					value: 'views' },
        { text: "Comments", prop: "comments",
					value: 'comments' },
        { sortable: false, text: "Actions",
					value: 'actions' },
      ]
    };
	},
	methods: {
		open(id){
			this.$router.push(`/admin/post/${id}`)
		},
		async remove (id) {
			try{
				const index = await this.posts.filter(p => p.id !== id)
				confirm(`Are you sure you want to delete this id: ${id}?`) && this.posts.splice(index, 1)
				await this.$store.dispatch('post/remove', id)
			} catch (e){
				
			}
		}
	}
};
</script>
