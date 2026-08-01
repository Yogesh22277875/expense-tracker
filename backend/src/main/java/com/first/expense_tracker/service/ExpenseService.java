package com.first.expense_tracker.service;

import com.first.expense_tracker.Entity.Expense;
import com.first.expense_tracker.Entity.User;
import com.first.expense_tracker.exception.ExpenseNotFoundException;
import com.first.expense_tracker.repository.ExpenseRepository;
import com.first.expense_tracker.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
public class ExpenseService {
    private ExpenseRepository expenseRepository;


   public  ExpenseService(ExpenseRepository expenseRepository){
        this.expenseRepository=expenseRepository;
    }

    @Autowired
    private userRepository userRepository;
   @Autowired
   private BCryptPasswordEncoder bCryptPasswordEncoder;

    public  List<Expense> getAllExpenses(int userId){
       return expenseRepository.findByUserId(userId);
    }

    public List<Expense> getAllExpenses(){
        return expenseRepository.findAll();
    }

    // add expense function
    public Expense addExpense(Expense expense){

        return expenseRepository.save(expense);
    }

    // find by id function

    public Expense getExpenseById(int id){

        return expenseRepository.findById(id).orElseThrow(()-> new ExpenseNotFoundException("Expense not found"));
    }

    // delete by useing id

    public void deleteExpenseById(int id){
       expenseRepository.deleteById(id);
    }

    // update

    public Expense expenseUpdate(Expense expense){
       LocalDate expenseDate=expenseRepository.findById(expense.getId()).get().getExpenseDate();
       expense.setExpenseDate(expenseDate);
       return expenseRepository.save(expense);
    }

    public List<Expense> getExpenseByCategory(String category,int userId){
       return expenseRepository.findByCategoryContainingAndUserId(category,userId);
    }

    public List<Expense> getExpenseByCategory(String category){
        return expenseRepository.findByCategoryContaining(category);
    }

    public List<Expense> getExpenseByTitle(String title,int userId) {
       return expenseRepository.findByTitleContainingAndUserId(title,userId);
    }

    public List<Expense> getExpenseByTitle(String title){
        return expenseRepository.findByTitleContaining(title);
    }

    public  Double getTotalExpense(int userId){
       return  expenseRepository.getTotalExpense(userId);
    }
    public  Double getTotalExpenseOfCategory( String category,int userId){
       return  expenseRepository.getTotalExpenseOfCategory(category,userId);
    }


    public Double getTotalExpenseOfCategory(String category){
        return expenseRepository.getTotalExpenseOfCategory(category);
    }


    public long getCountByCategory(String category,int userId){
       return expenseRepository.countByCategoryAndUserId(category,userId);
    }

    public long getCountByCategory(String category){
        return expenseRepository.countByCategory(category);
    }

    public long getTotalCount(int userId){
        return expenseRepository.countByUserId(userId);
    }

    public long getTotalCount(){
        return expenseRepository.count();
    }

    public Double getTotalExpense(){
        return expenseRepository.getTotalExpense();
    }

    public List<Expense> findByDate(LocalDate expenseDate,int userId){
       return expenseRepository.findByExpenseDateAndUserId(expenseDate,userId);
    }

    public List<Expense> findByDate(LocalDate expenseDate){
        return expenseRepository.findByExpenseDate(expenseDate);
    }


    // Create account

    public User createAccount(User user){
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
       return userRepository.save(user);
    }

    public Optional<User> findByUsername(String username){
        return  userRepository.findByUsername(username);
    }

    public  Optional<Expense> findById(int id){
        return expenseRepository.findById(id);
    }
}
