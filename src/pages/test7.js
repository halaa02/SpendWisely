import React, { useState } from "react";
import './App.css';
import { Add } from './add.js';


function MyForm() {
  const [data, setData]= useState([
    "University Costs",
    "School Costs",
    "Preschool Costs",
    "Courses Costs",
  ]);

  return (
    <body className="BBody">
    <div className="h">
      <div className="a1"><h1>Education</h1></div>
      {data.map(d=>(
      <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="radio" name="main-option" value={d} />
        <span className="custom-checkbox"></span>
        {d}
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input type="radio" name="sub-option-university" value="Basic Expenses (50%)" />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input type="radio" name="sub-option-university" value="Supplementary Expenses (30%)" />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input type="radio" name="sub-option-university" value="Savings & Emergencies (20%)" />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>
      ))}
      <Add onAddItem={(val)=>{
        var dataLocal = [...data];
        dataLocal.push(val);
        setData(dataLocal)
      }} /> {/* استدعاء مكون Add هنا */}

    </div>
    </body>
  );
}

export default MyForm;