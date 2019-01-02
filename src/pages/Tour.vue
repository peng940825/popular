<template>
  <div style="background-color: #171717">
    <div class="container py-5">
      <p class="text-center atc-title mb-0">AGAINST THE CURRENT</p>
      <transition-group tag="div" class="row justify-content-between mt-5" name="fade">
        <div class="col-12 col-lg-5 tour_content" 
          v-for="(item, index) in atc" :key="item.date" :style="{ 'transition-delay': index / 2 + 's' }">
          <div class="row atc-border py-5 d-flex align-items-center">
            <div id="atc_content" class="col-12 col-sm-6 p-0">
              <p class="text-center text-sm-left">{{ item.date }}</p>
              <p class="text-center text-sm-left">{{ item.site }}</p>
              <p class="text-center text-sm-left">{{ item.city }}</p>
            </div>
            <div class="col-12 col-sm-6 d-flex flex-column p-0 mt-5 mt-sm-0">
              <button class="align-self-center ml-sm-auto atc-btn">TICKETS</button>
              <button class="align-self-center ml-sm-auto atc-btn mt-3">RSVP</button>
            </div>
          </div>
        </div>
      </transition-group>
      <p class="text-center oor-title">ONE OK ROCK</p>
      <transition-group tag="div" name="insert">
        <div class="row py-4 oor-border tour_content" v-for="(item, index) in oor" 
          :key="item.date" :style="{ 'transition-delay': index / 2 + 's' }">
          <div id="oor_content" class="col-12 col-lg-8 d-lg-flex align-items-center p-0">
            <p class="text-center">{{ item.date }}</p>
            <p class="text-center ml-lg-5 oor-color">{{ item.site }}</p>
            <p class="text-center ml-auto mr-3">{{ item.city }}</p>
          </div>
          <div class="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end p-0 mt-4 mt-lg-0">
            <button class="oor-btn-1">RSVP</button>
            <button class="oor-btn-2">TICKETS</button>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        atc: [],
        atc_tour_deatil: [
          {
            date: 'MAR 22 , 2019',
            site: 'THE MASQUERADE',
            city: 'ATLANTA , GA'
          },
          {
            date: 'MAR 23 , 2019',
            site: 'THE SOCIAL',
            city: 'ORLANDO , FL'
          },
          {
            date: 'MAR 25 , 2019',
            site: "STUBB'S BBQ",
            city: 'AUSTIN , TX'
          },
          {
            date: 'MAR 26 , 2019',
            site: 'DADA DALLAS',
            city: 'DALLAS , TX'
          },
          {
            date: 'MAR 28 , 2019',
            site: 'THE REBEL LOUNGE',
            city: 'PHOENIX , AZ'
          },
          {
            date: 'MAR 29 , 2019',
            site: 'THE IRENIC',
            city: 'SAN DIEGO , CA'
          }
        ],
        oor: [],
        oor_tour_deatil: [
          {
            date: 'Feb 19 , 2019',
            site: 'The Depot',
            city: 'Salt Lake City, UT'
          },
          {
            date: 'Feb 20 , 2019',
            site: 'The Gothic',
            city: 'Denver , CO'
          },
          {
            date: 'Feb 22 , 2019',
            site: 'Varsity',
            city: 'Minneapolis , MN'
          },
          {
            date: 'Feb 24 , 2019',
            site: 'House of Blues Chicago',
            city: 'Chicago , IL'
          },
          {
            date: 'Feb 26 , 2019',
            site: "St.Andrew's Hall",
            city: 'Detroit , MI'
          },
          {
            date: 'Feb 28 , 2019',
            site: 'Rebel',
            city: 'Toronto , Canada'
          },
          {
            date: 'Mar 01 , 2019',
            site: 'Le National',
            city: 'Montreal , Canada'
          },
          {
            date: 'Mar 02 , 2019',
            site: 'Theatre of Living Arts',
            city: 'Philadelphia , PA'
          },
          {
            date: 'Mar 03 , 2019',
            site: "Paradise Rock Club",
            city: 'Boston , MA'
          },
          {
            date: 'Mar 05 , 2019',
            site: 'Terminal 5',
            city: 'New York , NY'
          }
        ]
      }
    },
    methods: {
      checkScroll() {
        const vm = this
        let contents = Array.from(document.querySelectorAll('.tour_content'))
        // console.log(window.scrollY)
        if(window.scrollY > 800) {
          vm.oor = vm.oor_tour_deatil
        } else if(window.scrollY > 20) {
          vm.atc = vm.atc_tour_deatil
        }
      }
    },
    created() {
      const vm = this
      window.addEventListener('scroll', vm.checkScroll)
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/tour.scss';
</style>
