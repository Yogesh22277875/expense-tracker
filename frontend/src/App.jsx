import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddExpense from "./components/AddExpense";
import AddExpensePage from "./pages/addExpensePage";
import EditExpensePage from "./pages/EditExpensePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";

function App(){
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>}/>
<Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
<Route path="/addExpense" element={<ProtectedRoute><AddExpensePage/></ProtectedRoute>}/>
<Route path="/editExpense/:id" element={<ProtectedRoute><EditExpensePage/></ProtectedRoute>}/>
    </Routes>
<Footer/>
    </>
   
  )
}

export default App;