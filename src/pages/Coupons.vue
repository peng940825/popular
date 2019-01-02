<template>
  <div>
    <div class="text-right">
      <button class="btn btn-secondary mt-3" @click="openCouponModal(true)">建立優惠券</button>
    </div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th width="150">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-danger">未起用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="delCouponModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- couponModal -->
    <div class="modal fade" id="couponModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title ml-auto">
              {{ modalTitle }}
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" v-model="tempCoupon.title">
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" v-model="tempCoupon.code">
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" v-model="due_date">
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input type="number" class="form-control" v-model="tempCoupon.percent">
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0">
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-dark">
            <button type="button" class="btn btn-warning" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-success" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- couponModal -->

    <!-- delCouponModal -->
    <div class="modal fade" id="delCouponModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title ml-auto">
              <span>刪除優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">是否刪除 
            <strong class="text-danger">{{ tempCoupon.title }}</strong>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delCouponModal -->

  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    props: {
      config: Object,
    },
    data() {
      return {
        coupons: {},
        tempCoupon: {
          title: '',
          is_enabled: 0,
          percent: 100,
          due_date: 0,
          code: '',
        },
        due_date: new Date(),
        isNew: false,
        modalTitle: ''
      }
    },
    watch: {
      due_date() {
        const vm = this
        const timestamp = Math.floor(new Date(vm.due_date) / 1000)
        vm.tempCoupon.due_date = timestamp
      },
    },
    methods: {
      openCouponModal(isNew, item) {
        const vm = this
        $('#couponModal').modal('show')
        vm.isNew = isNew
        if (vm.isNew) {
          vm.modalTitle = '建立優惠券'
          vm.tempCoupon = {}
        } else {
          vm.modalTitle = '編輯優惠券'
          vm.tempCoupon = Object.assign({}, item)
          const dateAndTime = new Date(vm.tempCoupon.due_date * 1000).toISOString().split('T')
          vm.due_date = dateAndTime[0]
        }
      },
      delCouponModal(item) {
        this.tempCoupon = Object.assign({}, item)
        $('#delCouponModal').modal('show')
      },
      getCoupons() {
        const vm = this
        const url = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/admin/coupons`
        this.$http.get(url, vm.tempProduct).then((res) => {
          // console.log(res)
          vm.coupons = res.data.coupons
        })
      },
      delCoupon() {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/admin/coupon/${vm.tempCoupon.id}`
        this.$http.delete(api, { data: vm.tempCoupon }).then((res) => {
          if(res.data.success) {
            $('#delCouponModal').modal('hide')
            vm.getCoupons()
          } else {
            $('#delCouponModal').modal('hide')
            vm.getCoupons()
          }
        })
      },
      updateCoupon() {
        const vm = this
        if (vm.isNew) {
          const url = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/admin/coupon`
          this.$http.post(url, { data: vm.tempCoupon }).then((res) => {
            // console.log(res, vm.tempCoupon)
            $('#couponModal').modal('hide')
            this.getCoupons()
          })
        } else {
          const url = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/admin/coupon/${vm.tempCoupon.id}`
          vm.due_date = new Date(vm.tempCoupon.due_date * 1000)
          this.$http.put(url, { data: vm.tempCoupon }).then((res) => {
            // console.log(res)
            $('#couponModal').modal('hide')
            this.getCoupons()
          })
        }
      }
    },
    created() {
      this.getCoupons()
    }
  }
</script>