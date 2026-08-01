/*package com.first.expense_tracker.controller;


import com.first.expense_tracker.Entity.Expense;
import com.first.expense_tracker.Entity.User;
import com.first.expense_tracker.service.ExpenseService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;

@Controller
public class ExpenseViewController {

    public ExpenseService expenseService;
    public ExpenseViewController(ExpenseService expenseService){
        this.expenseService=expenseService;
    }

    @GetMapping("/")
    public String home(Principal principal) {
        return "index";
    }

    @PostMapping("/addExpense")
    public String addExpense(Expense expense,Principal principal){
        expense.setExpenseDate(LocalDate.now());
      User user  =expenseService.findByUsername(principal.getName()).orElseThrow(() ->
              new RuntimeException("User not found"));;
      expense.setUser(user);
        expenseService.addExpense(expense);
        return "redirect:/";
    }

    @GetMapping("/viewExpenses")

    public String viewExpenses(Model model,Principal principal){
        User user  =expenseService.findByUsername(principal.getName()).orElseThrow(() ->
                new RuntimeException("User not found"));
  model.addAttribute("expenses",expenseService.getAllExpenses(user.getId()));
        helper(model,user.getId());
  return "home";
    }

    @GetMapping("/delete/{id}")

    public String deleteExpense(@PathVariable int id,Model model,Principal principal){
        User user  =expenseService.findByUsername(principal.getName()).orElseThrow(() ->
                new RuntimeException("User not found"));

        Expense expense=expenseService.findById(id).orElseThrow(() ->
                new RuntimeException("Expense not found"));

        if(expense.getUser().getId()==user.getId()) {
            expenseService.deleteExpenseById(id);
        }
        else {
            throw new RuntimeException("Access Denied");
        }


        return "redirect:/viewExpenses";
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable int id,Model model,Principal principal){

        User user  =expenseService.findByUsername(principal.getName()).orElseThrow(() ->
                new RuntimeException("User not found"));

        Expense expense=expenseService.findById(id).orElseThrow(() ->
                new RuntimeException("Expense not found"));

        if(expense.getUser().getId()==user.getId()) {
            model.addAttribute("expense", expenseService.getExpenseById(id));
        }
        else{
            throw new RuntimeException("Access Denied");
        }
        return "edit";
    }

    @PostMapping("/update")
    public String update(Expense expense,Principal principal){
        User user  =expenseService.findByUsername(principal.getName()).orElseThrow(() ->
                new RuntimeException("User not found"));
        Expense expense2=expenseService.findById(expense.getId()).orElseThrow(() ->
                new RuntimeException("Expense not found"));

        if(expense2.getUser().getId()==user.getId()) {
            expense.setUser(user);
            expenseService.expenseUpdate(expense);
        }
        else{
            throw new RuntimeException("Access Denied");
        }
        return "redirect:/viewExpenses";
    }

    @GetMapping("/search")
    public String getExpenseByCategory(Model model,@RequestParam String category,Principal principal){
        User user=expenseService.findByUsername(principal.getName()).orElseThrow(() ->
                new RuntimeException("User not found"));
        model.addAttribute("expenses",expenseService.getExpenseByCategory(category, user.getId()));

       helper(model, user.getId());
        return "home";
    }



    @GetMapping("/searchTitle")
    public String getExpenseByTitle(@RequestParam String title,Model model,Principal principal){
        User user=expenseService.findByUsername(principal.getName()).orElseThrow(() ->
                new RuntimeException("User not found"));
        model.addAttribute("expenses",expenseService.getExpenseByTitle(title, user.getId()));
       helper(model, user.getId());
        return "home";
    }

    @GetMapping("/searchDate")
    public  String findByLocalDate(@RequestParam LocalDate expenseDate,Model model,Principal principal){
        User user=expenseService.findByUsername(principal.getName()).orElseThrow(() ->
                new RuntimeException("User not found"));
       model.addAttribute( "expenses",expenseService.findByDate(expenseDate,user.getId()));
        helper(model, user.getId());
        return "home";
    }

    public void helper(Model model,int userId) {
        model.addAttribute("totalExpense",expenseService.getTotalExpense(userId));
        model.addAttribute("foodTotal",expenseService.getTotalExpenseOfCategory("food",userId) );
        model.addAttribute("travelTotal",expenseService.getTotalExpenseOfCategory("travel",userId) );
        model.addAttribute("educationTotal",expenseService.getTotalExpenseOfCategory("education",userId) );
        model.addAttribute("entertainmentTotal",expenseService.getTotalExpenseOfCategory("entertainment",userId) );
        model.addAttribute("foodCount",expenseService.getCountByCategory("food",userId));
        model.addAttribute("travelCount",expenseService.getCountByCategory("travel",userId));
        model.addAttribute("educationCount",expenseService.getCountByCategory("education",userId));
        model.addAttribute("entertainmentCount",expenseService.getCountByCategory("entertainment",userId));
        model.addAttribute("totalCount",expenseService.getTotalCount(userId));
    }


    @GetMapping("/registerform")
    public  String register(){
        return "register";
    }

    @GetMapping("/loginform")
    public  String loginForm() {
        return "login";
    }

    // create account
    @PostMapping("/register")
    public String createAccount(User user){
        expenseService.createAccount(user);
        return "login";
    }
}
*/