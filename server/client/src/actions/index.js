

import axios from 'axios';
import { FETCH_USER } from './type';

/*export const fetchUser = () => {
    return function(dispatch){
          axios.get('/api/currentuser').then((result) => {
              console.log('----result----'+result);
              return dispatch({type: FETCH_USER , payload: result});
          });
    }; 
}
*/

export const fetchUser = () => async dispatch => {
    const res =  await axios.get('/api/currentuser');
    console.log(res.data);
    return dispatch({type: FETCH_USER , payload: res.data});

};

/*export const handleToken = (token) => {
    return function(dispatcher){
        axios.post('/api/stripe', token).then((result) => {
             return dispatch({type: FETCH_USER , payload: result.data});
        });
    }

};*/

export const handleToken = (token) =>  async function(dispatch){
       console.log(token);
       var result = await axios.post('/api/stripe', token);
       return dispatch({type: FETCH_USER , payload: result.data});

};
  
  



