import react,{useState} from "react";
import logo from './logo.svg';
import './App.css';

function MyForm() {
  const[ name,setName]=useState("")
  const[age,setAge]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  

  return (
    
    <div className="main">
        
      <div className="form">
      <p><h1>Sign Up</h1></p>
      <div className="sighnup">
        
      <div class="header">

</div>

      <div>
        <label>First Name</label>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      </div>
      
       </div>

       <div className="email">
       <label>Email Address</label>
        <input className="emailinput" type="email"   onChange={(e) => setEmail(e.target.value)}
        value="hala.jamal@email.com"
        errorMessage="Enter a valid email address"
        clearButtonVisible/>

</div>

      
       <div className="sighnup">
          <div>
            <label>Create password</label>
            <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <label>Confirm password</label>
            <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
      <button onClick={()=>{
        window.alert("success")
      }}>create Account</button>

      </div>

    </div>
    
  )

}

export default MyForm;
 