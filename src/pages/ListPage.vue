<template>
    <div>
      <Header />

      <main id="list">
        <!-- 省略: 一部のコード -->
        <div class="top__area">
          <div class="top__search -flex">
            <div class="search__button">絞り込む</div>
            <div class="search__option"></div>
          </div>
          <div class="list__title">
            <h2>アズケル</h2>
          </div>
        </div>
        <div class="list__area">
          <div class="button__contents">
            <div class="-flex">
              <span class="search__button -button">渋谷区</span>
              <span class="search__button -button">荒川区</span>
              <span class="search__button -button">渋谷区</span>
            </div>
          </div>
        <ListItem @Click=pushDetailPage()></ListItem>
        <ListItem />
        <!-- 他のListItemもここに追加できます -->
        
        <!-- 省略: 一部のコード -->
        </div>
        
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/common/MainHeader.vue';
  import Footer from '@/components/common/MainFooter.vue';
  import ListItem from '@/components/Lists/ListItem.vue';
  
  
  export default {
    name: 'ListPage',
    components: {
      Header,
      ListItem,
      Footer
    },
    methods: {
      pushDetailPage() {
        this.$router.push('/detail');
      }
    }
  }
  
  </script>
  
  <style scoped>
  /* ここにCSSを追加できます */
  </style>