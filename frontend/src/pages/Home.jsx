import ExpenseList from "../components/ExpenseList";
import AddExpense from "../components/AddExpense";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState } from "react";


function Home(){

    const [expenses,setExpenses]=useState([]);
    const [keyword, setKeyword] = useState("");
    const [searchType, setSearchType] = useState("all");
 

    return (
         <div className="container mt-4">

          
              <SearchBar expenses={expenses} setExpenses={setExpenses} keyword={keyword} setKeyword={setKeyword} searchType={searchType} setSearchType={setSearchType}/>
            <ExpenseList expenses={expenses} setExpenses={setExpenses}/>

        </div>
    )
}

export default Home;