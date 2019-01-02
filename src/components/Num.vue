<template>
  <div>
    <span class="text-white">{{ amount }}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        amount: 0
      }
    },
    methods: {
      getCartAmount() {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/cart`
        this.$http.get(api).then((res) => {
          // console.log(res)
          vm.amount = res.data.data.carts.length
        })
      }
    },
    created() {
      const vm = this
      vm.getCartAmount()
      vm.$bus.$on('getTotal', vm.getCartAmount)
    }
  }
</script>
