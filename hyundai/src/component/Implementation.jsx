import React, { useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { addUser } from "../service/api";

const defaultValue = {
  order: "",
  PI: "",
  activity: "",

  study: "",
  Quotation: "",
  Approval: "",
  PR: "",
  PO: "",
  Design: "",
  DesignConfirm: "",
  Sample:"",
  SampleConfirm:"",
  Manufacturing: "",
  Installation: "",
  Invoice: "",

  Astudy: "",
  AQuotation: "",
  AApproval: "",
  APR: "",
  APO: "",
  ADesign: "",
  ADesignConfirm: "",
  ASample:"",
  ASampleConfirm:"",
  AManufacturing: "",
  AInstallation: "",
  AInvoice: "",

  Dstudy: "",
  DQuotation: "",
  DApproval: "",
  DPR: "",
  DPO: "",
  DDesign: "",
  DDesignConfirm: "",
  DSample:"",
  DSampleConfirm:"",
  DManufacturing: "",
  DInstallation: "",
  DInvoice: "",
};

const Implementation = () => {

  const [user, setUser] = useState(defaultValue);



  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    /*  Study difference */
    var s1 = document.getElementById("study").value;
    var s2 = document.getElementById("Astudy").value;
    const st1 = new Date(s1);
    const st2 = new Date(s2);
    const time = st1 - st2;
    const Dstudydays = Math.floor(time / (1000 * 60 * 60 * 24));
    document.getElementById("Dstudy").innerHTML = Dstudydays;
  
    /* AQuotation difference */
    var Q1 = document.getElementById("Quotation").value;
    var Q2 = document.getElementById("AQuotation").value;
    const Qu1 = new Date(Q1);
    const Qu2 = new Date(Q2);
    const Qtime = Qu1 - Qu2;
    const DQuotationdays = Math.floor(Qtime / (1000 * 60 * 60 * 24));
    document.getElementById("DQuotation").innerHTML = DQuotationdays;
   
    /*Approval difference */
    var A1 = document.getElementById("Approval").value;
    var A2 = document.getElementById("AApproval").value;
    const Ap1 = new Date(A1);
    const Ap2 = new Date(A2);
    const Atime = Ap1 - Ap2;
    const DApprovaldays = Math.floor(Atime / (1000 * 60 * 60 * 24));
    document.getElementById("DApproval").innerHTML = DApprovaldays;
   
    /*Purchase Request Difference */
    var PR1 = document.getElementById("PR").value;
    var PR2 = document.getElementById("APR").value;
    const APR1 = new Date(PR1);
    const APR2 = new Date(PR2);
    const PRtime = APR1 - APR2;
    const DPRdays = Math.floor(PRtime / (1000 * 60 * 60 * 24));
    document.getElementById("DPR").innerHTML = DPRdays;
  
    /*Purchase order differece */
    var PO1 = document.getElementById("PO").value;
    var PO2 = document.getElementById("APO").value;
    const APO1 = new Date(PO1);
    const APO2 = new Date(PO2);
    const POtime = APO1 - APO2;
    const DPOdays = Math.floor(POtime / (1000 * 60 * 60 * 24));
    document.getElementById("DPO").innerHTML = DPOdays;

    /**Design difference */
    var De1 = document.getElementById("Design").value;
    var De2 = document.getElementById("ADesign").value;
    const Des1 = new Date(De1);
    const Des2 = new Date(De2);
    const Detime = Des1 - Des2;
    const DDesigndays = Math.floor(Detime / (1000 * 60 * 60 * 24));
    document.getElementById("DDesign").innerHTML = DDesigndays;

    /**Design Confirmation Difference */
    var DC1 = document.getElementById("DesignConfirm").value;
    var DC2 = document.getElementById("ADesignConfirm").value;
    const DeC1 = new Date(DC1);
    const DeC2 = new Date(DC2);
    const DCtime = DeC1 - DeC2;
    const DDesignConfirmdays = Math.floor(DCtime / (1000 * 60 * 60 * 24));
    document.getElementById("DDesignConfirm").innerHTML = DDesignConfirmdays;

   /**Sample Difference */
    var Sam1 = document.getElementById("Sample").value;
    var Sam2 = document.getElementById("ASample").value;
    const Samp1 = new Date(Sam1);
    const Samp2 = new Date(Sam2);
    const Samtime = Samp1-Samp2;
    const DSampledays = Math.floor( Samtime/ (1000 * 60 * 60 * 24));
    document.getElementById("DSample").innerHTML = DSampledays;

   /**Sample Confirmation Difference  */
   var Samc1 = document.getElementById("SampleConfirm").value;
   var Samc2 = document.getElementById("ASampleConfirm").value;
   const Sampc1 = new Date(Samc1);
   const Sampc2 = new Date(Samc2);
   const Samctime = Sampc1-Sampc2;
   const DSampleConfirmadays = Math.floor( Samctime/ (1000 * 60 * 60 * 24));
   document.getElementById("DSampleConfirm").innerHTML =  DSampleConfirmadays;

    /**Manufacturing Difference */
    var M1 = document.getElementById("Manufacturing").value;
    var M2 = document.getElementById("AManufacturing").value;
    const Ma1 = new Date(M1);
    const Ma2 = new Date(M2);
    const Mtime = Ma1 - Ma2;
    const DManufacturingdays = Math.floor(Mtime / (1000 * 60 * 60 * 24));
    document.getElementById("DManufacturing").innerHTML = DManufacturingdays;
   
    /**Installation Difference */
    var I1 = document.getElementById("Installation").value;
    var I2 = document.getElementById("AInstallation").value;
    const IS1 = new Date(I1);
    const IS2 = new Date(I2);
    const IStime = IS1 - IS2;
    const DInstallationdays = Math.floor(IStime / (1000 * 60 * 60 * 24));
    document.getElementById("DInstallation").innerHTML = DInstallationdays;
 
    /**Invoice Difference */
    var In1 = document.getElementById("Invoice").value;
    var In2 = document.getElementById("AInvoice").value;
    const Inv1 = new Date(In1);
    const Inv2 = new Date(In2);
    const Intime = Inv1 - Inv2;
    const DInvoicedays = Math.floor(Intime / (1000 * 60 * 60 * 24));
    document.getElementById("DInvoice").innerHTML = DInvoicedays;
    setUser({...user,DInvoice:DInvoicedays,DApproval:DApprovaldays,Dstudy:Dstudydays,DDesign:DDesigndays,DDesignConfirm:DDesignConfirmdays
    ,DPO:DPOdays,DPR:DPRdays,DManufacturing:DManufacturingdays,DQuotation:DQuotationdays,DInstallation:DInstallationdays,DSample:DSampledays, DSampleConfirm: DSampleConfirmadays});
    console.log(user);
  };

  const addUserDetails = async (e) => {
    e.preventDefault();
    await addUser(user);
    alert("Data upload successfully");
 
  };

  return (
    <div>
      <div className="jumbo-container">
        <h1 className="rhead"> Daily Activity</h1>
        <br />
        
        <form>
          <div className="importantbox">
            <div className="subimportant">
              {" "}
              <label className="label"> Order no </label> <br />
              <input
                type="number"
                name="order"
                className="inputbox"
                onChange={(e) => onValueChange(e)}
              ></input>
            </div>

            <div className="subimportant">
              <label>
                Project/Implementation:
                <br/>
                <select name="PI"
                 onChange={(e) => onValueChange(e)}
                >
                  <option>Select</option>
                  <option value="Project">Project</option>
                  <option value="Implementation">Implementation</option>
                </select>
              </label>
            </div>

            <div className="subimportant">
              <label className="label"> Activity</label>
              <br />
              <textarea
                name="activity"
                onChange={(e) => onValueChange(e)}
              ></textarea>
            </div>

            
            <button
              className="submit1"
              type="submit"
              onClick={(e) => addUserDetails(e)}
            >
              Submit
            </button>

            <Link to="/sample">
            <button className="report"> Report</button>{" "}
          </Link>
          <br/>

          </div>
          <br /> <div className="getdata"> 
          <h4>Plan</h4>
          <table>
            <thead>
              <tr>
                <th>Study</th>
                <th>Quotation</th>
                <th>Approval</th>
                <th>Purchase Request</th>
                <th>Purchase Order</th>
                <th>Design</th>
                <th>Design Confirmation</th>
                <th>Sample</th>
                <th>Sample Cofirmation</th>
                <th>Manufacturing</th>
                <th>Installation</th>
                <th>Invoice close</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="study" id="study"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="Quotation"
                    id="Quotation"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="Approval"
                    id="Approval"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="PR"
                    id="PR"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="PO"
                    id="PO"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="Design"
                    id="Design"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="DesignConfirm"
                    id="DesignConfirm"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="Sample"
                    id="Sample"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="SampleConfirm"
                    id="SampleConfirm"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="Manufacturing"
                    id="Manufacturing"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="Installation"
                    id="Installation"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="Invoice"
                    id="Invoice"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
              </tr>
            </thead>
          </table>
          <br />
          <br />

          <h4>Actual</h4>
          <table>
            <thead>
              <tr>
                <th>Study</th>
                <th>Quotation</th>
                <th>Approval</th>
                <th>Purchase Request</th>
                <th>Purchase Order</th>
                <th>Design </th>
                <th>Design Confirmation</th>
                <th>Sample</th>
                <th>Sample Confirmation</th>
                <th>Manufacturing</th>
                <th>Installation</th>
                <th>Invoice close</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="Astudy"
                    id="Astudy"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="AQuotation"
                    id="AQuotation"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="AApproval"
                    id="AApproval"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="APR"
                    id="APR"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="APO"
                    id="APO"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="ADesign"
                    id="ADesign"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="ADesignConfirm"
                    id="ADesignConfirm"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="ASample"
                    id="ASample"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="ASampleConfirm"
                    id="ASampleConfirm"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="AManufacturing"
                    id="AManufacturing"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="AInstallation"
                    id="AInstallation"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    className="date"
                    name="AInvoice"
                    id="AInvoice"
                    onChange={(e) => onValueChange(e)}
                  ></input>
                </td>
              </tr>
            </thead>
          </table>
          <br />

          <button
            className="submit"
            type="submit"
            onClick={(e) => handleCalculate(e)}
          >
            Calculate
          </button>
          <br />
          <br />

          <h4>Difference</h4>
          <table>
            <thead>
              <tr>
                <th>Study</th>
                <th>Quotation</th>
                <th>Approval</th>
                <th>Purchase Request</th>
                <th>Purchase Order</th>
                <th>Design</th>
                <th>Design Confirmation</th>
                <th>Sample</th>
                <th>Sample Confirmation</th>
                <th>Manufacturing</th>
                <th>Installation</th>
                <th>Invoice close</th>
              </tr>
              <tr>
                <td>
                  <h5 id="Dstudy"className="b1">{" "}</h5>
                </td>
                <td>
                  <h5 id="DQuotation" className="b1" > {" "} </h5>
                </td>
                <td>
                  <h5 id="DApproval"  className="b1" > {" "} </h5>
                </td>
                <td>
                  <h5 id="DPR"  className="b1"> {" "} </h5>
                </td>
                <td>
                  <h5 id="DPO" className="b1" > {" "} </h5>
                </td>
                <td>
                  <h5 id="DDesign" className="b1" >  {" "} </h5>
                </td>
                <td>
                  <h5 id="DDesignConfirm" className="b1" >  {" "} </h5>
                </td>
                <td>
                  <h5 id="DSample" className="b1">  {" "}  </h5>
                </td>
                <td>
                  <h5 id="DSampleConfirm" className="b1"> {" "}</h5>
                </td>
                <td>
                  <h5 id="DManufacturing" className="b1" > {" "} </h5>
                </td>
                <td>
                  <h5 id="DInstallation" className="b1"> {" "} </h5>
                </td>
                <td>
                  <h5 id="DInvoice" className="b1"  > {" "}</h5>
                </td>
              </tr>
            </thead>
          </table>
          </div>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
};
export default Implementation;
