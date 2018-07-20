import rsvp from 'rsvp'
import createXHR from '../services/xhr.service'
/*const apiData = {
     url: 'https://tatasky-dongle-uat-kong.videoready.tv//homescreen/pub/api/v1/page/DONGLE_HOMEPAGE?pageLimit:5& pageOffset:1',
     requestType: 'GET',
     headers: {
         "Content-Type": 'application/json;charset=UTF-8',
         "platform": 'dongle',
         "profileId": 'd0bee5fd-e785-45fe-a122-0262755db532'
     }
};*/
export const apiData=()=> {
        let obj={
            url: 'https://tatasky-dongle-uat-kong.videoready.tv/homescreen/pub/api/v1/page/DONGLE_MOVIES?pageLimit:5& pageOffset:1',
            requestType: 'GET',
            headers: {
                "Content-Type": 'application/json;charset=UTF-8',
                "platform": 'dongle',
                "profileId": 'd0bee5fd-e785-45fe-a122-0262755db532'
            },
            success:resp=>{

            },
            error:err=>{

            }
        };
        let promise = new rsvp.Promise((resolve, reject)=>{
            createXHR(obj, resolve, reject);
        });
        return promise;
};