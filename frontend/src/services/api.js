import axios from 'axios';

const API_URL = 'http://localhost:8080/api/profile';

export const getProfile = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw error;
    }
};

export const updateProfile = async (profileData) => {
    try {
        const response = await axios.put(API_URL, profileData);
        return response.data;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
};
