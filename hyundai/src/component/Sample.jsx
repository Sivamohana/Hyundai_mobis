
import React from "react";
import { Link} from "react-router-dom";
import { getUsers } from "../service/api";
import { useEffect, useState } from "react";
// import Progress from './progress.jsx';
const Sample = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response);
  };

  return (
    <div>
      
      <h1> Report List </h1>
      <div className="flexbox">
 
        {
           users.map((user) => {
              return (
                <div className="buttonbox">
                  <h5> {user.PI}</h5>
                  <Link to={{
                        pathname:`/progress/${user.order}`,
                        state:{stateParam: true}
                           }}>
                   <button className="submit">{user.order} </button>
                   </Link>
                </div> 
          );
          
        })
        }
      </div>
      <div className="flexbox2"> 
        {
           users.map((user) => {
              return (
                <div className="buttonbox">
                  <h5> {user.activity}</h5>
                  <Link to={{
                        pathname:`/progress/${user.order}`,
                        state:{stateParam: true}
                           }}>
                   <button className="submit">{user.order} </button>
                   </Link>
                </div> 
          );
          
        })
        }
      </div>
    
      
    </div>
  );
};
export default Sample;

