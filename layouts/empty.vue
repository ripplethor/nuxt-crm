<template>
  <v-app>

    <v-toolbar>
      <v-toolbar-title v-text="title" />
      <v-spacer />

      <v-toolbar-items>
        <v-btn v-for="item of itemsNav" :key="itemsNav.title" flat>{{ item.title }}</v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer fixed app>
          <span>&copy; 2019</span>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
      name: "empty",
    data() {
      return {
        title: 'Nuxt-CRM',
        itemsNav: [
          {
            icon: 'apps',
            title: 'Home',
            to: '/'
          },
          {
            icon: 'bubble_chart',
            title: 'Login',
            to: '/admin/login'
          },
          {
            icon: 'bubble_chart',
            title: 'Register',
            to: '/admin/register'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
