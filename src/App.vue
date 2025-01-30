<template>
  <div>
    <sidebar-menu 
      @search-input-emit="search"
      
    >
    <router-view />
    </sidebar-menu>
  <Home></Home>
  </div>
</template>

<script>
import Home from "@/components/Home.vue"
import SidebarMenu from "@/components/Sidebar-menu.vue"



export default {
  data() {
    return {
      cartValue: 0
    }
  },
  name: 'App',
  components: {
    SidebarMenu,
    Home,
    
  }
 
  
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
