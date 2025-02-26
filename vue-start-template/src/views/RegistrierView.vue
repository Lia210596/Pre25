<template>
    <div class="flex items-center justify-center min-h-screen bg-blue-600">
        <div class="bg-white p-8 rounded-2xl shadow-lg w-96">
            <h2 class="text-3xl font-bold text-center text-gray-800">Registrieren</h2>
            <p class="text-gray-600 text-center mb-6">Erstelle ein neues Konto.</p>

            <form @submit.prevent="handleRegister">
                <div class="mb-4">
                    <label class="block text-gray-700 font-medium">E-Mail</label>
                    <input 
                        v-model="email" 
                        type="email" 
                        required 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Deine E-Mail" 
                    />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 font-medium">Passwort</label>
                    <input 
                        v-model="password" 
                        type="password" 
                        required 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="••••••••" 
                    />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 font-medium">Passwort bestätigen</label>
                    <input 
                        v-model="confirmPassword" 
                        type="password" 
                        required 
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="••••••••" 
                    />
                </div>

                <button 
                    type="submit" 
                    class="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-200"
                >
                    Registrieren
                </button>
            </form>

            <p class="text-gray-500 text-sm text-center mt-4">
                Bereits registriert? 
                <RouterLink to="/login" class="text-blue-600 hover:underline">Jetzt einloggen</RouterLink>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
        alert("Die Passwörter stimmen nicht überein!");
        return;
    }
    // Logik zur Verarbeitung der Registrierung (z. B. API-Aufruf)
    console.log('E-Mail:', email.value);
    console.log('Passwort:', password.value);
    // Hier kannst du die Logik zum Verarbeiten der Registrierung hinzufügen
};
</script>

<style scoped>
/* Hintergrundfarbe der Card */
.bg-white {
    background-color: #ffffff;
}

/* Karte Schatten */
.shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Übergang für den Button */
.transition {
    transition: background-color 0.2s;
}

/* Border Farbe und Radius für die Eingabefelder */
.border-gray-300 {
    border-color: #d1d5db;
}

/* Bei Bedarf weitere Styles hier hinzufügen */
</style>
