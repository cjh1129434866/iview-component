import axios from 'axios'

let util = {};

util.ajax = axios.create({
  baseURL: 'https://api.iviewui.com',
  timeout: 3000
})

export default util;
