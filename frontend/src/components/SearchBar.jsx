import { useState } from "react";
import { getExpenses } from "../services/ExpenseService";
import { searchByTitle } from "../services/ExpenseService";
import { searchByCategory } from "../services/ExpenseService";


function SearchBar(props) {

  async function search(params) {
    if(props.searchType==="all"){
        const response=await getExpenses();
        props.setExpenses(response);
    }
    else if(props.searchType==="title"){
        const response=await searchByTitle(props.keyword);
        props.setExpenses(response);
    }
     else if(props.searchType==="category"){
        const response=await searchByCategory(props.keyword);
        props.setExpenses(response);
    }
  }

    return (

        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-body">

                    <div className="row g-3 align-items-center">

                        <div className="col-md-3">

                            <select value={props.searchType} className="form-select" onChange={async (e)=> {   if(e.target.value!=="all") props.setSearchType(e.target.value) ;
                              /*  else {const response=await getExpenses();
        props.setExpenses(response);
          props.setSearchType(e.target.value); */
          else {
    props.setSearchType(e.target.value);

    const response = await getExpenses();
    props.setExpenses(response);
}
                                
                            }}    >

                                <option value="all">
                                    All
                                </option>

                                <option value="title">
                                    Search By Title
                                </option>

                                <option value="category">
                                    Search By Category
                                </option>

                            </select>

                        </div>

                        <div className="col-md-6">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter keyword..."
                                value={props.keyword}
                                onChange={(e)=>props.setKeyword(e.target.value)}
                            />

                        </div>

                        <div className="col-md-3 d-grid">

                            <button
                                className="btn btn-primary"
                                onClick={search}
                            >
                                Search
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default SearchBar;