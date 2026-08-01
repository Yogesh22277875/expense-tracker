import { useState } from "react";
import { addExpense } from "../services/ExpenseService";
import { useNavigate } from "react-router-dom";

function AddExpense(){

    const navigate=useNavigate();
       const [expense,setExpense]=useState({title:"",amount:"",category:""});

     async  function handleSubmit(e){

    e.preventDefault();
    try{
    await addExpense(expense);
      setExpense({
        title: "",
        amount: "",
        category: ""

    });
    navigate("/");
       }
       catch{
        console.error(error);
       }
    }

    return(
          <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-success text-white">
                    <h3 className="text-center">Add Expense</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">
                                Title
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Expense Title"
                                onChange={(e)=>setExpense({...expense,title:e.target.value})}
                                value={expense.title}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Amount
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Amount"
                                  onChange={(e)=>setExpense({...expense,amount:e.target.value})}
                                value={expense.amount}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Category
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Category"
                                  onChange={(e)=>setExpense({...expense,category:e.target.value})}
                                value={expense.category}
                            />
                        </div>

                        <div className="text-center">

                            <button
                                type="submit"
                                className="btn btn-success me-2"
                               
                            >
                                Save
                            </button>

                            <button
                                type="reset"
                                className="btn btn-secondary"
                                onClick={()=>{ setExpense({...expense,title:"",amount:"",category:""})}}
                            >
                                Reset
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default AddExpense;