<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li v-for="menu in menuobj.menulist">
      <router-link :to="/plp/+menu.href">{{ menu.Title }}</router-link>
    </li>
  </ul>
</template>

<script>
  require ('../header/navigation');
  export default {
    data () {
      return {
        menuobj: []
      }
    },
    mounted() {
      this.menuobj = this.$store.state.data.menu;
    }
  }; 
</script>