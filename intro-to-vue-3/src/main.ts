import { createApp } from "vue/dist/vue.esm-bundler.js";
import './style.css'

// Heart of our vue application
createApp(
  // Create app takes an option object
  // Data is one of those options
  {
  data() {
    return {
      // This data is reactive. So changing product will update the DOM.
      // Every place we refer to {{ product }} will be updated
      product: "Socks",
      description: "A pair of warm, fuzzy socks"
    };
  }
})
.mount('#app');