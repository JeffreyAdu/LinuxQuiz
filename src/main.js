import { createApp } from "vue";
import App from "./App.vue";
import router from "../router";
// import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
// dotenv.config();
const firebaseConfig = {
  apiKey: "AIzaSyBWJCLWaMjWR8wS09gME1SC3Xlurh9YtgA",
  authDomain: "quizapp-95097.firebaseapp.com",
  projectId: "quizapp-95097",
  storageBucket: "quizapp-95097.appspot.com",
  messagingSenderId: "413586619350",
  appId: "1:413586619350:web:d259a09bb9232560c88277",
};

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount("#app");
