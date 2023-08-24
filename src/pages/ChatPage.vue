<template>
    <div>
      <MainHeader />
      <ChatMain />
      <ChatFooter />
    </div>
  </template>
  
  <script>
  import MainHeader from '@/components/common/MainHeader.vue';
  import ChatMain from '@/components/chats/ChatMain.vue';
  import ChatFooter from '@/components/chats/ChatFooter.vue';
  
  export default {
    components: {
      MainHeader,
      ChatMain,
      ChatFooter
    }
  }
  </script>
  
<style scoped>

</style>