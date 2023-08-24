<template>
    <div>
      <Header />
  
      <main id="list">
        <!-- 省略: 一部のコード -->
        
        <ListItem @Click=pushDetailPage()></ListItem>
        <ListItem />
        <!-- 他のListItemもここに追加できます -->
        
        <!-- 省略: 一部のコード -->
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