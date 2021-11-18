import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://crudpiotrapp.herokuapp.com/api/'
});

export default instance;