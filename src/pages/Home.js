import react,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function MyForm() {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[password,setPassword]=useState("")

  return (
    <div className="home">
        <div className="homeHeader">
            <div className="homeImage">
                <h1>spend wisely</h1>
            </div>
            <div className="homeHeaderButtons">
                <Link to="/"><h2>Home</h2></Link>
                <Link to="/feature"><h2>Feature</h2></Link>
                <Link to="/aboutUs"><h2>About us</h2></Link>
                <button><Link to="/signin"><h3>Sign in</h3></Link></button>
                <button><Link to="/signup"><h3>Sign up</h3></Link></button>
            </div>
        </div>
        <div className="homeSection">
            <div>
                <h1 className="homeTitle">Your Best<br /> Money<br /> Management</h1>
                <h4 className="homeDescreption">Track your spending, create a<br /> budget, and make smart<br /> financial decisions.</h4>
            </div>
            <div className="homeSvg">

            </div>
        </div>
    </div>
    
  )

}

export default MyForm;
