<template>
  <div class="timeline-container">
    <h1 class="text-2xl font-bold text-center mb-4">Postkarten Timeline</h1>

    <!-- Google Maps Container -->
    <div id="map"></div>

    <!-- Horizontale Timeline -->
    <div class="timeline-wrapper">
      <div class="timeline" ref="timeline">
        <div
          v-for="(postcard, index) in postcards"
          :key="index"
          class="postcard"
          @click="moveMap(postcard)"
        >
        
          <div class="postcard-content">
            <h2 class="postcard-title">{{ postcard.title }}</h2>
            <p class="postcard-description">{{ postcard.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const MY_API_KEY = "AIzaSyC8s7894IRHF8LbKS3B-jn7oLqgmkFta1k"; // Ersetze durch deinen API-Key
const map = ref(null);

const postcards = ref([
  {
    title: "San Francisco",
    description: "Die Golden Gate Bridge ist atemberaubend!",
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    title: "New York",
    description: "Die Skyline bei Nacht ist wunderschön!",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    title: "Paris",
    description: "Der Eiffelturm leuchtet in der Nacht!",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    title: "Tokyo",
    description: "Eine Mischung aus Moderne und Tradition.",
    lat: 35.682839,
    lng: 139.759455,
  },
]);

const timeline = ref(null);

onMounted(() => {
  // Google Maps API laden
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${MY_API_KEY}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);

  window.initMap = () => {
    map.value = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 37.7749, lng: -122.4194 }, // Standardposition (San Francisco)
    });

    // Standardmarker setzen
    postcards.value.forEach((postcard) => {
      new google.maps.Marker({
        position: { lat: postcard.lat, lng: postcard.lng },
        map: map.value,
        title: postcard.title,
      });
    });
  };

  // Scrollen mit Mausrad aktivieren
  timeline.value.addEventListener("wheel", (event) => {
    event.preventDefault();
    timeline.value.scrollLeft += event.deltaY;
  });
});

const moveMap = (postcard) => {
  if (map.value) {
    map.value.setCenter({ lat: postcard.lat, lng: postcard.lng });
    map.value.setZoom(12);
  }
};
</script>

<style scoped>
/* Timeline-Container */
.timeline-container {
  padding: 20px;
  overflow: hidden;
}

/* Google Maps */
#map {
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
}

/* Horizontale Timeline */
.timeline-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none; /* Versteckt Scrollbar */
}

.timeline {
  display: flex;
  gap: 16px;
  padding: 10px;
}

.postcard {
  flex: 0 0 auto;
  width: 300px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
  cursor: pointer;
}

.postcard:hover {
  transform: scale(1.05);
}

.postcard-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.postcard-content {
  padding: 10px;
}

.postcard-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.postcard-description {
  font-size: 14px;
  color: gray;
}
</style>
