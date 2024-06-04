import React from "react";
import './App.css';
import { Add } from './add.js';


function MyForm() {
  return (
    <body className="BBody">  
    <div className="h">
      <div className="a1"><h1>Bills</h1></div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="radio" name="main-option" value="Electricity Bill" />
          <span className="custom-checkbox"></span>
          Electricity Bill
         </label>

        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Electricity Bill" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Electricity Bill" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Electricity Bill" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      {/* الخيارات الرئيسية الأخرى هنا */}
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Water Bill" />
          <span className="custom-checkbox"></span>
          Water Bill       </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Water Bill" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Water Bill" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Water Bill" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Internet Bill" />
          <span className="custom-checkbox"></span>
          Internet Bill
          </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Internet Bill" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Internet Bill" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Internet Bill" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Mobile Phone Bill" />
          <span className="custom-checkbox"></span>
          Mobile Phone Bill
         </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Mobile Phone Bill" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Mobile Phone Bill" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Mobile Phone Bill" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Rent Bill" />
          <span className="custom-checkbox"></span>
          Rent Bill
      </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Rent Bill" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Rent Bill" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Rent Bill" value="Savings & Emergencies (20%)" />
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