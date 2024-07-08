<template>
  <div class="form-container">
    <form @submit.prevent="resetPassword">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        v-model="state.email"
      />
      <input type="submit" value="Send Verification" />
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  setup() {
    const state = reactive({
      email: "",
    });
    const router = useRouter();
    const resetPassword = () => {
      const email = state.email;
      sendPasswordResetEmail(getAuth(), email)
        .then((data) => {
          console.log("Reset Password Verification Sent");
          router.push("/login");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };
    return {
      state,
      resetPassword,
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

input[type="email"] {
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
  background-color: #218838;
}

@media (max-width: 600px) {
  form {
    width: 90%;
    padding: 15px;
  }

  label {
    margin-bottom: 6px;
  }

  input[type="email"] {
    padding: 8px;
    margin-bottom: 15px;
  }

  input[type="submit"] {
    padding: 8px;
    font-size: 14px;
  }
}
</style>
