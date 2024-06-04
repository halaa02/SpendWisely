import React from "react";
import './App.css';
import { Add } from './add.js';


function MyForm() {
  return (
    <body className="BBody">
    <div className="h">
      <div className="a1"><h1>Social</h1></div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="radio" name="main-option" value="Personal costs " />
          <span className="custom-checkbox"></span>
          Personal costs(skin care)
      </label>

        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Personal costs" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Personal costs" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Personal costs" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="radio" name="main-option" value="hair care " />
          <span className="custom-checkbox"></span>
          Personal costs(hair care)
      </label>

        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-hair care" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-hair care" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-hair care" value="Savings & Emergencies (20%)" />
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
          Travel expenses           </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Travel expenses " value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Travel expenses " value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Travel expenses " value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value=" sports expenses " />
          <span className="custom-checkbox"></span>
          Sports expenses 
          </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option- sports expenses " value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option- sports expenses " value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option- sports expenses " value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="medications " />
          <span className="custom-checkbox"></span>
          Trips expenses 
                   </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Trips Expenses " value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Trips Expenses  " value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Trips Expenses " value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Food costs for celebrations " />
          <span className="custom-checkbox"></span>
          Food costs for celebrations                </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Food costs for celebrations" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Food costs for celebrations" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Food costs for celebrations" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>
        </div>
      </div> 

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Eid expenses" />
          <span className="custom-checkbox"></span>
          Eid expenses
        </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-Eid expenses" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-Eid expenses" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-Eid expenses" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>  health check-ups
        </div>
      </div>

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Expenses for gifts" />
          <span className="custom-checkbox"></span>
          Expenses for gifts
         </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Expenses for gifts" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Expenses for gifts" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Expenses for gifts" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>  
        </div>
      </div>  

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Costs of shoes " />
          <span className="custom-checkbox"></span>
          Costs of shoes 
         </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of shoes " value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of shoes " value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of shoes " value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>  
        </div>
      </div> 

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Costs of jewelry & accessories" />
          <span className="custom-checkbox"></span>
          Costs of jewelry & accessories
         </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of jewelry & accessories" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of jewelry & accessories" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of jewelry & accessories" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>  
        </div>
      </div> 

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value="Costs of attire" />
          <span className="custom-checkbox"></span>
          Costs of attire
                  </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of attire" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of attire" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option-Costs of attire" value="Savings & Emergencies (20%)" />
            <span className="custom-checkbox"></span>
            Savings & Emergencies (20%)
          </label>  
        </div>
      </div>
       
       
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="main-option" value=" Party costs" />
          <span className="custom-checkbox"></span>
          Party costs              
              </label>
        <div className="nested-checkboxes">
          <label className="checkbox-label">
            <input type="radio" name="sub-option- Party costs" value="Basic Expenses (50%)" />
            <span className="custom-checkbox"></span>
            Basic Expenses (50%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option- Party costs" value="Supplementary Expenses (30%)" />
            <span className="custom-checkbox"></span>
            Supplementary Expenses (30%)
          </label>
          <label className="checkbox-label">
            <input type="radio" name="sub-option- Party costs" value="Savings & Emergencies (20%)" />
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