<template>
    <div class="container">
        <div class="login-card">
            <h2>Login</h2>
            <form @submit.prevent="handleSubmit">
                <label for="username">Username</label>
                <input type="text" v-model="username" id="username" required />

                <label for="password">Passwort</label>
                <div class="password-input">
                    <input 
                        :type="showPassword ? 'text' : 'password'" 
                        v-model="password" 
                        id="password" 
                        required 
                    />
                    <span @click="togglePasswordVisibility" class="eye-icon">
                        {{ showPassword ? '🙈' : '👁️' }} <!-- Einfachere Unicode-Augen -->
                    </span>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            showPassword: false, // Flag für die Sichtbarkeit des Passworts
        };
    },
    methods: {
        handleSubmit() {
            // Hier kannst du die Login-Logik implementieren
            console.log('Benutzername:', this.username);
            console.log('Passwort:', this.password);
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword; // Toggle der Passwortsichtbarkeit
        },
    },
};
</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e8e8; /* Hintergrundfarbe der Seite */
}

.login-card {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px; /* Optionale feste Breite für die Card */
}

.login-card h2 {
    margin-bottom: 20px;
}

.login-card label {
    display: block;
    margin-bottom: 5px;
}

.login-card input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white; /* Setze die Hintergrundfarbe auf Weiß */
    color: #333; /* Setze die Textfarbe auf dunkelgrau */
}

.password-input {
    position: relative; /* Notwendig für das Positionieren des Augensymbols */
}

.eye-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    color: black; /* Farbe des Augensymbols */
    font-size: 20px; /* Größe des Augensymbols */
}

.login-card button {
    width: 100%;
    padding: 10px;
    background-color: #0f2741; /* Blau */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-card button:hover {
    background-color: #0c1e30; /* Dunkleres Blau beim Hover */
}
</style>
