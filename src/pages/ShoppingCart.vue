<template>
  <div style="background-color: #171717">
    <loading :active.sync="isLoading"></loading>
    <div class="container pt-5">
      <p class="text-white text-center page-title mb-0">選購歌曲</p>
      <div class="row">
        <div class="col mb-5">
          <table class="table table-borderless mt-5">
            <thead>
              <tr>
                <th width="75" scope="col">歌手</th>
                <th scope="col">歌曲</th>
                <th class="text-right" width="75" scope="col">單價</th>
                <th width="60"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart.carts" :key="index">
                <td>{{ item.product.unit }}</td>
                <td>{{ item.product.content }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td class="text-right">{{ item.product.price }}</td>
                <td class="text-right pr-0">
                  <button class="btn btn-outline-orange rounded-0" @click="delCartItem(item.id)">刪除</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ cart.total }}</td>
                <td></td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="2" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total }}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group input-group-sm mt-4">
            <input type="text" class="form-control ml-auto" v-model="coupon_code" 
              placeholder="請輸入優惠碼" style="max-width: 150px">
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="button" @click="addCouponCode">
                使用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- customer form -->
      <div class="py-5 row justify-content-center" v-if="cart.total > 0">
        <form class="col-md-6" @submit.prevent="createOrder">
          <div class="form-group">
            <label class="text-white" for="useremail">收件人信箱</label>
            <input type="email" class="form-control" name="email" id="useremail"
              :class="{ 'is-invalid': errors.has('email') }"
              v-model="form.user.email" v-validate="'required|email'" placeholder="請輸入信箱">
            <span class="text-danger" v-if="errors.has('email')">
              {{ errors.first('email') }}
            </span>
          </div>
          <div class="form-group">
            <label class="text-white" for="username">收件人姓名</label>
            <input type="text" class="form-control" name="name" id="username"
              :class="{ 'is-invalid': errors.has('name') }"
              v-model="form.user.name" v-validate="'required'" placeholder="請輸入姓名">
            <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
          </div>
          <div class="form-group">
            <label class="text-white" for="usertel">收件人電話</label>
            <input type="tel" class="form-control" name="tel" id="usertel"
              :class="{ 'is-invalid': errors.has('tel') }"
              v-model="form.user.tel" v-validate="'required'" placeholder="請輸入電話">
            <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
          </div>
          <div class="form-group">
            <label class="text-white" for="useraddress">收件人地址</label>
            <input type="address" class="form-control" name="address" id="useraddress"
              :class="{ 'is-invalid': errors.has('address') }"
              v-model="form.user.address" v-validate="'required'" placeholder="請輸入地址">
            <span class="text-danger" v-if="errors.has('address')">地址必須輸入</span>
          </div>
          <div class="form-group">
            <label class="text-white" for="useraddress">留言</label>
            <textarea name="" id="" class="form-control" cols="30" rows="10" 
              v-model="form.message"></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-success rounded-0">送出訂單</button>
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
        cart: [],
        coupon_code: '',
        form: {
          user: {
            name: '',
            email: '',
            tel: '',
            address: ''
          },
          message: ''
        },
        isLoading: false
      }
    },
    methods: {
      getCart() {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/cart`
        vm.isLoading = true
        this.$http.get(api).then((res) => {
          vm.isLoading = false
          // console.log(res)
          vm.cart = res.data.data
        })
      },
      delCartItem(id) {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/cart/${id}`
        vm.isLoading = true
        this.$http.delete(api).then((res) => {
          // console.log(res)
          vm.isLoading = false
          this.$bus.$emit('getTotal')
          vm.getCart()
        })
      },
      addCouponCode() {
        const vm = this
        const coupon = {
          code: vm.coupon_code
        }
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/coupon`
        vm.isLoading = true
        this.$http.post(api, { data: coupon }).then((res) => {
          // console.log(res)
          vm.isLoading = false
          if(!res.data.success) {
            alert(res.data.message)
          }
          vm.getCart()
        })
      },
      createOrder() {
        const vm = this
        const order = vm.form
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/order`
        vm.isLoading = true
        this.$validator.validate().then((result) => {
          if(result) {
            this.$http.post(api, { data: order }).then((res) => {
              console.log(res, '訂單已建立')
              if(res.data.success) {
                this.$bus.$emit('getTotal')
                vm.$router.push(`checkout/${res.data.orderId}`)
              }
              vm.isLoading = false
            })
          } else {
            console.log('欄位不完整')
            vm.isLoading = false
          } 
        })
      },
      getOrders() {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/orders?page=1`
        this.$http.get(api).then((res) => {
          console.log(res)
        })
      }
    },
    created() {
      this.getCart()
      this.getOrders()
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/music_list.scss';
</style>
