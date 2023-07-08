import axios from "axios";

const API_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: API_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '97895f95afmsh2e4bb5e7a5dfd99p14b891jsn60a983c86697',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const FetchDataAPI = async (url) => {
    const { data } = await axios.get(`${API_URL}/${url}`, options)
    return data
}