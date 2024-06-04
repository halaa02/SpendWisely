import react,{useState} from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

function MyForm() {
  const navigate = useNavigate();
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[password,setPassword]=useState("")


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

            <div className="d"><h2>Expenses</h2></div> 
            <div className="d01">
            <button className="d1" onClick={()=>{navigate("/test5")}}><h3>Bills</h3></button>
            <button className="d2" onClick={()=>{navigate("/test7")}}><h3>Education</h3></button>
            <button className="d3" onClick={()=>{navigate("/test6")}}><h3>Food and Beverage</h3></button>
            </div>
            <div className="d02">

            <button className="d5" onClick={()=>{navigate("/test4")}}><h3>Transportation</h3></button>
            <button className="d6" onClick={()=>{navigate("/test2")}}><h3>Health</h3></button>
            <button className="d7" onClick={()=>{navigate("/test")}}><h3>Social</h3></button>

            </div>
            <div className="d03">

            <button className="d10" onClick={()=>{navigate("/test9")}}><h3>Entertainment</h3></button>
            <button className="d11" onClick={()=>{navigate("/test10")}}><h3>Maintenance and repairs</h3></button>
            <button className="d12" onClick={()=>{navigate("/test8")}}><h3>Debt and Loan</h3></button>


            </div>
            <div className="d04">
            <button className="d13" onClick={()=>{navigate("/test")}}><h3>other</h3></button>

            </div>







<div className="BB">
<div className="B1">
<h2>Basic Expenses (50%)</h2>
</div>

<div className="B2">
<h2>Supplementary Expenses (30%)</h2>
</div>

<div className="B3">
<h2>Savings & Emergencies (20%)</h2>
</div>
</div>
</div>


  );

}

export default MyForm;