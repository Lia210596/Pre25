<script setup>
import { ref } from "vue";
// import { auth } from "@/firebase";
// import { signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMsg = ref("");
const showPassword = ref(false);
const router = useRouter();

// 🔹 Login with Email/Password
const loginWithEmail = async () => {
  errorMsg.value = "";
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Login erfolgreich:", userCredential.user);
    router.push("/dashboard"); 
  } catch (error) {
    errorMsg.value = error.message;
  }
};

// 🔹 Login with Google
const loginWithGoogle = async () => {
  errorMsg.value = "";
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log("Google Login erfolgreich:", result.user);
    router.push("/dashboard");
  } catch (error) {
    errorMsg.value = error.message;
  }
};

// 🔹 Reset Password
const resetPassword = async () => {
  errorMsg.value = "";
  if (!email.value) {
    errorMsg.value = "Bitte E-Mail-Adresse eingeben";
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email.value);
    alert("Passwort-Zurücksetzungslink wurde gesendet!");
  } catch (error) {
    errorMsg.value = error.message;
  }
};

// 🔹 Toggle Password Visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="container">
    <div class="login-card">
      <h2>Login</h2>

      <label for="email">E-Mail</label>
      <input type="email" id="email" v-model="email" placeholder="E-Mail" />

      <label for="password">Passwort</label>
      <div class="password-input">
        <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" placeholder="Passwort" />
        <i class="eye-icon fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'" @click="togglePassword"></i>
      </div>

      <button @click="loginWithEmail">Login</button>

      <button class="google-login" @click="loginWithGoogle">
  <i class="bi bi-google"></i>
</button>

      <p @click="resetPassword" class="forgot-password">Passwort vergessen?</p>

      <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

      <p>Noch kein Konto? <router-link to="/register" class="register-link">Hier registrieren</router-link></p>
    </div>
  </div>
</template>

<style scoped>
/* 🔹 General Page Styling */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e8e8e8; /* Background color */
}

/* 🔹 Login Card */
.login-card {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}

/* 🔹 Labels */
.login-card label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
}

/* 🔹 Input Fields */
.login-card input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  color: #333;
}

/* 🔹 Password Input (with Eye Icon) */
.password-input {
  position: relative;
}

.eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: black;
  font-size: 18px;
}

/* 🔹 Login Button */
.login-card button {
  width: 100%;
  padding: 10px;
  background-color: #0f2741;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.login-card button:hover {
  background-color: #0c1e30;
}

/* 🔹 Google Login Button */
.google-login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #0f2741;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  color: #0f2741;
}

.google-login:hover {
  background-color: #d9d9d9;
}

.google-logo {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

/* 🔹 Forgot Password */
.forgot-password {
  color: #0f2741;
  cursor: pointer;
  font-size: 0.9rem;
}

.forgot-password:hover {
  text-decoration: underline;
}

/* 🔹 Error Message */
.error-msg {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

/* 🔹 Register Link */
.register-link {
  color: #0f2741;
  font-weight: bold;
}

.register-link:hover {
  text-decoration: underline;
}
</style>