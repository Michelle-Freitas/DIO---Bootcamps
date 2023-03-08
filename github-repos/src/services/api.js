import axios from "axios";
//const axios = require('axios')

export const api = axios.create({
    baseURL: 'https://api.github.com'
})
