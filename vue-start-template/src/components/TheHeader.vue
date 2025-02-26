<script setup>
const title = 'Postcard';
</script>

<template>
  <div class="container mt-3 p-4 text-center text-black rounded">
    <h1 class="title">{{ title }}</h1>
    <hr class="title-line" /> <!-- Hier wird die Linie hinzugefügt -->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;700&family=Satisfy&display=swap');

/* Stil für den Titel */
.title {
    font-family: 'Roboto Slab', serif; /* Roboto Slab Schriftart */
    font-size: 3rem; /* Größe des Titels */
    color: #0f2741; /* Dunkelblauer Farbton für den Titel */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Schatten für den Titel */
    letter-spacing: 1px; /* Abstand zwischen den Buchstaben */
    margin: 0; /* Entferne den Standardabstand */
}

/* Stil für die Linie unter dem Titel */
.title-line {
    margin-top: 10px; /* Abstand nach oben zur Überschrift */
    border: none; /* Entferne den Standardrand */
    height: 2px; /* Höhe der Linie */
    background-color: #0f2741; /* Dunkelblaue Farbe für die Linie */
}

/* Stil für einen regulären Satisfy Text */
.satisfy-regular {
    font-family: 'Satisfy', cursive; /* Satisfy Schriftart */
    font-weight: 400; /* Gewicht für die Satisfy Schriftart */
    font-style: normal; /* Stil für die Satisfy Schriftart */
}
</style>
