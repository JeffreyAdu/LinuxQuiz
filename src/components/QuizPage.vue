<template>
  <div class="quiz-container">
    <div class="logout-container">
      <button class="logout-button" @click="handleLogOut">LogOut</button>
    </div>
    <div class="question-box">
      <h3>{{ quizQuestion }}</h3>
    </div>
    <div class="answer">
      <input type="text" placeholder="Answer here" v-model="quizAnswer" />
    </div>
    <div class="buttons">
      <button class="check-answer">Check Answer</button>
      <button class="next-question">Next Question</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
export default {
  setup() {
    const quizQuestion = ref("What is Linux Operating System?");
    const quizAnswer = ref("");
    const router = useRouter();
    const handleLogOut = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        router.push("/login");
      });
    };
    return {
      quizQuestion,
      quizAnswer,
      handleLogOut,
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.logout-container {
  /* width: 100%; */
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.logout-button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #d9534f;
  color: #fff;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #c9302c;
}

.logout-button:active {
  background-color: #ac2925;
}

.question-box {
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #444;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.question-box h3 {
  margin: 0;
  word-wrap: break-word;
}

.answer input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #444;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
}

button:hover {
  background-color: #555;
}

button:active {
  background-color: #666;
}

@media (max-width: 600px) {
  .buttons {
    flex-direction: column;
  }

  .quiz-container,
  .question-box,
  .answer input,
  .buttons {
    width: 100%;
  }

  .logout-container {
    justify-content: center;
    margin-bottom: 10px;
  }

  .logout-button {
    width: 100%;
  }
}
</style>
