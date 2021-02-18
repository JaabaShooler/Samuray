import axios from "axios";
import setAuthToken from "./setAuthToken";
import jwt from "jsonwebtoken"

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`
    },
    responseType: 'json'
})




export const userAPI = {
    getUsers(){
        return instance.get(`users`)
            .then( response=> {
                return response.data
            })
    },
    follow(userID){
        return instance.post(`follow/${userID}`)
            .then(response => {
                return (response.data)
            })
    },
    unfollow(userID){
        return instance.delete(`follow/${userID}`)
            .then(response => {
                return (response.data)
            })
    }
}

export const AuthAPI = {
    async login(data){
        return await axios.post(`http://localhost:5000/login`, data)
            .then(response => {
                setAuthToken(response.data.token);
                localStorage.setItem('jwtToken', response.data.token);
                return this.me(jwt.decode(response.data.token).payload.id);
            })
    },
    me(id = jwt.decode(localStorage.jwtToken).payload.id){return instance.get(`me/${id}`).then(res => res.data)}
}