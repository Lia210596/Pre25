<template>
    <div class="about-container">
        <h1>Über Uns</h1>
        <p>
            Willkommen bei <strong>Postcard Journeys</strong>! Wir sind leidenschaftliche Reisende, die ihre Erfahrungen und Entdeckungen 
            mit der Welt teilen möchten. Unsere Mission ist es, Ihnen inspirierende Einblicke in verschiedene Reiseziele zu bieten und 
            Ihnen zu helfen, die Schönheit und Kultur dieser Orte zu erleben.
        </p>
        
        <h2>Unsere Vision</h2>
        <p>
            Bei Postcard Journeys glauben wir, dass Reisen eine der besten Möglichkeiten ist, 
            den Horizont zu erweitern und neue Kulturen zu entdecken. Wir möchten Ihnen die 
            besten Tipps, Empfehlungen und Geschichten von unseren Reisen präsentieren, damit 
            Sie das Beste aus Ihrem nächsten Abenteuer herausholen können.
        </p>
        
        <h2>Was wir bieten</h2>
        <ul>
            <li>Erfahrungsberichte von Reisenden aus aller Welt</li>
            <li>Praktische Tipps für die Planung Ihrer Reisen</li>
            <li>Empfehlungen für Sehenswürdigkeiten, Restaurants und versteckte Schätze</li>
            <li>Inspirierende Geschichten, die Lust auf das Reisen machen</li>
        </ul>

        <h2>Unser Team</h2>
        <p>
            Unser Team besteht aus erfahrenen Reisenden, Fotografen und Geschichtenerzählern, die 
            ihre Erlebnisse und ihr Wissen mit Ihnen teilen möchten. Jedes Teammitglied bringt 
            einzigartige Perspektiven und Erfahrungen mit, die unsere Inhalte bereichern.
        </p>

        <h2>Schließen Sie sich uns an!</h2>
        <p>
            Wir laden Sie ein, Teil unserer Reisegemeinschaft zu werden. Teilen Sie Ihre eigenen 
            Erfahrungen, stellen Sie Fragen oder folgen Sie uns auf unseren sozialen Medien, um 
            inspiriert zu werden! 
        </p>

        <div class="social-media">
            <h3>Folgen Sie uns auf:</h3>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'; // Hier können Sie später weitere Logik hinzufügen
</script>

<style scoped>
.about-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f8f9fa; /* Heller Hintergrund */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #0f2741; /* Dunkelblau für die Hauptüberschrift */
}

h2 {
    color: #007bff; /* Blau für Unterüberschriften */
}

p {
    color: #333; /* Dunkelgrau für Text */
    line-height: 1.6;
}

ul {
    margin-left: 20px;
}

.social-media {
    margin-top: 20px;
}

.social-link {
    display: inline-block;
    margin-right: 10px;
    color: #007bff;
    text-decoration: none;
}

.social-link:hover {
    text-decoration: underline;
}
</style>
