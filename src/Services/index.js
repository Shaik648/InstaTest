import axios from 'axios'
import * as API from '../Constants/API_Constants' 
export default{
    detailsAPI(data,res){
        axios.get(API.DETAILS ,data,
               {
        headers: {
          'Authorization': "Bearer " 
        }
      })
        .then(response =>{
        if (response) {
          console.log("response api", response)

          res(response)
        }
        })
    }
}