import { createRouter, createWebHistory } from "vue-router";
import Signup from "./src/components/Signup.vue";
import Login from "./src/components/Login.vue";
import QuizPage from "./src/components/QuizPage.vue";
import ForgotPassword from "./src/components/ForgotPassword.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/signup",
      component: Signup,
    },
    {
      path: "/home",
      component: QuizPage,
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
    },
  ],
});
export default router;
