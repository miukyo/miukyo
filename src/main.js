import { createApp } from "vue";
import "@fontsource/Inter/variable.css";
import "./assets/main.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
