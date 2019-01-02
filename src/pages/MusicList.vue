<template>
  <div style="background-color: #171717">
    <loading :active.sync="isLoading"></loading>
    <div class="container pt-5">
      <p class="text-white text-center page-title mb-0">單曲列表</p>
      <input class="form-control mx-auto w-50 mt-4" type="text" placeholder="搜尋歌曲" v-model="search" style="margin-top: 10px;">
      <div class="row">
        <div class="col mb-5">
          <table class="table table-borderless mt-5">
            <thead>
              <tr>
                <th scope="col" width="30"></th>
                <th scope="col" width="60" style="min-width: 75px">歌手</th>
                <th scope="col" style="min-width: 175px">歌曲</th>
                <th scope="col" width="90" class="d-none d-md-block">類型</th>
                <th scope="col" width="60">長度</th>
                <th scope="col" width="30"></th>
                <th scope="col" width="60"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filter_songs" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.unit }}</td>
                <td>{{ item.content }}</td>
                <td class="d-none d-md-block">{{ item.category }}</td>
                <td>{{ item.description }}</td>
                <td>
                  <div class="play-icon" v-if="changeStyle === ''" @click="play(item.content, true)">
                    <i class="fas fa-play ml-2"></i>
                  </div>
                  <div class="play-icon" v-if="changeStyle === item.content" @click="stop(item.content, false)">
                    <i class="fas fa-grip-lines-vertical ml-2"></i>
                  </div>
                </td>
                <td class="text-right pr-0">
                  <button class="btn btn-outline-orange rounded-0" @click="addToCart(item.id)">購買</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        total_songs: [],
        search: '',
        changeStyle: '',
        isLoading: false
      }
    },
    methods: {
      getProducts() {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/products/all`
        vm.isLoading = true
        this.$http.get(api).then((res) => {
          // console.log(res)
          vm.isLoading = false
          vm.total_songs = res.data.products
        })
      },
      addToCart(id, qty = 1) {
        const vm = this
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/cart`
        const cart = {
          product_id: id,
          qty
        }
        vm.isLoading = true
        this.$http.post(api, { data: cart }).then((res) => {
          vm.isLoading = false
          if(res.data.success) {
            this.$bus.$emit('getTotal')
          }
        })
      },
      play(musicName, bol) {
        const vm = this
        vm.changeStyle = musicName
        const a = musicName
        const b = bol
        this.$bus.$emit('listen', a, b)
      },
      stop(musicName, bol) {
        const vm = this
        vm.changeStyle = ''
        const a = musicName
        const b = bol
        this.$bus.$emit('listen', a, b)
      },
      palyDone() {
        const vm = this
        vm.changeStyle = ''
      }
    },
    computed: {
      filter_songs() {
        const vm = this
        if(vm.search === '') {
          return vm.total_songs
        } else {
          return vm.total_songs.filter(item => {
            let content = item.content.toLowerCase()
            let keyword = vm.search.toLowerCase()
            return content.indexOf(keyword) !== -1
          })
        }
      }
    },
    created() {
      const vm = this
      this.getProducts()
      vm.$bus.$on('musicDone', vm.palyDone)
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/music_list.scss';
</style>
