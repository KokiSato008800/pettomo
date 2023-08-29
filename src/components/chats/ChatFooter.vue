<template>
  <footer class="footer__chat">
    <div class="footer__wrapper -flex">
      <div class="footer__chat__button -flex">
        <!-- ... -->
        <img src="../../assets/footer_chat_add.svg" alt="">
        <img src="../../assets/footer_chat_images.png" alt="">
        <img src="../../assets/footer_chat_camera.svg" alt="">
      </div>
      <div class="footer__chat__text">
        <textarea
          v-model="message"
          @keydown.enter.exact.prevent="sendMessage"
          @compositionstart="compositionStart"  
          @compositionend="compositionEnd"    
          placeholder="Aa"
        ></textarea>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ChatFooter',
  data() {
    return {
      message: '',
      isComposing: false
    };
  },
  methods: {
    sendMessage() {
      if (this.isComposing) return;
      this.$store.dispatch('addMessage', this.message);
      this.message = '';
    },
    compositionStart() {
      this.isComposing = true;
    },
    compositionEnd() {
      this.isComposing = false;
    }
  }
}
</script>

