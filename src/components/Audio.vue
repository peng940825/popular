<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!-- jay -->
    <audio data-key="牛仔很忙" src="./static/music/jay_2007_01.m4a"></audio>
    <audio data-key="彩虹" src="./static/music/jay_2007_02.m4a"></audio>
    <audio data-key="青花瓷" src="./static/music/jay_2007_03.m4a"></audio>
    <audio data-key="陽光宅男" src="./static/music/jay_2007_04.m4a"></audio>
    <audio data-key="龍戰騎士" src="./static/music/jay_2008_01.m4a"></audio>
    <audio data-key="花海" src="./static/music/jay_2008_02.m4a"></audio>
    <audio data-key="說好的幸福呢" src="./static/music/jay_2008_03.m4a"></audio>
    <audio data-key="稻香" src="./static/music/jay_2008_04.m4a"></audio>
    <audio data-key="驚嘆號" src="./static/music/jay_2011_01.m4a"></audio>
    <audio data-key="Mine Mine" src="./static/music/jay_2011_02.m4a"></audio>
    <audio data-key="公主病" src="./static/music/jay_2011_03.m4a"></audio>
    <audio data-key="你好嗎" src="./static/music/jay_2011_04.m4a"></audio>
    <audio data-key="算什麼男人" src="./static/music/jay_2014_01.m4a"></audio>
    <audio data-key="天涯過客" src="./static/music/jay_2014_02.m4a"></audio>
    <audio data-key="怎麼了 ft. 袁詠琳" src="./static/music/jay_2014_03.m4a"></audio>
    <audio data-key="手寫的從前" src="./static/music/jay_2014_04.m4a"></audio>
    <audio data-key="聽見下雨的聲音" src="./static/music/jay_2014_05.m4a"></audio>
    <audio data-key="一點點" src="./static/music/jay_2016_01.m4a"></audio>
    <audio data-key="告白氣球" src="./static/music/jay_2016_02.m4a" preload="auto"></audio>
    <audio data-key="愛情廢柴" src="./static/music/jay_2016_03.m4a"></audio>
    <!-- taeyeon -->
    <audio data-key="I ft. Verbal Jint" src="./static/music/taeyeon_2015_01.m4a" preload="auto"></audio>
    <audio data-key="Gemini" src="./static/music/taeyeon_2015_02.m4a"></audio>
    <audio data-key="Stress" src="./static/music/taeyeon_2015_03.m4a"></audio>
    <audio data-key="Starlight ft. Dean" src="./static/music/taeyeon_2016_01.m4a"></audio>
    <audio data-key="Why" src="./static/music/taeyeon_2016_02.m4a"></audio>
    <audio data-key="Night" src="./static/music/taeyeon_2016_03.m4a"></audio>
    <audio data-key="Stay" src="./static/music/taeyeon_2018_01.m4a"></audio>
    <audio data-key="I'm The Greatest" src="./static/music/taeyeon_2018_02.m4a"></audio>
    <!-- gd -->
    <audio data-key="A Boy" src="./static/music/gd_2009_01.m4a"></audio>
    <audio data-key="Heartbreaker" src="./static/music/gd_2009_02.m4a"></audio>
    <audio data-key="Gossip Man" src="./static/music/gd_2009_03.m4a"></audio>
    <audio data-key="She's Gone ft. Kush" src="./static/music/gd_2009_04.m4a"></audio>
    <audio data-key="WHO YOU?" src="./static/music/gd_2013_01.m4a"></audio>
    <audio data-key="CROOKED" src="./static/music/gd_2013_02.m4a" preload="auto"></audio>
    <audio data-key="R.O.D ft. LYDIA PAEK" src="./static/music/gd_2013_03.m4a"></audio>
    <!-- atc -->
    <audio data-key="In Our Bones" src="./static/music/atc_2016_01.m4a"></audio>
    <audio data-key="Runaway" src="./static/music/atc_2016_02.m4a"></audio>
    <audio data-key="Wasteland" src="./static/music/atc_2016_03.m4a"></audio>
    <audio data-key="Young & Relentless" src="./static/music/atc_2016_04.m4a" preload="auto"></audio>
    <audio data-key="Strangers Again" src="./static/music/atc_2018_01.m4a"></audio>
    <audio data-key="I like the Way" src="./static/music/atc_2018_02.m4a"></audio>
    <audio data-key="Vioces" src="./static/music/atc_2018_03.m4a"></audio>
    <audio data-key="Almost Forgot" src="./static/music/atc_2018_04.m4a"></audio>
    <audio data-key="The Fuess" src="./static/music/atc_2018_05.m4a"></audio>
    <!-- oor -->
    <audio data-key="C.h.a.o.s.m.y.t.h." src="./static/music/oor_2011_01.m4a"></audio>
    <audio data-key="Re:make" src="./static/music/oor_2011_02.m4a"></audio>
    <audio data-key="No Scard" src="./static/music/oor_2011_03.m4a"></audio>
    <audio data-key="The Beginning" src="./static/music/oor_2013_01.m4a"></audio>
    <audio data-key="Clock Strikes" src="./static/music/oor_2013_02.m4a"></audio>
    <audio data-key="Deeper Deeper" src="./static/music/oor_2013_03.m4a"></audio>
    <audio data-key="3xxxv5" src="./static/music/oor_2015_01.m4a"></audio>
    <audio data-key="Cry Out" src="./static/music/oor_2015_02.m4a"></audio>
    <audio data-key="Heartache" src="./static/music/oor_2015_03.m4a"></audio>
    <audio data-key="Last Dance" src="./static/music/oor_2015_04.m4a"></audio>
    <audio data-key="Taking Off" src="./static/music/oor_2017_01.m4a"></audio>
    <audio data-key="We Are" src="./static/music/oor_2017_02.m4a" preload="auto"></audio>
    <audio data-key="Bedroom Warfare" src="./static/music/oor_2017_03.m4a"></audio>
    <audio data-key="I Was King" src="./static/music/oor_2017_04.m4a"></audio>
    <audio data-key="Listen" src="./static/music/oor_2017_05.m4a"></audio>
    <audio data-key="American Girls" src="./static/music/oor_2017_06.m4a"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    checkPar(a, b) {
      const audioTag = document.querySelector(`audio[data-Key="${a}"]`);
      if (b) {
        const vm = this;
        audioTag.play();
        audioTag.addEventListener("ended", function() {
          vm.$bus.$emit("musicDone");
        });
      } else {
        audioTag.pause();
      }
    }
  },
  created() {
    const vm = this;
    vm.$bus.$on("listen", (a, b) => {
      vm.checkPar(a, b);
    });
    vm.isLoading = true;
  },
  mounted() {
    const vm = this;
    vm.isLoading = false;
  }
};
</script>
