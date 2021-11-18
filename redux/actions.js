export const GET_MOVIES = 'GET_MOVIES';
const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'e1a24fcb3b4261ffedd3b4e78a5f79c8';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;


export const getMovies = () =>{
   return async function (dispatch){
     const response = await axios.get(`${BASE_URL}`);
     if(response.data){
       dispatch({
         type: GET_MOVIES,
         payload: response.data,
       })
     }
   }
}
