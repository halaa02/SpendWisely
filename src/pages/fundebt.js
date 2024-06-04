import React, { useState } from "react";
import './App.css';

function Fundeb() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddDebtClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="debt-container">
      <button className="add-debt" onClick={handleAddDebtClick}>Add Debt</button>
      {isFormVisible && (
        <form>
          {/* Your form fields go here */}
          <input type="text" placeholder="Enter debt details" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export  {Fundeb};
