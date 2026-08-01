package com.first.expense_tracker.controller;

import com.first.expense_tracker.Entity.Expense;
import com.first.expense_tracker.Entity.User;
import com.first.expense_tracker.service.ExpenseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173",
        allowCredentials = "true"
)
public class ExpenseRestController {

    @Autowired
    ExpenseService expenseService;

    @GetMapping("/getExpenses")
     public   List<Expense> getExpenses(Authentication authentication){
      Optional<User> user= expenseService.findByUsername(authentication.getName());
        return expenseService.getAllExpenses(user.get().getId());
        }

        @PostMapping("/addExpense")
    public Expense addExpense(@RequestBody Expense expense,Authentication authentication){
            Optional<User> user= expenseService.findByUsername(authentication.getName());
            expense.setUser(user.get());
        return expenseService.addExpense(expense);
        }

        @DeleteMapping("/deleteExpense/{id}")
    public void deleteExpense(@PathVariable int id){
         expenseService.deleteExpenseById(id);
        }

        @GetMapping("/editExpense/{id}")
    public Expense editExpense(@PathVariable int id,Authentication authentication){
            Optional<User> user= expenseService.findByUsername(authentication.getName());
            Expense expense=expenseService.getExpenseById(id);
        if(expense.getUser().getId()==user.get().getId()){
        return expenseService.getExpenseById(id);
        }
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Access Denied");
    }

        @PutMapping("/updateExpense")
    public  Expense updateExpense(@RequestBody Expense expense,Authentication authentication){
            Optional<User> user= expenseService.findByUsername(authentication.getName());
            expense.setUser(user.get());
        return expenseService.expenseUpdate(expense);
        }

        @GetMapping("/searchByTitle")

    public List<Expense> searchByTitle(@RequestParam String title,Authentication authentication){
            Optional<User> user= expenseService.findByUsername(authentication.getName());

        return expenseService.getExpenseByTitle(title,user.get().getId());
        }

        @GetMapping("/searchByCategory")
    public  List<Expense> searchByCategory(@RequestParam String category,Authentication authentication){
            Optional<User> user= expenseService.findByUsername(authentication.getName());

        return expenseService.getExpenseByCategory(category,user.get().getId());
        }


    @PostMapping("/register")
    public User register(@RequestBody User user){
        return expenseService.createAccount(user);
    }


    @GetMapping("/me")
    public ResponseEntity<?> me(Authentication authentication) {

        if (authentication == null ||
                authentication instanceof AnonymousAuthenticationToken) {

            return ResponseEntity.status(401).body("Not Logged In");
        }

        return ResponseEntity.ok(authentication.getName());
    }
}
