<template>
    <div class="list__contents">
      <a href="../detail/">
        <div class="list__item" @click="goToDetail">
          <!-- 画像の部分は繰り返し処理を使用して簡略化 -->
          <div class="list__images swiper">
            <ul class="swiper-wrapper">
              <li class="swiper-slide" v-for="imgUrl in imageUrls" :key="imgUrl">
                <img :src="imgUrl" alt="">
              </li>
            </ul>
            <div class="swiper-pagination"></div>
            <div class="list__user__image"></div>
          </div>
          <div class="list__text">
            <div class="-flex">
              <div>
                <h3 class="list__text-title">東京都江戸川区</h3>
                <p class="list__text-price">3,000円/日</p>
              </div>
              <div class="list__text-rate rate">5.0</div>
            </div>
            <div class="list__text-content">
              ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
            </div>
          </div>
        </div>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListItem',
    data() {
      return {
        imageUrls: ["https://picsum.photos/600/400",]  // ここに他の画像URLも追加します
      }
    },
    methods: {
      goToDetail() {
        this.$router.push('../detail/');
      }
    }
  }
  </script>
  
  <style scoped>
  /* ここにCSSを追加できます */
  </style>