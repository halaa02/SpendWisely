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
      <p>Username
      </p>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      
  

      <p> password
      </p>
        <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
      
      <button onClick={()=>{
        window.alert("success")
      }}>reset password</button>

      </div>

    </div>
    
  )

}

export default MyForm;
