import axios from "axios";

const BASE_URL = "http://localhost:8080";

export  const getExpenses= async()=>{
const response=await axios.get(`${BASE_URL}/getExpenses`, {
            withCredentials: true
        });
return response.data;
}

export async function addExpense(expense) {
   const response=await axios.post(`${BASE_URL}/addExpense`,expense,{
    withCredentials:true
});
    return response.data;
} 

export async function deleteExpense(id) {
    const response=await axios.delete(`${BASE_URL}/deleteExpense/${id}`,{
    withCredentials:true
});
    return response.data;
}

export async function editExpense(id) {
    const response=await axios.get(`${BASE_URL}/editExpense/${id}`,{
    withCredentials:true
});
    return response.data;

}

export async function updateExpense(expense) {
    const response=await axios.put(`${BASE_URL}/updateExpense`,expense,{
    withCredentials:true
});
    return response.data;

}

export async function searchByTitle(title) {
    const response= await axios.get(`${BASE_URL}/searchByTitle?title=${title}`,{
    withCredentials:true
});
    return response.data;

}


export async function searchByCategory(category) {
    const response= await axios.get(`${BASE_URL}/searchByCategory?category=${category}`,{
    withCredentials:true
});
    return response.data;
    
}

