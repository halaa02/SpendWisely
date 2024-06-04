import React from "react"; 
import './App.css'; 
import { Add } from './add.js';

function MyForm() { return (
<body className="BBody">
  <div className="h">
    <div className="a1"><h1>Health</h1></div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="radio" name="main-option" value="Insurance " />
        <span className="custom-checkbox"></span>
        Health Insurance cost
      </label>

      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Insurance"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Insurance"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Insurance"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>

    {/* الخيارات الرئيسية الأخرى هنا */}
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" name="main-option" value="Nursing" />
        <span className="custom-checkbox"></span>
        Long-Term Care Expenses
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Nursing"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Nursing"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Nursing"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" name="main-option" value="Doctor visits" />
        <span className="custom-checkbox"></span>
        Doctor visits
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Doctor visits"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Doctor visits"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Doctor visits"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" name="main-option" value="medications " />
        <span className="custom-checkbox"></span>
        medications
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-medications "
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-medications "
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-medications "
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" name="main-option" value="Medical tests " />
        <span className="custom-checkbox"></span>
        Medical tests
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Medical tests"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Medical tests"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Medical tests"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" name="main-option" value="Vaccinations" />
        <span className="custom-checkbox"></span>
        Vaccinations
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Vaccinations"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Vaccinations"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Vaccinations"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
        health check-ups
      </div>
    </div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="main-option"
          value="Alternative Medicine Expenses"
        />
        <span className="custom-checkbox"></span>
        Alternative Medicine Expenses
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Alternative Medicine Expenses"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Alternative Medicine Expenses"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Alternative Medicine Expenses"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="main-option"
          value="Alternative Medicine Expenses"
        />
        <span className="custom-checkbox"></span>
        Medical Equipment and Supplies
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Medical Equipment and Supplies"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Medical Equipment and Supplies"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Medical Equipment and Supplies"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="main-option"
          value="Emergency medical treatments"
        />
        <span className="custom-checkbox"></span>
        Emergency medical treatments
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Emergency medical treatments"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Emergency medical treatments"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Emergency medical treatments"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>

    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" name="main-option" value="Surgical procedures" />
        <span className="custom-checkbox"></span>
        Surgical procedures
      </label>
      <div className="nested-checkboxes">
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Surgical procedures"
            value="Basic Expenses (50%)"
          />
          <span className="custom-checkbox"></span>
          Basic Expenses (50%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Surgical procedures"
            value="Supplementary Expenses (30%)"
          />
          <span className="custom-checkbox"></span>
          Supplementary Expenses (30%)
        </label>
        <label className="checkbox-label">
          <input
            type="radio"
            name="sub-option-Surgical procedures"
            value="Savings & Emergencies (20%)"
          />
          <span className="custom-checkbox"></span>
          Savings & Emergencies (20%)
        </label>
      </div>
    </div>
    <Add /> {/* استدعاء مكون Add هنا */}
  </div>
</body>

); } export default MyForm;
