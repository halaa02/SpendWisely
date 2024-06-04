import React, { useState } from "react";

function Add(pops) {
  const [inputValue, setInputValue] = useState(""); // استخدام حالة لتخزين قيمة الإدخال
  const [isAdded, setIsAdded] = useState(false);
  const [isValid, setIsValid] = useState(true); // حالة لتتبع صحة القيمة المدخلة

  const handleSubmit = (event) => {
    event.preventDefault(); 
    pops.onAddItem(inputValue)
    // قم بإرسال البيانات أو تنفيذ العملية المطلوبة
    setIsAdded(true); // تحديث الحالة لتشير إلى الإضافة الناجحة
  };

  // دالة للتعامل مع تغييرات الإدخال
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value); // تحديث قيمة الإدخال عند التغيير
    // التحقق من صحة القيمة المدخلة
    setIsValid(/^[A-Za-z\s]*$/.test(value)); // يقبل القيمة إذا كانت نصية فقط
  };

  return (
    <form  onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add more "
        className="input-box"

      />
      <button type="submit" className="submit-button">Submit</button>
      {isAdded && <p style={{ color: 'green' }}>Succsseful add ! </p>}
      {!isValid && (
        <p style={{ color: 'red' }}>Add just text !!</p>
      )}
    </form>
  );
}

export  {Add};