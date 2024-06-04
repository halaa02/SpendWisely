import react,{useState} from "react";
import logo from './logo.svg';
import './App.css';

function AboutUs() {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[password,setPassword]=useState("")

  return (
    <body className="b1">
    <div class="container">
    <div class="section">
                <div class="title-box">
                <h2>Welcome to SpendWisely</h2>
                <div class="underline"> </div>

                <p>Your trusted companion in financial management and decision-making.</p>



                <h2>"Our Mission"</h2>

                <p class="description">At SpendWisely, we strive to empower individuals with the knowledge and tools to make informed financial decisions. We believe that by providing accessible resources and personalized guidance, we can help our users achieve financial freedom and security.</p>



            <div class="title-box3">
                <h2>Join Us  </h2> 
                <hr></hr>

            </div>

        </div>
        </div>
        </div>
        </body>
  )

}

export default AboutUs;