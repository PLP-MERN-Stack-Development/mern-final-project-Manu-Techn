import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const getGratitudeEntries = async () => {
    try {
        const response = await axios.get(`${API_BASE}/gratitude`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching entries:', error);
        return { data: [] };
    }
};

export const addGratitudeEntry = async (text) => {
    try {
        const response = await axios.post(`${API_BASE}/gratitude`, { text });
        return response.data;
    } catch (error) {
        console.error('Error adding entry:', error);
        return { message: 'Failed to add entry' };
    }
};