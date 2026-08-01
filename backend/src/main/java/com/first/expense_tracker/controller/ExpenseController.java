/* package com.first.expense_tracker.controller;


import com.first.expense_tracker.Entity.Expense;
import com.first.expense_tracker.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ExpenseController {

    private ExpenseService expenseService;
    public ExpenseController(ExpenseService expenseService){
        this.expenseService=expenseService;
    }

    @GetMapping("/expenses")
    public List<Expense> getAllExpenses(){
        return expenseService.getAllExpenses();
    }

    @PostMapping("/expenses")
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseService.addExpense(expense);
    }

    @GetMapping("/expenses/{id}")

    public Expense getExpenseById(@PathVariable int id){
        return expenseService.getExpenseById(id);
    }

    @DeleteMapping("/expenses/{id}")

    public void deleteExpenseById(@PathVariable int id){
        expenseService.deleteExpenseById(id);
    }

    @PutMapping("/expenses/{id}")

    public Expense expenseUpdate(@PathVariable int id,@RequestBody Expense expense){
        expense.setId(id);
        return expenseService.expenseUpdate(expense);
    }



}
*/

