<template>
    <nav class="navbar navbar-expand-lg p-3" style="background-color: #0f2741;">
        <div class="container-fluid d-flex align-items-center">
            
            <!-- Logo links -->
            <RouterLink class="navbar-brand me-2" to="/home">
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

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link text-light" to="/home">Home</RouterLink>
                    </li>


                    <li class="nav-item dropdown position-relative">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Projects <span class="badge bg-primary">3</span>
                        </a>
                        <ul class="dropdown-menu position-absolute start-0" aria-labelledby="navbarDropdown">
                            <li>
                                <RouterLink class="dropdown-item" to="/bsp1">
                                    bsp1 <span class="badge bg-secondary"></span>
                                </RouterLink>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <RouterLink class="dropdown-item" to="/aboutus">
                                    About us <span class="badge bg-secondary"></span>
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- Suchfeld & Profilicon (rechts angepinnt) -->
                <div class="ms-auto d-flex align-items-center gap-2">
                    <input type="text" placeholder="Search" class="form-control w-32 sm:w-auto" />

                    <!-- Profil-Icon Dropdown -->
                    <div class="dropdown">
                        <a class="d-flex align-items-center" id="profileDropdown" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="rounded-circle" style="color: white;">
                                <path
                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.41 0-8 3.59-8 8h16c0-4.41-3.59-8-8-8z"
                                    fill="currentColor" />
                            </svg>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                            <li>
                                <RouterLink class="dropdown-item fs-4" to="/login">Login</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="dropdown-item fs-4" to="/register">Registrieren</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
</script>

<style>
/* Logo-Styling */
.logo {
    height: 80px;
}

/* Navbar Link Farben */
.nav-link {
    color: #ffffff;
    /* Weiße Textfarbe für Links */
}

.navbar-light .navbar-nav .nav-link:hover {
    color: #007bff;
    /* Farbe beim Hover-Effekt */
}

.dropdown-menu {
    background-color: #0f2741;
    /* Dunkelblauer Hintergrund für Dropdown */
    transform: translateX(-100%);
    /* Verschiebt das Menü nach links */
    transition: transform 0.3s ease;
    /* Sanfter Übergang */
}

.dropdown-menu.show {
    transform: translateX(0);
    /* Zeigt das Dropdown an */
}

.dropdown-item {
    color: #ffffff;
    /* Weiße Textfarbe für Dropdown-Items */
}

.dropdown-item:hover {
    background-color: #0056b3;
    /* Dunklerer Farbton beim Hover */
}

.badge {
    margin-left: 5px;
    /* Abstand für die Badge */
}
</style>
