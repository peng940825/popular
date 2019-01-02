<template>
  <div>
    <div class="text-right mt-3">
      <button class="btn btn-secondary" @click.prevent="openModal(true)">建立商品</button>
    </div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th width="300">年份</th>
          <th>歌曲名稱</th>
          <th width="150">類型</th>
          <th width="125">金額</th>
          <th width="125">是否啟用</th>
          <th width="125">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price | currency }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="delModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <Pagination :pages="pagination" @emitPages="getProducts"></Pagination>

    <!-- productsModal -->
    <div class="modal fade" id="productsModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title ml-auto">{{ modalTitle }}</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label>圖片網址</label>
                  <input type="text" class="form-control" v-model="editProduct.imageUrl">
                </div>
                <div class="form-group">
                  <label>上傳圖片</label>
                  <input type="file" class="form-control" ref="files" @change="uploadFile" style="padding-bottom: 2.25rem">
                </div>
                <img class="img-fluid" :src="editProduct.imageUrl" alt="">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label>標題</label>
                  <input type="text" class="form-control" v-model="editProduct.title">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>分類</label>
                    <input type="text" class="form-control" v-model="editProduct.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label>單位</label>
                    <input type="unit" class="form-control" v-model="editProduct.unit">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label>原價</label>
                    <input type="number" class="form-control" v-model="editProduct.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label>售價</label>
                    <input type="number" class="form-control" v-model="editProduct.price">
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" v-model="editProduct.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" v-model="editProduct.content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="editProduct.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-dark">
            <button type="button" class="btn btn-warning" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-success" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>

    <!-- delProductModal -->
    <div class="modal fade" id="delProductModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title ml-auto">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">是否確認刪除
            <strong class="text-danger">{{ editProduct.title }}</strong>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct">確認</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  import Pagination from '@/components/Pagination'

  export default {
    data() {
      return {
        products: [],
        pagination: {},
        editProduct: {},
        modalTitle: '',
        isNew: false
      }
    },
    components: {
      Pagination
    },
    methods: {
      getProducts(page = 1) {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/products?page=${page}`
        this.$http.get(api).then((res) => {
          console.log(res)
          vm.products = res.data.products
          vm.pagination = res.data.pagination
        })
      },
      openModal(isNew, item) {
        if(isNew) {
          this.isNew = true
          this.modalTitle = '建立商品'
          this.editProduct = {}
        } else {
          this.isNew = false
          this.modalTitle = '編輯商品'
          this.editProduct = Object.assign({}, item)
        }
        $('#productsModal').modal('show')
      },
      delModal(item) {
        this.editProduct = Object.assign({}, item)
        $('#delProductModal').modal('show')
      },
      updateProduct() {
        const vm = this
        let api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/admin/product`
        let httpMethod = 'post'
        if(!vm.isNew) {
          api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/admin/product/${vm.editProduct.id}`
          httpMethod = 'put'
        }
        this.$http[httpMethod](api, { data: vm.editProduct }).then((res) => {
          // console.log(res)
          if(res.data.success) {
            $('#productsModal').modal('hide')
            vm.editProduct = {}
            vm.getProducts()
          } else {
            $('#productsModal').modal('hide')
            vm.editProduct = {}
            vm.getProducts()
            // console.log('Add Fail')
          }
        })
      },
      delProduct() {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/admin/product/${vm.editProduct.id}`
        this.$http.delete(api, { data: vm.editProduct }).then((res) => {
          // console.log(res)
          if(res.data.success) {
            $('#delProductModal').modal('hide')
            vm.getProducts()
          } else {
            $('#delProductModal').modal('hide')
            vm.getProducts()
            // console.log('Delete Fail')
          }
        })
      },
      uploadFile() {
        // console.log(this)
        const vm = this
        const file = this.$refs.files.files[0]
        const formData = new FormData()
        formData.append('file-to-upload', file)
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/admin/upload`
        this.$http.post(api, formData, {
          headers: { 
            'Content-Type': 'multipart/form-data' 
          }
        }).then((res) => {
          // console.log(res)
          if(res.data.success) {
            vm.$set(vm.editProduct, 'imageUrl', res.data.imageUrl)
          } else {
            this.$bus.$emit('messsage: push', res.data.message, 'danger')
          }
        })
      }
    },
    created() {
      this.getProducts()
    }
  }
</script>
