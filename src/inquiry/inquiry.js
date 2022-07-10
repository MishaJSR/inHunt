import axios from "axios";
// const instanse = axios.create({
//     withCredentials: true,
//     headers: {
//         "API-KEY": "ac7c18d7-dedc-4a3a-97e6-8ba2a87546b8"
//       }
// }
// )


export function getAllUser () {
    fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(
        (result) => {
          return result
        }
      )

        
}