<template>
  <div style="background-color: #171717">
    <loading :active.sync="isLoading"></loading>
    <div class="container py-5">
      <p class="text-white text-center mb-0 news-title">發燒單曲</p>
      <div class="row">
        <div class="col-12 mb-5">
          <div class="table-responsive">
            <table class="table table-borderless mt-5">
              <tbody>
                <tr v-for="(item, index) in hot_songs" :key="index">
                  <th scope="row" width="125" class="d-none d-md-table-cell py-3">
                    <img :src="item.src" alt style="max-width: 75px;">
                  </th>
                  <th scope="row" width="75" class="d-table-cell d-md-none">
                    <img :src="item.src" alt style="max-width: 50px;">
                  </th>
                  <td class="align-middle" width="90" style="min-width: 100px">{{ item.unit }}</td>
                  <td class="align-middle" style="min-width: 160px">{{ item.content }}</td>
                  <td class="d-none d-md-table-cell align-middle">{{ item.category }}</td>
                  <td class="align-middle d-none d-md-table-cell" width="60">{{ item.description }}</td>
                  <td class="align-middle" width="30">
                    <div
                      class="play-icon"
                      v-if="changeStyle === ''"
                      @click="play(item.content, true)"
                    >
                      <i class="fas fa-play ml-2"></i>
                    </div>
                    <div
                      class="play-icon"
                      v-if="changeStyle === item.content"
                      @click="stop(item.content, false)"
                    >
                      <i class="fas fa-grip-lines-vertical ml-2"></i>
                    </div>
                  </td>
                  <td class="text-right pr-0 align-middle" width="60">
                    <button class="btn btn-outline-orange rounded-0" @click="addToCart(item.id)">購買</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p class="text-white text-center news-title">最新音樂</p>
      <form>
        <div class="form-row">
          <div class="col-md-8">
            <div class="form-row">
              <div class="col">
                <a
                  href="https://www.kkbox.com/tw/tc/album/hFxkmYy6RR17R0F2cWXn009H-index.html"
                  target="_blank"
                >
                  <div class="card img-1 h450">
                    <div class="shadow"></div>
                  </div>
                </a>
              </div>
              <div class="col">
                <a
                  href="https://www.kkbox.com/tw/tc/album/PSclyXoA.7UV00F2dVfv009H-index.html"
                  target="_blank"
                >
                  <div class="card img-2 h450">
                    <div class="shadow"></div>
                  </div>
                </a>
              </div>
            </div>
            <a
              href="https://www.kkbox.com/tw/tc/album/w0rrlm0OkgLnl0F2d0mK009H-index.html"
              target="_blank"
            >
              <div class="card img-3 h300 mtGutterSm">
                <div class="shadow"></div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-4" :class="objClass">
            <a
              href="https://www.kkbox.com/tw/tc/album/0QGYakLlj2r6.0F2dlqc009H-index.html"
              target="_blank"
            >
              <div class="card img-4 h-100">
                <div class="shadow"></div>
              </div>
            </a>
          </div>
        </div>
        <div class="form-row">
          <div class="col-12 col-md-4 mtGutterSm">
            <a
              href="https://www.kkbox.com/tw/tc/album/GPk7Uh328ma8L0F2XdRF009H-index.html"
              target="_blank"
            >
              <div class="card img-5 h300">
                <div class="shadow"></div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-8 mtGutterSm">
            <a
              href="https://www.kkbox.com/tw/tc/album/libmVPR4sL6Wz0F2dzrv009H-index.html"
              target="_blank"
            >
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
        h300: false,
        mtGutterSm: false
      },
      hot_songs: [],
      hot_img: [
        "./static/jaychou/2012.png",
        "./static/taeyeon/2015.png",
        "./static/gdragon/2013.png",
        "./static/atc/2016.png",
        "./static/oneokrock/2017.png"
      ],
      changeStyle: "",
      isLoading: false,
      // +
      same_list: []
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${
        process.env.SELF_PATH
      }/products/all`;
      vm.isLoading = true;
      this.$http.get(api).then(res => {
        // console.log(res)
        res.data.products.forEach((item, index, array) => {
          if (
            index == 18 ||
            index == 20 ||
            index == 33 ||
            index == 38 ||
            index == 55
          ) {
            vm.hot_songs.push(item);
          }
        });
        for (let i = 0; i < 5; i++) {
          vm.hot_songs[i].src = vm.hot_img[i];
        }
        vm.isLoading = false;
      });
    },
    // +
    getCart(id) {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/cart`;
      vm.isLoading = true;
      this.$http.get(api).then(res => {
        // console.log(res);
        for (let i = 0; i < res.data.data.carts.length; i++) {
          vm.same_list.push(res.data.data.carts[i].product_id);
        }
        vm.isLoading = false;
      });
    },
    // +
    findSame(id) {
      const vm = this;
      vm.same_list.push(id);
      let shit = vm.same_list.filter((item, index, array) => {
        return array.indexOf(item) !== index;
      });
      let ans = shit.indexOf(id);
      return ans;
    },
    // +
    addToCart(id, qty = 1) {
      const vm = this;
      let ans = vm.findSame(id);
      // console.log(ans);
      if (ans === -1) {
        const api = `${process.env.API_PATH}/api/${process.env.SELF_PATH}/cart`;
        const cart = {
          product_id: id,
          qty
        };
        vm.isLoading = true;
        this.$http.post(api, { data: cart }).then(res => {
          // console.log(res);
          vm.isLoading = false;
          if (res.data.success) {
            this.$bus.$emit("getTotal");
          }
        });
      } else {
        alert("此歌曲已加入購物清單");
      }
    },
    checkWidth() {
      const vm = this;
      vm.w = window.innerWidth;
      // console.log(vm.w)
      if (vm.w > 769) {
        vm.objClass.h300 = false;
        vm.objClass.mtGutterSm = false;
      } else {
        vm.objClass.h300 = true;
        vm.objClass.mtGutterSm = true;
      }
    },
    play(musicName, bol) {
      const vm = this;
      vm.changeStyle = musicName;
      const a = musicName;
      const b = bol;
      this.$bus.$emit("listen", a, b);
    },
    stop(musicName, bol) {
      const vm = this;
      vm.changeStyle = "";
      const a = musicName;
      const b = bol;
      this.$bus.$emit("listen", a, b);
    },
    palyDone() {
      const vm = this;
      vm.changeStyle = "";
    }
  },
  created() {
    const vm = this;
    vm.getProducts();
    vm.$bus.$on("musicDone", vm.palyDone);
    vm.w = window.innerWidth;
    window.addEventListener("resize", vm.checkWidth);
    if (vm.w < 768) {
      vm.objClass.h300 = true;
      vm.objClass.mtGutterSm = true;
    }
    // +
    vm.getCart();
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/home_news.scss";
</style>
