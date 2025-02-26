<template>
    <nav class="navbar navbar-expand-lg p-3" style="background-color: #0f2741;">
        <div class="container-fluid d-flex align-items-center">
            
            <!-- Logo links -->
            <RouterLink class="navbar-brand me-2" to="/">
                <img src="../assets/Logo_Vertikal.jpg" alt="Logo" class="logo" />
            </RouterLink>

            <!-- Hamburger Menü für About Us & Country -->
            <div class="dropdown">
                <button 
                    class="navbar-toggler text-white border-0" 
                    type="button"
                    @click="toggleMenu"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <ul v-if="menuOpen" class="dropdown-menu show">
                    <li><RouterLink class="dropdown-item" to="/about">About Us</RouterLink></li>
                    <li><RouterLink class="dropdown-item" to="/country">Country</RouterLink></li>
                </ul>
            </div>

            <!-- Suchfeld & Profilbild (rechts angepinnt) -->
            <div class="d-flex align-items-center ms-auto">
                <input
                    class="form-control me-3"
                    type="search"
                    placeholder="Search..."
                    v-model="searchQuery"
                    aria-label="Search"
                />

                <!-- Profil Dropdown Menü -->
                <div class="dropdown">
                    <img 
                        src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" 
                        alt="User" 
                        class="profile-img" 
                        @click="toggleProfileMenu"
                    />

                    <ul v-if="profileMenuOpen" class="dropdown-menu dropdown-menu-end show">
                        <li><RouterLink class="dropdown-item" to="/login">Login</RouterLink></li>
                        <li><RouterLink class="dropdown-item" to="/register">Registrieren</RouterLink></li>
                    </ul>
                </div>
            </div>

        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Hamburger-Menü für About Us & Country
const menuOpen = ref(false);
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

// Profil-Menü (Login/Registrieren)
const profileMenuOpen = ref(false);
const toggleProfileMenu = () => {
    profileMenuOpen.value = !profileMenuOpen.value;
};

// Menü schließen, wenn außerhalb geklickt wird
const closeMenus = (event) => {
    if (!event.target.closest('.dropdown')) {
        menuOpen.value = false;
        profileMenuOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeMenus);
});

onUnmounted(() => {
    document.removeEventListener('click', closeMenus);
});

// Suchfeld
const searchQuery = ref('');
</script>

<style>
/* Logo-Styling */
.logo {
    height: 80px;
}

/* Navbar Link Farben */
.nav-link {
    color: #ffffff;
}

.nav-link:hover {
    color: #a5c3e3;
}

/* Suchfeld */
.form-control {
    width: 200px;
}

/* Profilbild */
.profile-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
}

/* Hamburger Icon Styling */
.navbar-toggler {
    border: none;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Dropdown Menü Styling */
.dropdown-menu {
    background-color: #0f2741;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
    color: white;
    font-size: 16px;
}

.dropdown-item:hover {
    background-color: #1b3a5b;
    color: #a5c3e3;
}
</style>
