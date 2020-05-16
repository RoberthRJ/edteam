<template>
  <div id="app">
    <header-component></header-component>
    <sidebar-component></sidebar-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import HeaderComponent from './components/shared/Header.vue'
  import FooterComponent from './components/shared/Footer.vue'
  import SidebarComponent from './components/shared/Sidebar.vue'

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent,
      SidebarComponent
    }
  };
</script>
