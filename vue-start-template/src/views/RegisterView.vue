<script setup>
import { ref } from "vue";
// import { auth } from "@/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMsg = ref("");
const router = useRouter();

// 🔹 Registrierung mit E-Mail/Passwort
const registerWithEmail = async () => {
  errorMsg.value = "";
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log("Registrierung erfolgreich:", userCredential.user);
    router.push("/dashboard"); // Nach Registrierung weiterleiten
  } catch (error) {
    errorMsg.value = error.message;
  }
};
</script>

<template>
  <div>
    <h2>Registrieren</h2>

    <input type="email" v-model="email" placeholder="E-Mail" />
    <input type="password" v-model="password" placeholder="Passwort" />

    <button @click="registerWithEmail">Registrieren</button>

    <p v-if="errorMsg" style="color: red">{{ errorMsg }}</p>

    <p>Schon registriert? <router-link to="/login">Hier einloggen</router-link></p>
  </div>
</template>