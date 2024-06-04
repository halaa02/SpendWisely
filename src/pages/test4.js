import React from "react";
import './App.css';
import { Add } from './add.js';


function MyForm() {
  return (
    <body className="BBody">
    <div className="h">
      <div className="a1"><h1>Transportation</h1></div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="radio" name="main-option" value="Fuel " />
          <span className="custom-checkbox"></span>
          Fuel
         </label>

        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Fuel" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Fuel" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Fuel" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      {/* الخيارات الرئيسية الأخرى هنا */}
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Fees" />
          <span className="custom-checkbox"></span>
          Parking Fees
         </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Fees" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Fees" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Fees" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Car Insurance" />
          <span className="custom-checkbox"></span>
          Car Insurance
          </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Car Insurance" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Car Insurance" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Car Insurance" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Bus Costs " />
          <span className="custom-checkbox"></span>
          Bus Costs  
         </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Bus Costs " value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Bus Costs " value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Bus Costs " value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Airline tickets" />
          <span className="custom-checkbox"></span>
          Airline tickets
                </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Airline tickets" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Airline tickets" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Airline tickets" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div> 

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Taxi costs" />
          <span className="custom-checkbox"></span>
          Taxi costs
        </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Taxi costs" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Taxi costs" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Taxi costs" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div> 
     
      <Add /> {/* استدعاء مكون Add هنا */}

    </div>
    </body>
    
  );
}

export default MyForm;