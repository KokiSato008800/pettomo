<template>
    <div>
      <HeaderComponent />
      <main id="list">
        <div class="wrapper">
          <!-- 省略: 上部の検索バーなど -->
          <div class="list__area">
            <ListItemComponent
              v-for="item in items"
              :key="item.id"
              :title="item.title"
              :price="item.price"
              :rate="item.rate"
              :content="item.content"
              :images="item.images"
            />
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from './HeaderComponent.vue';
  import FooterComponent from './FooterComponent.vue';
  import ListItemComponent from './ListItemComponent.vue';
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      ListItemComponent,
    },
    data() {
      return {
        items: [
          // サーバーから取得するデータをここに配置
        ],
      };
    },
  };
  </script>