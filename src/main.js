import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import store from './store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZzENoTzevAODSfilXR9kqyppDLiS3GMQ",
  authDomain: "pettomo-ac486.firebaseapp.com",
  projectId: "pettomo-ac486",
  storageBucket: "pettomo-ac486.appspot.com",
  messagingSenderId: "840900912549",
  appId: "1:840900912549:web:147734251c7f8a3cb2744c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);