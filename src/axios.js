import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://piotrkocrud64.netlify.app/api'
});

export default instance;