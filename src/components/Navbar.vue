<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-nowrap p-0 shadow">
      <span class="navbar-brand col-sm-3 col-md-2 mr-0">Dashboard</span>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="logout">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        const vm = this
        const api = `${process.env.API_PATH}/logout`
        this.$http.post(api).then((res) => {
          // console.log(res)
          if(res.data.success) {
            vm.$router.push('/music')
          }
        })
      }
    }
  }
</script>
