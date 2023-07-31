<template>
    <div class="list__item" @click="goToDetail">
      <div class="list__images swiper">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="image in images" :key="image">
            <img :src="image" alt="">
          </li>
        </ul>
        <div class="swiper-pagination"></div>
        <div class="list__user__image"></div>
      </div>
      <div class="list__text">
        <div class="-flex">
          <div>
            <h3 class="list__text-title">{{ title }}</h3>
            <p class="list__text-price">{{ price }}/日</p>
          </div>
          <div class="list__text-rate rate">{{ rate }}</div>
        </div>
        <div class="list__text-content">{{ content }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'price', 'rate', 'content', 'images'],
    methods: {
      goToDetail() {
        location.href = '../detail/';
      },
    },
  };
  </script>