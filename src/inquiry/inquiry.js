import axios from "axios";
// const instanse = axios.create({
//     withCredentials: true,
//     headers: {
//         "API-KEY": "ac7c18d7-dedc-4a3a-97e6-8ba2a87546b8"
//       }
// }
// )


export const getMyUser = () => {
    return axios.get(`http://83.220.174.93:2048/Players`)
    .then(
        response => {
           return response.data
        }
    )
        
}

// export const unFollowAxi = (id) => {
//     return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
//     .then(
//         response => {
//             return response
//         }
//     )
// }

// export const onFollowAxi = (id, flag) => {
//     if (flag)
//     return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
//     .then(
//         response => {
//             return response
//         }
//     ); 
//     else return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
//     .then(
//         response => {
//             return response
//         }
//     )
        
// }

// export const getProfileAxi = (id) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
//     .then(
//         response => {
//             return response
//         }
//     )
// }


// export const getHeaderAxi = () => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
//     .then(
//         response => {
//             return response
//         }
//     )
// }