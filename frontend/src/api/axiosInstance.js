import axios from 'axios';

const api = axios.create({
    baseURL: 'http://simbolussi.ddns.com.br:8088/',
});

export default api;