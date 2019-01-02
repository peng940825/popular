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
        <div class="col-12 mb-5">
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
              <tr v-for="(item, index) in jay_songs" :key="index">
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
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            title: '我很忙',
            year: '2007',
            src: './static/jaychou/2007.png'
          },
          {
            title: '魔杰座',
            year: '2008',
            src: './static/jaychou/2008.png'
          },
          {
            title: '驚嘆號',
            year: '2011',
            src: './static/jaychou/2011.png'
          },
          {
            title: '十二星座',
            year: '2014',
            src: './static/jaychou/2012.png'
          },
          {
            title: '唉呦，不錯哦',
            year: '2016',
            src: './static/jaychou/2014.png'
          }
        ],
        jay_songs: [],
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
            if(item.unit === '周杰倫') {
              vm.jay_songs.push(item)
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
        vm.jay_songs.forEach((item, index) => {
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
