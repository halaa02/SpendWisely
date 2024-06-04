import React, { useState, useEffect } from "react";
import './App.css';

function MyForm() {
    const [debts, setDebts] = useState([]);
    const [formData, setFormData] = useState({
        creditorName: '',
        amount: '',
        endDate: ''
    });

    const getData = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "user_id": window.localStorage.getItem("id")
        });
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
        fetch("http://localhost:3007/get_debt", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result.data);
            var dataLocal = [...debts]
              result.data.forEach(d=>{
                dataLocal.push({
                  creditorName: d['creditor_name'],
                  amount: d['amount'],
                  endDate: d['end_date'],
                })
    
              })
              setDebts(dataLocal)
          })
          .catch(error => {
            window.alert('something went wrong')
          });
      }
      useEffect(()=>{
        getData();
      },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDebts([...debts, formData]);
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "creditor_name": formData['creditorName'],
      "amount": formData['amount'],
      "end_date": formData['endDate'],
      "user_id": window.localStorage.getItem("id")
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3007/add_debt", requestOptions)
      .then(response => response.json())
      .then(result => {
      })
      .catch(error => {
        window.alert('something went wrong')
      });
        setFormData({ creditorName: '', amount: '', endDate: '' });
    };

    return (
        <div className="bdebt">
            <form onSubmit={handleSubmit} className="debt-form">
                <div className="t111">
                    <label className="t1">Creditor Name:
                        <input
                            className="t11"
                            type="text"
                            name="creditorName"
                            value={formData.creditorName}
                            onChange={handleChange}
                            placeholder="Enter Creditor Name"
                        />
                    </label>
                </div>
                <div className="t222">
                    <label className="t2">Amount:
                        <input
                            className="t22"
                            type="number"
                            name="amount"
                            min="0"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Enter The Amount of Money"
                        />
                    </label>
                </div>
                <div className="t333">
                    <label className="t3">End Date:
                        <input
                            className="t33"
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <input className="tt" type="submit" value="Add Debt" />
            </form>

            <table className="debt-table">
                <thead>
                    <tr>
                        <th>Creditor Name</th>
                        <th>Amount</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {debts.map((debt, index) => (
                        <tr key={index}>
                            <td>{debt.creditorName}</td>
                            <td>{debt.amount}</td>
                            <td>{debt.endDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyForm;