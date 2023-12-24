import axios from "axios";
// require('dotenv').config();
const API_URL = process.env.REACT_APP_API_URL;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const WEB_BASE_URL = process.env.REACT_APP_WEB_BASE_URL;

let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    // 'content-type': 'multipart/form-data',
};

class Api {
    constructor(props){
        axios.interceptors.request.use((req) => {
            req.headers = headers;
            if(localStorage.getItem('authToken')){
                var token = localStorage.getItem('authToken');
                req.headers.Authorization = 'Bearer '+token;
            }
            return req;
        });
    }
    
    post(url, obj) {
        return axios.post(API_URL + url, obj, { headers }).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    get(url) {
        return axios.get(API_URL+url, {headers}).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    webGet(url) {
        return axios.get(WEB_BASE_URL+url, {headers}).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
    webPost(url, obj) {
        return axios.post(WEB_BASE_URL + url, obj, { headers }).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }

    basePost(url, obj) {
        return axios.post(API_BASE_URL + url, obj, { headers }).then((resp)=>{
            if(resp.data.status == 0 && resp.data.message == 'Invalid Token'){
                localStorage.clear();
                window.location.href = "/login";
            }
            return resp;
        });
    }
}
export default new Api();