import { createApp } from "vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
  },
  components,
  directives,
});

const app = createApp(App);
app.use(createPinia());
app.use(vuetify);
app.mount("#app");
