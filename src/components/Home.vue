<template>
    <div class="weather-container">
      <!-- Background Image -->
      <div class="background-image"></div>
  
      <!-- Top Bar -->
      <div class="top-bar">
        <h1 class="logo">🌤 Weather</h1>
        <div class="search-bar">
          <input type="text" placeholder="Search..." v-model="searchQuery">
          <button @click="searchWeather">🔍</button>
        </div>
      </div>
  
      <!-- Left Section (Location Info) -->
      <div class="location-info">
        <h2>LONDON</h2>
        <p>United Kingdom</p>
        <div class="weather-status">
          <img src="@/assets/cloudy-icon.png" alt="Cloudy">
          <span>Cloudy</span>
        </div>
      </div>
  
      <!-- Right Section (Weather Details) -->
      <div class="weather-details">
        <h2>{{ temperature }}°C</h2>
        <p>Wind: {{ wind }} km/h</p>
        <p>Humidity: {{ humidity }}%</p>
        <p>Precipitation: {{ precipitation }}%</p>
        <div class="forecast">
          <div v-for="(day, index) in forecast" :key="index" class="forecast-item">
            <p>{{ day.time }}</p>
            <p>{{ day.temp }}°C</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        searchQuery: "",
        temperature: 13,
        wind: 7,
        humidity: 99,
        precipitation: 99,
        forecast: [
          { time: "10 AM", temp: 13 },
          { time: "1 PM", temp: 22 },
          { time: "4 PM", temp: 18 },
          { time: "7 PM", temp: 12 },
        ],
      };
    },
    methods: {
      searchWeather() {
        console.log("Searching weather for:", this.searchQuery);
        // API call to fetch weather details can be implemented here
      },
    },
  };
  </script>
  
  <style scoped>
  .weather-container {
    position: relative;
    width: 800px;
    height: 450px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: white;
  }
  
  /* Background Image */
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("./../assets/london.jpg") no-repeat center center;
    background-size: cover;
    z-index: -1;
    filter: brightness(0.8);
  }
  
  /* Top Bar */
  .top-bar {
    position: absolute;
    top: 10px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 5px 10px;
  }
  
  .search-bar input {
    border: none;
    background: transparent;
    color: white;
    outline: none;
    padding: 5px;
  }
  
  .search-bar button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  /* Left Section */
  .location-info {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
  
  .location-info h2 {
    font-size: 28px;
    font-weight: bold;
  }
  
  .weather-status {
    display: flex;
    align-items: center;
  }
  
  .weather-status img {
    width: 30px;
    margin-right: 10px;
  }
  
  /* Right Section */
  .weather-details {
    position: absolute;
    top: 50px;
    right: 20px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 10px;
  }
  
  .weather-details h2 {
    font-size: 40px;
    margin-bottom: 10px;
  }
  
  .forecast {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .forecast-item {
    background: rgba(255, 255, 255, 0.2);
    padding: 5px;
    border-radius: 5px;
    text-align: center;
  }
  </style>
  