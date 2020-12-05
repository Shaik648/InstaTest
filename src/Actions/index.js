import api from '../Services/index'
export function deatil_Action(data,res){
     api.detailsAPI(data, (response) => {
      console.log("response his", response)
      return res(response.data);
   })
}