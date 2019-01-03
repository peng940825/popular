<template>
  <div class="fixed-top" style="background-color: #171717">
    <div class="container">
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-dark navbar-expand-lg px-0">
            <router-link class="home-logo mr-5" to="/">
              POPULAR
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <span id="navbarDropdown" class="nav-link dropdown-toggle mr-4 space" data-toggle="dropdown" style="cursor: pointer">
                    音樂
                  </span>
                  <div class="dropdown-menu rounded-0" style="background-color: #171717">
                    <router-link class="dropdown-item mt-2 space" to="/music">
                      單曲列表
                    </router-link>
                    <router-link class="dropdown-item mt-3 space" to="/music/taeyeon">
                      TAE YEON
                    </router-link>
                    <router-link class="dropdown-item mt-3 space" to="/music/jaychou">
                      JAY CHOU
                    </router-link>
                    <router-link class="dropdown-item mt-3 space" to="/music/gdragon">
                      G-DRAGON
                    </router-link>
                    <router-link class="dropdown-item mt-3 space" to="/music/oneokrock">
                      ONE OK ROCK
                    </router-link>
                    <router-link class="dropdown-item mt-3 mb-2 space" to="/music/atc">
                      AGAINST THE CURRENT
                    </router-link>
                  </div>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link mr-4 space" to="/tour">
                    巡迴
                  </router-link>
                </li>
                <li class="nav-item link-cart">
                  <router-link class="nav-link" to="/music/shoppingcart">
                    <i class="fas fa-shopping-cart" style="font-size: 20px"></i>
                  </router-link>
                  <span class="badge num-badge" style="background-color: #D2691E">
                    <Num></Num>
                    <Audio></Audio>
                  </span>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0" style="position: relative;">
                <button class="btn btn-outline-orange rounded-0" @click.prevent="login">
                  登入
                </button>
                <span class="badge badge-info prompt">限管理員</span>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Num from '@/components/Num'
  import Audio from '@/components/Audio'

  export default {
    data() {
      return {
        num: 0
      }
    },
    components: {
      Num,
      Audio
    },
    methods: {
      login() {
        const vm = this
        vm.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/home_navbar.scss';
</style>
