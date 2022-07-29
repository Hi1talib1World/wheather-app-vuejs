<template>
  <div>
    <sidebar-menu 
      @search-input-emit="search"
    />
    <video-bg :sources="['/src/assets/ice.mp4']" img="demo/assets/bg.jpg">
      <!-- If you want to add content here, a slot is waiting! -->
    </video-bg>
  </div>
</template>

<script>
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
