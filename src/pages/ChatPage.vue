<template>
  <div>
    <MainHeader />
    <ChatMain :userMessages="userMessages" />
    <ChatFooter @sendMessage="addMessage" />
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
  },
  data() {
    return {
      userMessages: []
    };
  },
  methods: {
    addMessage(message) {
      this.userMessages.push(message);
    }
  }
}
</script>
