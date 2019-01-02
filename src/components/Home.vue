<template>
  <div>
    <HomeNavbar></HomeNavbar>
    <HomeCarousel></HomeCarousel>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeNavbar from './HomeNavbar'
  import HomeCarousel from './HomeCarousel'

  export default {
    components: {
      HomeNavbar,
      HomeCarousel
    }
  }
</script>
