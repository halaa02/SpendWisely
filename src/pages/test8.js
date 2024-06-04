import React from "react";
import './App.css';
import {Fundeb}  from './fundebt.js';


function MyForm() {
    return (
        <body className="bdebt">
<div class="debt-container">
      <div class="debt-box"> 
       <div class="title">Debt Summary</div>
       <div class="questions-container">
         <div class="question-container">
           <div class="question-field">
             <div class="question">Mahmoud</div>
             <div class="price"> <span>15</span> $</div>
             <div class="date"> 15/08/2024 </div>
           </div>
         </div>
         <div class="question-container">
           <div class="question-field">
             <div class="question">Khalel</div>
             <div class="price"> <span>55</span> $</div>
             <div class="date"> 08/09/2024 </div>
           </div>
         </div> 
         <div class="question-container">
           <div class="question-field">
             <div class="question">Ahmad</div>
             <div class="price"> <span>100</span> $</div>
             <div class="date"> 22/12/2024 </div>
           </div>
         </div> 
         <button class="add-debt"> Add Debt </button>
       </div>
      </div>
       <form>
        <h2>Debt Form</h2>
        <label>Creditor Name:  <input type="text" placeholder="Enter Creditor Name"/></label>
        <label>Amount:  <input type="number" min="0" placeholder="Enter The Amount of Money "/></label>
        <label>End Date:  <input type="date" /></label>

        <input type="submit" value="Add Debt" />
       </form>
       <Fundeb/>

     </div>

     </body>
);
}

export default MyForm;