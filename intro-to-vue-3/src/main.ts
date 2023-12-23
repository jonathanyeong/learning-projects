import { createApp } from "vue/dist/vue.esm-bundler.js";
import './style.css'

// Heart of our vue application
createApp({
  data() {
    return {
      product: "Socks"
    };
  }
})
.mount('#app');