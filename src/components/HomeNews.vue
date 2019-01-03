<template>
  <div style="background-color: #171717">
    <div class="container py-5">
      <p class="text-white text-center news-title">最新音樂</p>
      <form>
        <div class="form-row">
          <div class="col-md-8">
            <div class="form-row">
              <div class="col">
                <a href="https://www.kkbox.com/tw/tc/album/hFxkmYy6RR17R0F2cWXn009H-index.html" target="_blank">
                  <div class="card img-1 h450">
                    <div class="shadow"></div>
                  </div>
                </a>
              </div>
              <div class="col">
                <a href="https://www.kkbox.com/tw/tc/album/PSclyXoA.7UV00F2dVfv009H-index.html" target="_blank">
                  <div class="card img-2 h450">
                    <div class="shadow"></div>
                  </div>
                </a>
              </div>
            </div>
            <a href="https://www.kkbox.com/tw/tc/album/w0rrlm0OkgLnl0F2d0mK009H-index.html" target="_blank">
              <div class="card img-3 h300 mtGutterSm">
                <div class="shadow"></div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-4" :class="objClass">
            <a href="https://www.kkbox.com/tw/tc/album/0QGYakLlj2r6.0F2dlqc009H-index.html" target="_blank">
              <div class="card img-4 h-100">
                <div class="shadow"></div>
              </div>
            </a>
          </div>
        </div>
        <div class="form-row">
          <div class="col-12 col-md-4 mtGutterSm">
            <a href="https://www.kkbox.com/tw/tc/album/GPk7Uh328ma8L0F2XdRF009H-index.html" target="_blank">
              <div class="card img-5 h300">
                <div class="shadow"></div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-8 mtGutterSm">
            <a href="https://www.kkbox.com/tw/tc/album/libmVPR4sL6Wz0F2dzrv009H-index.html" target="_blank">
              <div class="card img-6 h300">
                <div class="shadow"></div>
              </div>
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        w: Number,
        objClass: {
          'h300': false,
          'mtGutterSm': false,
        }
      }
    },
    methods: {
      checkWidth() {
        const vm = this
        vm.w = window.innerWidth
        // console.log(vm.w)
        if(vm.w > 769) {
          vm.objClass.h300 = false
          vm.objClass.mtGutterSm = false
        } else {
          vm.objClass.h300 = true
          vm.objClass.mtGutterSm = true
        }
      }
    },
    created() {
      const vm = this
      vm.w = window.innerWidth
      window.addEventListener('resize', vm.checkWidth)
      if(vm.w < 768) {
        vm.objClass.h300 = true
        vm.objClass.mtGutterSm = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/home_news.scss';
</style>
