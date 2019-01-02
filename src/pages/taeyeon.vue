<template>
  <div style="background-color: #171717">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="row">
        <div class="col-4 col-md-4 col-lg-2 album-style" v-for="(item, index) in data" :key="index" 
          @click="chechAlbum(item.year)">
          <img class="card-img-top mt-5" :src="item.src" alt="">
          <p class="mt-1 mb-0 text-white">{{ item.title }}</p>
          <p class="text-muted m-0">{{ item.year }}年</p>
        </div>
      </div>
      <div class="row">
        <div class="col mb-5">
          <div class="table-responsive">
            <table class="table table-borderless mt-5" v-if="check">
              <thead>
                <tr>
                  <th scope="col" width="30"></th>
                  <th scope="col" style="min-width: 175px">歌曲</th>
                  <th scope="col" width="90" class="d-none d-sm-block">類型</th>
                  <th scope="col" width="60">長度</th>
                  <th scope="col" width="30"></th>
                  <th scope="col" width="60"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in taeyeon_songs" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.content }}</td>
                  <td class="d-none d-sm-block">{{ item.category }}</td>
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
            <table class="table table-borderless mt-5" v-else>
              <thead>
                <tr>
                  <th scope="col" width="30"></th>
                  <th scope="col" style="min-width: 175px">歌曲</th>
                  <th scope="col" width="90" class="d-none d-sm-block">類型</th>
                  <th scope="col" width="60">長度</th>
                  <th scope="col" width="30"></th>
                  <th scope="col" width="60"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in single_album" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.content }}</td>
                  <td class="d-none d-sm-block">{{ item.category }}</td>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            title: 'I - The 1st Mini Album - EP',
            year: '2015',
            src: './static/taeyeon/2015.png'
          },
          {
            title: 'Why - The 2st Mini Album - EP',
            year: '2016',
            src: './static/taeyeon/2016.png'
          },
          {
            title: 'Stay - Single',
            year: '2018',
            src: './static/taeyeon/2018.png'
          }
        ],
        taeyeon_songs: [],
        single_album: [],
        check: true,
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
          res.data.products.forEach((item, index) => {
            if(item.unit === '太妍') {
              vm.taeyeon_songs.push(item)
            }
          })
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
      chechAlbum(y) {
        const vm = this
        vm.check = false
        vm.single_album = []
        vm.taeyeon_songs.forEach((item, index) => {
          if(item.title === y) {
            vm.single_album.push(item)
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
