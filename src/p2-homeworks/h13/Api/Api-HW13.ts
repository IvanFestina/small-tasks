import axios from 'axios'
//RequestsAPI

let instance = axios.create({
baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const HW_Api = {
    postAuth(success: boolean) {
        return instance.post(`auth/test`, {"success": success}, {})
    }
}