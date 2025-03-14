import axiosClient from './axios.js'; // Importera den Axios-instans som vi skapade

// Hämta alla hälsodata
export const fetchHealthInfo = async () => {
  try {
    const response = await axiosClient.get('/healthInfo'); // Använder den egenskapade instansen av axios som byggdes för att hantera fel osv
    return response.data;
  } catch (error) {
    console.error("Error fetching health info:", error);
    throw error;
  }
};

// Skapa ny hälsodata
export const createHealthInfo = async (data) => {
  try {
    const response = await axiosClient.post('/healthInfo', data);
    return response.data;
  } catch (error) {
    console.error("Error creating health info:", error);
    throw error;
  }
};
