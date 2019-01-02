<template>
  <div style="background-color: #171717">
    <div class="container py-5">
      <p class="text-white text-center news-title">最新音樂</p>
      <form>
        <div class="form-row">
          <div class="col-md-8">
            <div class="form-row">
              <div class="col">
                <div class="card img-1 h450">
                  <div class="shadow"></div>
                </div>
              </div>
              <div class="col">
                <div class="card img-2 h450">
                  <div class="shadow"></div>
                </div>
              </div>
            </div>
            <div class="card img-3 h300 mtGutterSm">
              <div class="shadow"></div>
            </div>
          </div>
          <div class="col-12 col-md-4" :class="objClass">
            <div class="card img-4 h-100">
              <div class="shadow"></div>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-12 col-md-4 mtGutterSm">
            <div class="card img-5 h300">
              <div class="shadow"></div>
            </div>
          </div>
          <div class="col-12 col-md-8 mtGutterSm">
            <div class="card img-6 h300">
              <div class="shadow"></div>
            </div>
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
