import react,{useState, useEffect} from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

function MyForm() {
  const navigate = useNavigate();
    const[incomeData,setIncomeData]=useState({})
    const[expenseData,setExpenseData]=useState({})

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
          var incomeDataLocal = {...incomeData}
          var expenseDataLocal = {...expenseData}
            result.data.forEach(d=>{
              if (d['type'] == "Income"){
                if (!Object.keys(incomeDataLocal).includes(d['title'])){
                  incomeDataLocal[d['title']] = 0;
                }
                incomeDataLocal[d['title']] = incomeDataLocal[d['title']] + parseFloat(d['amount']);
              }else{
                if (!Object.keys(expenseDataLocal).includes(d['title'])){
                  expenseDataLocal[d['title']] = 0;
                }
                expenseDataLocal[d['title']] = expenseDataLocal[d['title']] + parseFloat(d['amount']);
              }
            })
          setIncomeData(incomeDataLocal)
          setExpenseData(expenseDataLocal)
        })
        .catch(error => {
          window.alert('something went wrong')
        });
    }
    useEffect(()=>{
      getData();
    },[])
  return (

    <div className="x">

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


    <div className="image-container">
<img></img></div> 

            <div className="d"><h2>Income</h2></div> 
            <div style={{width:"100%"}}>
              {Object.keys(incomeData).map(e=>(
                <div className="d1 col-4 m-2">
                  <h3>{e}</h3>
                  <h3>{incomeData[e]}</h3>
                </div>
              ))}
            </div>
            <div className="d"><h2>Expenses</h2></div> 
            <div style={{width:"100%"}}>
              {Object.keys(expenseData).map(e=>(
                <div className="d1 col-4 m-2">
                  <h3>{e}</h3>
                  <h3>{expenseData[e]}</h3>
                </div>
              ))}
            </div>
</div>


  );

}

export default MyForm;