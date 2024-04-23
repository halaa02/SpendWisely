import react,{useState} from "react";
import logo from './logo.svg';
import './App.css';

function MyForm() {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[password,setPassword]=useState("")

  return (
    <div className="main">
      <div className="form">
      <p><h1>Sign In</h1></p>
      <div class="header">

</div>
      <p>Username
      </p>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      
  

      <p> password
      </p>
        <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
      <a href="#" className="a"><p id="txt1">forget your password</p></a>
      <button onClick={()=>{
        window.alert("success")
      }}>login</button>

      </div>

    </div>
    
  )

}

export default MyForm;
