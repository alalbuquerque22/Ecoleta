import axios from 'axios';


const api = axios.create({
    baseURL:'http://192.168.10.106:19000'
});


export default api;
