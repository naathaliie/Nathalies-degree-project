// src/api/axios.js
import axios from 'axios';

// Skapa en instans av Axios
const axiosClient = axios.create({
  baseURL: 'http://localhost:3003/', // Sätt bas-URL för din backend, samma som i server.js -> port
  timeout: 10000, // Timeout om API-anrop tar för lång tid
  headers: {
    'Content-Type': 'application/json',
  },
});

// Lägg till interceptors om du behöver hantera request eller response globalt
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global felhantering, t.ex. logga fel eller visa felmeddelanden
    console.error(error);
    return Promise.reject(error);
  }
);

export default axiosClient;
