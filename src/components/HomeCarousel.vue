<template>
  <div>
    <div class="carousel">
      <div class="carousel_area">
        <div class="carousels" :style="computed_left">
          <div class="carousel_box" v-for="(item, index) in carousel_data" 
            :class="{ cur_item: index === now_index }" :key="index" @click="to(item.path)">
            <div class="carousel_img" :style="bg_img(item.img_url)">
              <div class="text_content" v-if="checkContent">
                <h1>{{ item.title }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="control_area">
        <div class="controls" v-for="(item, index) in 5" :key="item" 
          @click="des_index(index)" :class="{ now_item: index === now_index }">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let carousel_data = [
    {
      title: 'ONE OK ROCK',
      img_url: './static/carousel_img/img1.jpg',
      path: 'oneokrock'
    },
    {
      title: 'ATC',
      img_url: './static/carousel_img/img2.jpg',
      path: 'atc'
    },
    {
      title: 'G-DRAGON',
      img_url: './static/carousel_img/img3.png',
      path: 'gdragon'
    },
    {
      title: 'JAY CHOU',
      img_url: './static/carousel_img/img4.jpg',
      path: 'jaychou'
    },
    {
      title: 'TAE YEON',
      img_url: './static/carousel_img/img5.jpg',
      path: 'taeyeon'
    }
  ]

  export default {
    data() {
      return {
        carousel_data: carousel_data,
        now_index: 0,
        span: 1380,
        w: Number,
        checkContent: true
      }
    },
    computed: {
      computed_left() {
        var result = { 'left': ( -this.now_index * this.span ) + 'px' }
        return result
      }
    },
    methods: {
      change_index(num) {
        this.now_index = ( this.now_index + num + this.carousel_data.length ) % this.carousel_data.length
      },
      bg_img(url) {
        return { 'backgroundImage': `url('${url}')` }
      },
      des_index(i) {
        this.now_index = i
      },
      to(path) {
        const vm = this
        vm.$router.push(`/music/${path}`)
      },
      checkWidth() {
        const vm = this
        vm.w = window.innerWidth
        if(vm.w > 1200) {
          vm.checkContent = true
          vm.span = 1380
        } else if(vm.w >= 992 && vm.w <= 1200) {
          vm.checkContent = false
          vm.span = 900
        } else if(vm.w >= 768 && vm.w <= 992) {
          vm.checkContent = false
          vm.span = 692
        } else if(vm.w < 768) {
          vm.checkContent = false
          vm.span = 468
        }
      }
    },
    created() {
      const vm = this
      vm.w = window.innerWidth
      window.addEventListener('resize', vm.checkWidth)
      if(vm.w > 1200) {
        vm.checkContent = true
      } else {
        vm.checkContent = false
      }
      const body = document.body
      body.addEventListener('keydown',function(e) {
        if(e.keyCode === 37) {
          vm.change_index(-1)
        } else if(e.keyCode === 39) {
          vm.change_index(1)
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/home_carousel.scss';
</style>
