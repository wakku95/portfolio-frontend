import axios from 'axios';
import mockData from '../data/mock.json';

const API_URL = import.meta.env.PROD 
  ? 'https://raabtanow.com/api/portfolio/data' 
  : 'http://127.0.0.1:8000/api/portfolio/data';

// Determine if we should use mock data based on a env variable or fallback
const USE_MOCK = false; // Set this to true during development to use local JSON

export const fetchPortfolioData = async () => {
  try {
    if (USE_MOCK) {
      // Simulate network request
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockData.data);
        }, 500);
      });
    }

    const response = await axios.get(API_URL);
    console.log("API Response from Laravel:", response.data);
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error('API returned unsuccessful response');
    }
  } catch (error) {
    console.error('Error fetching portfolio data from Laravel API:', error);
    if (USE_MOCK) {
      return mockData.data;
    }
    // Return empty structure so it doesn't crash but shows it's empty
    return {
      settings: {},
      projects: [],
      experience: [],
      education: [],
      skills: []
    };
  }
};
