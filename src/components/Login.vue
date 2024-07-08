<template>
  <div class="form-container">
    <form @submit.prevent="signInUser">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter email address"
        v-model="state.email"
      />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        v-model="state.password"
      />
      <router-link to="/signup" class="signup-link"
        >Don't have an account?</router-link
      >
      <input type="submit" value="Login" />
    </form>
  </div>
</template>
  
  <script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    const state = reactive({
      username: "",
      email: "",
      password: "",
    });
    const router = useRouter();
    const signInUser = () => {
      const email = state.email;
      const password = state.password;
      signInWithEmailAndPassword(getAuth(), email, password)
        .then((data) => {
          console.log("Successfully Logged In");
          router.push("/home");
          state.password = "";
          state.email = "";
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };
    return {
      state,
      signInUser,
    };
  },
};
</script>
  
  <style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}

label {
  color: #000;
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

input[type="submit"]:hover {
  background-color: #54a366;
}

.signup-link {
  display: block;
  margin-bottom: 20px;
  color: #007bff;
  text-decoration: none;
  text-align: center;
}

.signup-link:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  form {
    width: 90%;
    padding: 15px;
  }

  label {
    margin-bottom: 6px;
  }

  input[type="email"],
  input[type="password"] {
    padding: 8px;
    margin-bottom: 15px;
  }

  input[type="submit"] {
    padding: 8px;
    font-size: 14px;
  }
}
</style>
  