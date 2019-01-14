<template>
  <div>
    <Audio></Audio>
    <HomeNavbar></HomeNavbar>
    <HomeCarousel></HomeCarousel>
    <router-view></router-view>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
  import HomeNavbar from './HomeNavbar'
  import HomeCarousel from './HomeCarousel'
  import HomeFooter from './HomeFooter'

  export default {
    components: {
      HomeNavbar,
      HomeCarousel,
      HomeFooter
    }
  }
</script>
