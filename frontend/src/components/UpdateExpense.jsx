import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { editExpense } from "../services/ExpenseService";
import { updateExpense } from "../services/ExpenseService";
import { useNavigate } from "react-router-dom";




function UpdateExpense() {

    const {id}=useParams();
    const navigate=useNavigate();

    const[expense,setExpense]=useState({title:"",amount:"",category:""});

    async function handleSubmit(e) {
        e.preventDefault();
       
       try {
        await updateExpense(expense);
        navigate("/");
       }
      catch (error) {
    console.error(error);
}

    }

    async function fillValues() {
        const response=await editExpense(id);
       setExpense(response);
    }

    useEffect(()=>{
       fillValues();
    },[])

    return (
        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-warning text-dark">
                    <h3 className="text-center">Update Expense</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={ handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">
                                Title
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Expense Title"
                                value={expense.title}
                                onChange={(e)=>{setExpense({...expense,title:e.target.value})}}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Amount
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Expense Amount"
                                 value={expense.amount}
                                  onChange={(e)=>{setExpense({...expense,amount:e.target.value})}}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Category
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Expense Category"
                                 value={expense.category}
                                  onChange={(e)=>{setExpense({...expense,category:e.target.value})}}
                            />
                        </div>

                        <div className="text-center">

                            <button
                                type="submit"
                                className="btn btn-warning me-2"
                                
                            >
                                Update Expense
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={()=> navigate("/")}
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default UpdateExpense;