import axios from 'axios';


let basic = process.env.NODE_ENV === 'development' ? '/v1/pc/' : '/hn_xcx_api/v1/pc/'
axios.defaults.baseURL = basic;


export default axios;