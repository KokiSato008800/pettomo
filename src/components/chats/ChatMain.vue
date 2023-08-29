<template>
  <main id="chat">
    <div class="wrapper">
      <div class="chat__area">
        <h2 class="chat__partner-name"></h2>
        <div class="chat__sction">
          <div v-for="(message, index) in userMessages" :key="index" class="chat__item --user">
            <p class="chat__message">{{ message }}</p>
            <div class="chat__img">
              <img src="../../assets/user_img.png" alt="user">
            </div>
          </div>
          <!-- 以下、既存のchat__item --partnerなど -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ChatMain',
  computed: {
    userMessages() {
      return this.$store.state.userMessages;
    }
  }
}
</script>