import { useEffect, useState } from "react";
import { getExpenses } from "../services/ExpenseService";
import { deleteExpense } from "../services/ExpenseService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function ExpenseList(props) {

   // const [expenses,setExpenses]=useState([]);
   const navigate=useNavigate();

    async function fetchExpenses() {
        const response = await getExpenses();
      console.log("Expenses:", response);
    console.log("Count:", response.length);
        props.setExpenses(response);
    }

    async function handleDelete(id) {
       if(window.confirm("Are You sure ?")){
            await deleteExpense(id);
            fetchExpenses();
        }

    }

    useEffect(()=>{
    fetchExpenses();
    },[]);

    return (
        <>
          <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h3 className="text-center">Expense Tracker</h3>
                </div>

                <div className="card-body">

                    <div className="d-flex justify-content-between mb-3">

                        <h4>Expense List</h4>
 <Link
                    to="/addExpense"
                    className="btn btn-success"
                >
                    + Add Expense
                </Link>

                    </div>

                    <table className="table table-bordered table-hover text-center">

                        <thead className="table-dark">

                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>

                        </thead>

                        <tbody>
                       
                       {  props.expenses.map((e)=>{ 
                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                <td>{e.amount}</td>
                                <td>{e.category}</td>
                                
                                <td>

                                    <button className="btn btn-warning btn-sm me-2" onClick={()=>navigate(`/editExpense/${e.id}`)}>
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm" onClick={()=>{
                                        handleDelete(e.id);
                                    }}>
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        )
                         })
                        }
                        
                           
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
        </>

    );
}

export default ExpenseList;