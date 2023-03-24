import mongoose from 'mongoose';

const connection = async(username, password) =>{
    
    const URL =`mongodb://${username}:${password}@ac-mgavf9b-shard-00-00.nmpofcu.mongodb.net:27017,ac-mgavf9b-shard-00-01.nmpofcu.mongodb.net:27017,ac-mgavf9b-shard-00-02.nmpofcu.mongodb.net:27017/?ssl=true&replicaSet=atlas-59bw2c-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("database connected successfully");
       }catch(error)
       {
        console.log("Error while connecting with the database"+ error);
       }
}
export default connection;