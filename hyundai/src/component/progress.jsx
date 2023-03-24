import React from 'react';
import { useParams } from 'react-router-dom';
import { getUsers } from "../service/api";
import { useEffect, useState } from "react";
import {
  TableBody,
  TableHead,
  Table,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const THead = styled(TableRow)`
background: #c0bfbf;
  & > th {
    color: black;
    font-size: 15px;
  }
`;
const TData = styled(TableRow)`
  & > td {
    font-size: 10px;
    font-weight:bolder;
  }
`;
const TD = styled(TableCell)`
    color: black;
  padding-left: 25px;
  border-radius: 20px;

 
  @keyframes blinkingBackground
    {
      // 0%		{ background-color: #10c018;}
      // 25%		{ background-color: #1056c0;}
      50%		{ background-color: #ef0a1a;
              color:white}
      // 75%		{ background-color: #254878;}
      // 100%	        { background-color: #04a1d5;
      }
    }

`;




const Progress = () => {

    const [users, setUsers] = useState([]);
   

    useEffect(() => {
      getAllUsers();
    }, []);

    const getAllUsers = async () => {
      let response = await getUsers();
      setUsers(response.data);
    
      console.log(response);
 
    };

    const {id} = useParams();

   const filtered = users.filter( data => {
    return data.order === id;
   })
   
  console.log(filtered);



    return(
    <div>  
        <h1>Report Details </h1>
        {
          filtered.map((user) => {
            return <> <div className="displaybox"> 
            <h6 className="sd"> Order:<span>{user.order} </span> </h6>
            <h6 className="sd"> PI: <span>{user.PI} </span></h6>
            <h6 className="sd"> Activity:<span> {user.activity}</span> </h6>
            </div>
            <StyledTable>
    <TableHead>
      <THead>
        <TableCell> #</TableCell>
        <TableCell> Study </TableCell>
        <TableCell> Quotation</TableCell>
        <TableCell> Approval </TableCell>
        <TableCell> PR </TableCell>
        <TableCell> PO</TableCell>
        <TableCell> Design </TableCell>
        <TableCell>Design Confirmation </TableCell>
        <TableCell>Sample</TableCell>
        <TableCell>Sample Confirmation</TableCell>
        <TableCell> Manufacturing</TableCell>
        <TableCell> Installation </TableCell>
        <TableCell> Invoice close </TableCell>
      </THead>
    </TableHead>
    <TableBody>
      <TData>
        <TableCell style={{color:'#2a0ceb', fontSize:'15px',  fontWeight:'bolder'}}>Plan </TableCell>
        <TableCell> {user.study}</TableCell>
        <TableCell> {user.Quotation}</TableCell>
        <TableCell> {user.Approval}</TableCell>
        <TableCell> {user.PR}</TableCell>
        <TableCell> {user.PO}</TableCell>
        <TableCell> {user.Design}</TableCell>
        <TableCell> {user.DesignConfirm}</TableCell>
        <TableCell> {user.Sample}</TableCell>
        <TableCell> {user.SampleConfirm}</TableCell>
        <TableCell> {user.Manufacturing}</TableCell>
        <TableCell> {user.Installation}</TableCell>
        <TableCell> {user.Invoice}</TableCell>
      </TData>

      <TData>
        <TableCell style={{color:'#2a0ceb', fontSize:'15px', fontWeight:'bolder'}}> Actual </TableCell>
        <TableCell> {user.Astudy}</TableCell>
        <TableCell> {user.AQuotation}</TableCell>
        <TableCell> {user.AApproval}</TableCell>
        <TableCell> {user.APR}</TableCell>
        <TableCell> {user.APO}</TableCell>
        <TableCell> {user.ADesign}</TableCell>
        <TableCell> {user.ADesignConfirm}</TableCell>
        <TableCell> {user.ASample}</TableCell>
        <TableCell> {user.ASampleConfirm}</TableCell>
        <TableCell> {user.AManufacturing}</TableCell>
        <TableCell> {user.AInstallation}</TableCell>
        <TableCell> {user.AInvoice}</TableCell>
      </TData>
      <TData>
                <TableCell style={{color:'#2a0ceb', fontSize:'15px', fontWeight:'bolder'}}> Difference </TableCell>
                  <TD style={{animation: user.Dstudy < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.Dstudy}</TD>   
                  <TD style={{animation: user.DQuotation < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DQuotation}</TD>
                  <TD style={{animation: user.DApproval < 0 ? "blinkingBackground 2s infinite " :"black",fontSize:'15px', fontWeight:'bolder'}}> {user.DApproval}</TD>
                  <TD style={{animation: user.DPR < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DPR}</TD>
                  <TD style={{animation: user.DPO < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DPO}</TD>
                  <TD style={{animation: user.DDesign < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DDesign}</TD>
                  <TD style={{animation: user.DDesignConfirm < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DDesignConfirm}</TD>
                  <TD style={{animation: user.DSample < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DSample}</TD>
                  <TD style={{animation: user.DSampleConfirm < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DSampleConfirm}</TD>
                  <TD style={{animation: user.DManufacturing < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DManufacturing}</TD>
                  <TD style={{animation: user.DInstallation < 0 ? "blinkingBackground 2s infinite " : "black",fontSize:'15px', fontWeight:'bolder'}}> {user.DInstallation}</TD>
                  <TD style={{animation: user.DInvoice < 0 ? "blinkingBackground 2s infinite " :"normalBackground",fontSize:'15px', fontWeight:'bolder'}}> {user.DInvoice}</TD>
                </TData>
    </TableBody>
  </StyledTable>      

      <div>

     </div>    
            </>
          })
        }
        <br/><br/>
         <div>

         </div>

        
        {/* 
        
        
      
        
        <div className='containerp'>
            <ul className='progressbar'>
              <li className='activep'>study</li>          
              <li>Quotation </li>
              <li>Approval</li> 
              <li>PR</li> 
              <li>PO</li> 
              <li>Design</li> 
              <li>DesignConfirm</li>
              <li>Manufacturing</li>
              <li>Installation</li> 
              <li>Invoice</li>
            </ul>
        </div> */}
        <br/><br/>
    </div>     
)
}
export default Progress;

