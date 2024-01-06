
const API_BASE_URL = 'http://localhost:8080/api';

export const fetchJobOfferData = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during fetching data from API:', error);
        throw error;
    }
}

export const fetchJobs = async (page = 0, pageSize = 3) => {
    try {
        const response = await fetch(`${API_BASE_URL}/offer/all?page=${page}&size=${pageSize}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
    }
};
