import axios from "axios";
// const instanse = axios.create({
//     withCredentials: true,
//     headers: {
//         "API-KEY": "ac7c18d7-dedc-4a3a-97e6-8ba2a87546b8"
//       }
// }
// )


export const getAllUser = () => {
    return axios.get(`http://83.220.174.93:2048/Players`)
    .then(
        response => {
           return response.data
        }
    )
        
}