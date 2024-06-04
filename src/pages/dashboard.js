import React, { useState, useEffect } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

function MyForm() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  
  // Error states for each field
  const [titleError, setTitleError] = useState(false);
  const [subtitleError, setSubtitleError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [typeError, setTypeError] = useState(false);

  // Function to handle input change and update error state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'title':
        setTitle(value);
        setTitleError(value === "");
        break;
      case 'subtitle':
        setSubtitle(value);
        setSubtitleError(value === "");
        break;
      case 'amount':
        setAmount(value);
        setAmountError(value === "");
        break;
      default:
        break;
    }
  };
  const getData = () =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "user_id": window.localStorage.getItem("id")
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3007/get_financial_entry", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data);
        var dataLocal = [...data]
      var m = new Date();
      var dateString =
          m.getUTCFullYear() + "/" +
          ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
          ("0" + m.getUTCDate()).slice(-2) + " " +
          ("0" + m.getUTCHours()).slice(-2) + ":" +
          ("0" + m.getUTCMinutes()).slice(-2) + ":" +
          ("0" + m.getUTCSeconds()).slice(-2);
          result.data.forEach(d=>{
            dataLocal.push({
              title: d['title'],
              subtitle: d['subtitle'],
              date: dateString,
              type: d['type'],
              amount: d['amount'],
            })

          })
      setData(dataLocal)
      })
      .catch(error => {
        window.alert('something went wrong')
      });
  }
  useEffect(()=>{
    getData();
  },[])
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any required field is empty
    if (title === "" || subtitle === "" || amount === "" || type === "") {
      // Display error messages for unfilled fields
      if (title === "") setTitleError(true);
      if (subtitle === "") setSubtitleError(true);
      if (amount === "") setAmountError(true);
      if (type === "") setTypeError(true);
    } else {
      setTypeError(false)
      var dataLocal = [...data]
      var m = new Date();
      var dateString =
          m.getUTCFullYear() + "/" +
          ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
          ("0" + m.getUTCDate()).slice(-2) + " " +
          ("0" + m.getUTCHours()).slice(-2) + ":" +
          ("0" + m.getUTCMinutes()).slice(-2) + ":" +
          ("0" + m.getUTCSeconds()).slice(-2);

      dataLocal.push({
        title: title,
        subtitle: subtitle,
        date: dateString,
        type: type,
        amount: amount,
      })
      setData(dataLocal)
      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "title": title,
      "subtitle": subtitle,
      "amount": amount,
      "type": type,
      "user_id": window.localStorage.getItem("id")
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3007/add_financial_entry", requestOptions)
      .then(response => response.json())
      .then(result => {
      })
      .catch(error => {
        window.alert('something went wrong')
      });
      setTitle("")
      setSubtitle("")
      setAmount("")
      setType("")
      var totalLocal = 0;
      var totalIncomeLocal = 0;
      var totalExpenseLocal = 0;
      dataLocal.forEach(d=>{
        if (d['type'] == "Income"){
          totalLocal = totalLocal + parseFloat(d['amount'])
          totalIncomeLocal = totalIncomeLocal + parseFloat(d['amount'])
        } else {
          totalLocal = totalLocal - parseFloat(d['amount'])
          totalExpenseLocal = totalExpenseLocal - parseFloat(d['amount'])
        }
      });
      setTotal(totalLocal)
      setTotalIncome(totalIncomeLocal)
      setTotalExpense(totalExpenseLocal)
    }
  }

  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div className="x0"><h3 id="x01"> Spend Wisely</h3></div>
          <div className="x02">
            <nav role="navigation" class="x03">
              <button  id="myButton" onClick={()=>{navigate('/dashboard')}}><h2>Home</h2></button>
              <button  id="myButton" onClick={()=>{navigate('/report')}}><h2>Report</h2></button>
              <button id="myButton" onClick={()=>{
              navigate("/");
            }}><h2>Logout</h2></button>
            </nav>
          </div> 
        </div>
    <div className="mainprofile">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h1>Welcome,<br />{window.localStorage.getItem("name")}</h1>
        </div>
        <div style={{display:"flex", justifyContent: "space-between",
              alignItems: "center",padding: 1}}>
          <div
            style={{
              width:"30%",
              padding: 2,
              borderRadius:'10px' , 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
          >
            <div>
              <p style={{fontSize: "20px", fontWeight:"600"}}>Total</p>
              <p style={{ fontSize: "24px", color: "green", fontWeight:"600" }}>{total} JOD</p>
            </div>
          </div>
          <div
            style={{
              width:"30%",
              padding: 2,
              borderRadius:'10px' , 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
          >
            <div>
              <p style={{fontSize: "20px", fontWeight:"600"}}>Income</p>
              <p style={{ fontSize: "24px", color: "green", fontWeight:"600" }}>{totalIncome} JOD</p>
            </div>
          </div>
          <div
            style={{
              width:"30%",
              padding: 2,
              borderRadius:'10px' , 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
          >
            <div>
              <p style={{fontSize: "20px", fontWeight:"600"}}>Expense</p>
              <p style={{ fontSize: "24px", color: "red", fontWeight:"600" }}>{totalExpense} JOD</p>
            </div>
          </div>
        </div>
        <h1>History</h1>
        <div style={{display:"flex", width:"100%"}}>
        <div className="information" style={{width: "70%"}}>
        <div  style={{color:'black',display: 'flex', justifyContent: 'space-between',borderRadius:'10px' , paddingRight:'3rem', paddingLeft:'3rem', alignItems:'center'}}>
          <p style={{fontWeight: 'bold'}}>Title</p>
          <p style={{fontWeight: 'bold'}}>Date</p>
          <p style={{fontWeight: 'bold'}}>Type</p>
          <p style={{fontWeight: 'bold'}}>Amount</p>
        </div>
        {data.map(d=>(
          <div key={d['title']}  style={{color:'black',display: 'flex', justifyContent: 'space-between',borderRadius:'10px' , marginTop:'1rem', paddingRight:'3rem', paddingLeft:'3rem', alignItems:'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div>
              <p style={{fontWeight: 'bold',fontSize:"20px"}}>{d['title']}</p>
              <p>{d['subtitle']}</p>
            </div>
            <p>{d['date']}</p>
            <p>{d['type']}</p>
            <p style={{ fontSize: "20px", color: d['type'] =="Income" ? "green" : "red", fontWeight:"600" }}>{d['amount']} Jod</p>
          </div>
        ))}
      </div>
      <div
      className="finaly"
        style={{
          padding: 20,width: "25%"
        }}
      >
        <h3>Add New</h3>
        <input style={{ width: "100%" }} name="title" placeholder={"Title"} onChange={handleInputChange} value={title} />
        {titleError && <p style={{color:"red"}}>Title is Empty</p>}
        <input style={{ width: "100%" }} name="subtitle" placeholder={"Sub Title"} onChange={handleInputChange} value={subtitle} />
        {subtitleError && <p style={{color:"red"}}>Sub Title is Empty</p>}
        <input
          style={{ width: "100%" }}
          name={"amount"}
          type={"number"}
          value={amount}
          onChange={handleInputChange}
          placeholder={"Amount"}
        />
        {amountError && <p style={{color:"red"}}>Amount is Empty</p>}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="submit-btn" onClick={()=>{setType("Income")}} style={{background: type=="Income"? 'green' : ' white', color:type=="Income"? 'white' : "black"}}>Income</button>
          <button className="submit-btn" onClick={()=>{setType("Expense")}} style={{background: type=="Expense"? 'red' : ' white', color:type=="Expense"? 'white' : "black"}}>Expense</button>
        </div>
        {typeError && <p style={{color:"red"}}>Type is Empty</p>}
        <button className="submit-btn" onClick={handleSubmit}>Save</button>
      </div>
        </div>
    </div>
    </>
  );
}

export default MyForm;
