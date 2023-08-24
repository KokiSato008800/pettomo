<template>
  <div>
    <MainHeader />
    <main id="detail">
      <div class="wrapper">
        <ImageSlider />
        <DetailArea />
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/common/MainHeader.vue';
import MainFooter from '@/components/common/MainFooter.vue';
import ImageSlider from '@/components/details/ImageSlider.vue';
import DetailArea from '@/components/details/DetailArea.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    ImageSlider,
    DetailArea,
    
  }
}
</script>

<style>
/* ここにスタイルを書くか、外部CSSファイルをインポートします */
</style>
