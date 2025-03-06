// Firebase SDKs importieren
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// 🔹 Deine Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyDzOst4KWywQxljqHUNkhQt6AvwpAIml1Q",
  authDomain: "postcard-c4d25.firebaseapp.com",
  projectId: "postcard-c4d25",
  storageBucket: "postcard-c4d25.firebasestorage.app",
  messagingSenderId: "1015297522201",
  appId: "1:1015297522201:web:025c2daf0108c4bf1f4888",
  measurementId: "G-VYL4YNGFTR"
};

// 🔹 Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Analytics nur im Browser initialisieren (Vermeidung von SSR-Problemen)
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// 🔹 Exporte, um Firebase in anderen Dateien zu verwenden
export { app, auth, analytics };