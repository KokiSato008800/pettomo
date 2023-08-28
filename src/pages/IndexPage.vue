<template>
    <div>
      <Header />
  
      <main id="index">
        <!-- 省略: 一部のコード -->
        
        <IndexContents @Click=pushListPage()></IndexContents>
        
        <!-- 他のListItemもここに追加できます -->
        
        <!-- 省略: 一部のコード -->
      </main>
      <div>
        <img class="banner" src="../assets/banner.png" alt="">
      </div>
  
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/common/MainHeader.vue';
  import Footer from '@/components/common/MainFooter.vue';
  import IndexContents from '@/components/indexcontents/IndexContents.vue';
  
  
  export default {
    name: 'IndexPage',
    components: {
      Header,
      IndexContents,
      Footer
    },
    methods: {
      pushListPage() {
        this.$router.push('/list');
      }
    }
  }
  
  </script>
  
  <style scoped>
  /* ここにCSSを追加できます */
  </style>