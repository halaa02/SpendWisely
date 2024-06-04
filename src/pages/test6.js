import React from "react";
import './App.css';
import { Add } from './add.js';


function MyForm() {
  return (
    <body className="BBody">
    <div className="h">
      <div className="a1"><h1>Food</h1></div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="radio" name="main-option" value="Groceries" />
          <span className="custom-checkbox"></span>
          Groceries
         </label>

        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Groceries" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Groceries" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Groceries" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      {/* الخيارات الرئيسية الأخرى هنا */}
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Dining Out" />
          <span className="custom-checkbox"></span>
          Dining Out
         </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Dining Out" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Dining Out" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Dining Out" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Meal" />
          <span className="custom-checkbox"></span>
          Meal Preparation Tools
        </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Meal" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Meal" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Meal" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Storage" />
          <span className="custom-checkbox"></span>
          Food Storage Items
        </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Storage" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Storage" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Storage" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Filtration" />
          <span className="custom-checkbox"></span>
          Water Filtration Systems
        </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Water Filtration Systems" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Water Filtration Systems" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Water Filtration Systems" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Home Costs" />
          <span className="custom-checkbox"></span>
          Home Growing Vegetables
                  </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Home " value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Home " value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Home " value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>


      
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Courses Costs" />
          <span className="custom-checkbox"></span>
          Garbage Bags
        </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Garbage Bags" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Garbage Bags" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Garbage Bags" value="Savings & Emergencies (20%)" />
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