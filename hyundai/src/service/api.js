import axios from 'axios';

// const URL = 'http://localhost:4700';
const URL = 'https://hyundai-mobis.onrender.com';

export const addUser = async (data) =>{
    try
    {
       return await axios.post(`${URL}/add`, data);
    }
    catch(error)
    {
        console.log("Error while calling add user APi", error);
    }
}

export const getUsers = async () =>{
    try{
       return await axios.get(`${URL}/all`);
    }
    catch(error){
console.log("Error while calling getUsers API", error);
    }
}

