<template>
    <div class="map-container">
      <l-map :zoom="zoom" :center="center" style="height: 100vh; width: 100vw">
        <!-- Base Map (OpenStreetMap) -->
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  
        <!-- RainViewer Radar Layer -->
        <l-tile-layer 
          v-if="radarLayer" 
          :url="radarLayer"
          :opacity="0.7"
        />
      </l-map>
  
      <!-- Refresh Button -->
      <div class="controls">
        <button @click="fetchRainViewerData">🔄 Refresh Radar</button>
      </div>
    </div>
  </template>
  
  <script>
  import { LMap, LTileLayer } from "vue2-leaflet";
  import "leaflet/dist/leaflet.css";
  import axios from "axios";
  
  export default {
    name: "WeatherMap",
    components: {
      LMap,
      LTileLayer,
    },
    data() {
      return {
        center: [51.505, -0.09], // Default: London
        zoom: 5,
        radarLayer: null,
      };
    },
    methods: {
      async fetchRainViewerData() {
        try {
          const response = await axios.get("https://api.rainviewer.com/public/weather-maps.json");
          const lastFrame = response.data.radar.past.slice(-1)[0]; // Get latest radar image
          this.radarLayer = `https://tilecache.rainviewer.com${lastFrame.path}/256/{z}/{x}/{y}/2/1_1.png`;
        } catch (error) {
          console.error("Error fetching radar data:", error);
        }
      }
    },
    mounted() {
      this.fetchRainViewerData(); // Load radar when component mounts
    }
  };
  </script>
  
  <style scoped>
  .map-container {
    position: relative;
  }
  
  .controls {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 5px;
  }
  
  .controls button {
    background: white;
    border: none;
    padding: 8px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 3px;
  }
  
  .controls button:hover {
    background: #ddd;
  }
  </style>
  