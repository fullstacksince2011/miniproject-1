import axios from "axios";
const http = axios.create({
    baseURL: 'http://localhost:3000/'
});
//request incepter
http.interceptors.request.use(req => {
    //checking token # this feature may required in future task
    let token = localStorage.getItem('token');
    if (token) {
        req.headers['Authorization'] = `Bearer ${token}`;
    }
    return req
})

//response intercepter
http.interceptors.response.use(res => {

    return res
})
export default http
