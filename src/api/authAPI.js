import { axiosClient } from './axiosClient';

const AuthAPI = {
    signup(data){
        const url = `/signup`;
        return axiosClient.post(url, data, {
            headers: { "Content-Type": "application/json"}
        })
    },
    signin(data){
        const url = `/signin`;
        return axiosClient.post(url, data)
    },
    signout(){
        const url = `/signout`;
        return axiosClient.get(url)
    },
}
export default AuthAPI;