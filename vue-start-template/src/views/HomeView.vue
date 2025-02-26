<template>
    <div>
      <h1>Google Maps Beispiel</h1>
      <div id="map" style="height: 400px; width: 100%;"></div> <!-- Map Container -->
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  const MY_API_KEY = 'YOUR_API_KEY'; // Setze hier deinen Google Maps API Schlüssel ein
  const position = { lat: 37.7749, lng: -122.4194 }; // Beispielkoordinaten (San Francisco)
  
  onMounted(() => {
    // Google Maps API laden
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MY_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: position,
      });
  
      // Optionale Marker hinzufügen
      new google.maps.Marker({
        position: position,
        map: map,
        title: 'San Francisco!',
      });
    };
  });
  </script>
  
  <style scoped>
  /* Optional: Zusätzliche Styles für die Karte */
  #map {
    height: 400px; /* Höhe der Karte */
    width: 100%; /* Breite der Karte */
  }
  </style>
  