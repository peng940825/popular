<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!-- jay -->
    <audio data-key="牛仔很忙" ref="audio" src="./static/music/jay_2007_01.m4a"></audio>
    <audio data-key="彩虹" ref="audio" src="./static/music/jay_2007_02.m4a"></audio>
    <audio data-key="青花瓷" ref="audio" src="./static/music/jay_2007_03.m4a"></audio>
    <audio data-key="陽光宅男" ref="audio" src="./static/music/jay_2007_04.m4a"></audio>
    <audio data-key="龍戰騎士" ref="audio" src="./static/music/jay_2008_01.m4a"></audio>
    <audio data-key="花海" ref="audio" src="./static/music/jay_2008_02.m4a"></audio>
    <audio data-key="說好的幸福呢" ref="audio" src="./static/music/jay_2008_03.m4a"></audio>
    <audio data-key="稻香" ref="audio" src="./static/music/jay_2008_04.m4a"></audio>
    <audio data-key="驚嘆號" ref="audio" src="./static/music/jay_2011_01.m4a"></audio>
    <audio data-key="Mine Mine" ref="audio" src="./static/music/jay_2011_02.m4a"></audio>
    <audio data-key="公主病" ref="audio" src="./static/music/jay_2011_03.m4a"></audio>
    <audio data-key="你好嗎" ref="audio" src="./static/music/jay_2011_04.m4a"></audio>
    <audio data-key="算什麼男人" ref="audio" src="./static/music/jay_2014_01.m4a"></audio>
    <audio data-key="天涯過客" ref="audio" src="./static/music/jay_2014_02.m4a"></audio>
    <audio data-key="怎麼了 ft. 袁詠琳" ref="audio" src="./static/music/jay_2014_03.m4a"></audio>
    <audio data-key="手寫的從前" ref="audio" src="./static/music/jay_2014_04.m4a"></audio>
    <audio data-key="聽見下雨的聲音" ref="audio" src="./static/music/jay_2014_05.m4a"></audio>
    <audio data-key="一點點" ref="audio" src="./static/music/jay_2016_01.m4a"></audio>
    <audio data-key="告白氣球" ref="audio" src="./static/music/jay_2016_02.m4a"></audio>
    <audio data-key="愛情廢柴" ref="audio" src="./static/music/jay_2016_03.m4a"></audio>
    <!-- taeyeon -->
    <audio data-key="I ft. Verbal Jint" ref="audio" src="./static/music/taeyeon_2015_01.m4a"></audio>
    <audio data-key="Gemini" ref="audio" src="./static/music/taeyeon_2015_02.m4a"></audio>
    <audio data-key="Stress" ref="audio" src="./static/music/taeyeon_2015_03.m4a"></audio>
    <audio data-key="Starlight ft. Dean" ref="audio" src="./static/music/taeyeon_2016_01.m4a"></audio>
    <audio data-key="Why" ref="audio" src="./static/music/taeyeon_2016_02.m4a"></audio>
    <audio data-key="Night" ref="audio" src="./static/music/taeyeon_2016_03.m4a"></audio>
    <audio data-key="Stay" ref="audio" src="./static/music/taeyeon_2018_01.m4a"></audio>
    <audio data-key="I'm The Greatest" ref="audio" src="./static/music/taeyeon_2018_02.m4a"></audio>
    <!-- gd -->
    <audio data-key="A Boy" ref="audio" src="./static/music/gd_2009_01.m4a"></audio>
    <audio data-key="Heartbreaker" ref="audio" src="./static/music/gd_2009_02.m4a"></audio>
    <audio data-key="Gossip Man" ref="audio" src="./static/music/gd_2009_03.m4a"></audio>
    <audio data-key="She's Gone ft. Kush" ref="audio" src="./static/music/gd_2009_04.m4a"></audio>
    <audio data-key="WHO YOU?" ref="audio" src="./static/music/gd_2013_01.m4a"></audio>
    <audio data-key="CROOKED" ref="audio" src="./static/music/gd_2013_02.m4a"></audio>
    <audio data-key="R.O.D ft. LYDIA PAEK" ref="audio" src="./static/music/gd_2013_03.m4a"></audio>
    <!-- atc -->
    <audio data-key="In Our Bones" ref="audio" src="./static/music/atc_2016_01.m4a"></audio>
    <audio data-key="Runaway" ref="audio" src="./static/music/atc_2016_02.m4a"></audio>
    <audio data-key="Wasteland" ref="audio" src="./static/music/atc_2016_03.m4a"></audio>
    <audio data-key="Young & Relentless" ref="audio" src="./static/music/atc_2016_04.m4a"></audio>
    <audio data-key="Strangers Again" ref="audio" src="./static/music/atc_2018_01.m4a"></audio>
    <audio data-key="I like the Way" ref="audio" src="./static/music/atc_2018_02.m4a"></audio>
    <audio data-key="Vioces" ref="audio" src="./static/music/atc_2018_03.m4a"></audio>
    <audio data-key="Almost Forgot" ref="audio" src="./static/music/atc_2018_04.m4a"></audio>
    <audio data-key="The Fuess" ref="audio" src="./static/music/atc_2018_05.m4a"></audio>
    <!-- oor -->
    <audio data-key="C.h.a.o.s.m.y.t.h." ref="audio" src="./static/music/oor_2011_01.m4a"></audio>
    <audio data-key="Re:make" ref="audio" src="./static/music/oor_2011_02.m4a"></audio>
    <audio data-key="No Scard" ref="audio" src="./static/music/oor_2011_03.m4a"></audio>
    <audio data-key="The Beginning" ref="audio" src="./static/music/oor_2013_01.m4a"></audio>
    <audio data-key="Clock Strikes" ref="audio" src="./static/music/oor_2013_02.m4a"></audio>
    <audio data-key="Deeper Deeper" ref="audio" src="./static/music/oor_2013_03.m4a"></audio>
    <audio data-key="3xxxv5" ref="audio" src="./static/music/oor_2015_01.m4a"></audio>
    <audio data-key="Cry Out" ref="audio" src="./static/music/oor_2015_02.m4a"></audio>
    <audio data-key="Heartache" ref="audio" src="./static/music/oor_2015_03.m4a"></audio>
    <audio data-key="Last Dance" ref="audio" src="./static/music/oor_2015_04.m4a"></audio>
    <audio data-key="Taking Off" ref="audio" src="./static/music/oor_2017_01.m4a"></audio>
    <audio data-key="We Are" ref="audio" src="./static/music/oor_2017_02.m4a"></audio>
    <audio data-key="Bedroom Warfare" ref="audio" src="./static/music/oor_2017_03.m4a"></audio>
    <audio data-key="I Was King" ref="audio" src="./static/music/oor_2017_04.m4a"></audio>
    <audio data-key="Listen" ref="audio" src="./static/music/oor_2017_05.m4a"></audio>
    <audio data-key="American Girls" ref="audio" src="./static/music/oor_2017_06.m4a"></audio>
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
