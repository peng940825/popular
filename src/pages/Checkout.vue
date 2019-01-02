<template>
  <div style="background-color: #171717">
    <div class="container py-5">
      <div class="row justify-content-center">
        <p class="text-white text-center list-title mb-5">訂單信息</p>
        <form class="col-10 col-md-12" @submit.prevent="payOrder">
          <table class="table mb-0">
            <thead>
              <th width="150">歌手</th>
              <th>歌曲</th>
              <th class="text-right" width="100">單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.unit }}</td>
                <td class="align-middle">{{ item.product.content }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
          <p class="text-white text-center list-title my-5">購買人信息</p>
          <table class="table mb-0">
            <tbody>
              <tr>
                <th width="150">購買人郵件</th>
                <td class="text-right">{{ order.user.email }}</td>
              </tr>
              <tr>
                <th width="150">購買人姓名</th>
                <td class="text-right">{{ order.user.name }}</td>
              </tr>
              <tr>
                <th width="150">購買人電話</th>
                <td class="text-right">{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th width="150">購買人地址</th>
                <td class="text-right">{{ order.user.address }}</td>
              </tr>
              <tr>
                <th width="150">付款狀態</th>
                <td class="text-right">
                  <span class="text-danger" v-if="!order.is_paid">尚未付款</span>
                  <span class="text-success" v-else>付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right mt-3" v-if="order.is_paid === false">
            <button class="btn btn-outline-success rounded-0">確認付款</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        order: {
          user: {}
        },
        orderId: ''
      }
    },
    methods: {
      getOrder() {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/order/${vm.orderId}`
        this.$http.get(api).then((res) => {
          console.log(res)
          vm.order = res.data.order
        })
      },
      payOrder() {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/pay/${vm.orderId}`
        this.$http.post(api).then((res) => {
          console.log(res)
          if (res.data.success) {
            vm.getOrder()
          }
        })
      },
    },
    created() {
      this.orderId = this.$route.params.orderId
      console.log(this.orderId)
      this.getOrder()
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/checkout.scss';
</style>
