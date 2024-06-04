import react,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";

function MyForm() {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[password,setPassword]=useState("")
  const navigate = useNavigate();

  function login (){
    if (name == '' || password == ''){
      window.alert('something went wrong')
      return
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": name,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3007/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.message == 'Login successful'){
          window.localStorage.setItem("name",result.userName)
          window.localStorage.setItem("id",result.id)
          navigate("/dashboard");
        }
       
      })
      .catch(error => {
        window.alert('something went wrong')
      });
  }
  return (
    <div className="main">
      <div className="form">
      <p><h1>Sign In</h1></p>
      <div class="header">

</div>
      <p>Email
      </p>
        <input type="email" value={name}  onChange={(e) => setName(e.target.value)}/>
      <p> Password
      </p>
        <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
      {/* <a href="#" className="a"><p id="txt1">forget your password</p></a> */}
      <button onClick={()=>login()}>login</button>

      </div>

    </div> 
  )
}
export default MyForm;