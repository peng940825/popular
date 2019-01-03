<template>
  <div class="loginArea">
    <form class="form-signin"
      @submit.prevent="signin">
      <h1 class="h1 mb-3 text-center">Welcome</h1>
      <label for="inputEmail">Email address</label>
      <input type="email" id="inputEmail" class="form-control mb-2" placeholder="Email address" required autofocus 
        v-model="user.username">
      <label for="inputPassword">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required 
        v-model="user.password">
      <button class="btn btn-lg btn-dark btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      signin() {
        const vm = this
        const api = `${process.env.API_PATH}/admin/signin`
        this.$http.post(api, vm.user).then((res) => {
          console.log(res)
          if(res.data.success) {
            vm.$router.push('/admin/products')
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '@/styles/login.scss';
</style>
