/* eslint-disable react-hooks/rules-of-hooks */
import {
  TableBody,
  TableHead,
  Table,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import { getUsers } from "../service/api";
import { useEffect, useState } from "react";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const THead = styled(TableRow)`
  background: #c0bfbf;
  & > th {
    color: black;
    font-weight:900px;
    font-size: 15px;
  }
`;

const TData = styled(TableRow)`
  & > td {
    font-size: 10px;
  }
`;

const showDetails = () => {
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
      {users.map((user) => {
        return (
          <div >
            
            <div className="displaybox"> 
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
                  <TableCell> {user.Dstudy}</TableCell>
                  <TableCell> {user.DQuotation}</TableCell>
                  <TableCell> {user.DApproval}</TableCell>
                  <TableCell> {user.DPR}</TableCell>
                  <TableCell> {user.DPO}</TableCell>
                  <TableCell> {user.DDesign}</TableCell>
                  <TableCell> {user.DDesignConfirm}</TableCell>
                  <TableCell> {user.DSample}</TableCell>
                  <TableCell> {user.DSampleConfirm}</TableCell>
                  <TableCell> {user.DManufacturing}</TableCell>
                  <TableCell> {user.DInstallation}</TableCell>
                  <TableCell> {user.DInvoice}</TableCell>
                </TData>
              </TableBody>
            </StyledTable>
          </div>
        );
      })}
    </div>
  );
};

export default showDetails;
