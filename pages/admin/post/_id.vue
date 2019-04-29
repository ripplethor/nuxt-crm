<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
		<h1>Post {{post.title}}</h1>
	</div>
</template>
<script>
export default {
  middleware: ["admin-auth"],
	layout: "admin",
	async asyncData({store, params}){
		const post = await store.dispatch('post/fetchAdminById', params.id)
		return {post}
	},
	data: () => ({
      breadcrumbs: [
        {
          text: 'Admin',
          disabled: false,
          to: ''
        },
        {
          text: 'Posts',
          disabled: false,
          to: '/admin/list'
        },
        {
          text: 'Edit Post',
          disabled: true
        }
      ],
		})
		
}
</script>
