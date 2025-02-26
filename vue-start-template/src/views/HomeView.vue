<script setup>
import { ref } from 'vue';

const message = ref('Willkommen auf der Startseite!');
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
