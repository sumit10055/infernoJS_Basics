import axios from 'axios';

const apiService = ()=> {
   return axios({
       url: '/homescreen/pub/api/v1/page/DONGLE_HOMEPAGE',
       method: 'GET',
       baseURL: 'https://tatasky-dongle-uat-kong.videoready.tv/',
       params: {
           pageLimit: 5,
           pageOffset: 1
       },
       headers:{
           "Content-Type": 'application/json;charset=UTF-8',
           "platform": 'dongle',
           "profileId": 'd0bee5fd-e785-45fe-a122-0262755db532'
       },
       timeout: 3000,
       withCredentials: false, // default
       responseType: 'json', // default
       validateStatus: function (status) {
           return status >= 200 && status < 300; // default
       }
       }).then(
           resp=>{
               // console.log('API resp---------------',resp);
               return resp.data;
           },
           error=>{
               // console.log('API error----------------',error);
           }
       );
};

export default apiService;