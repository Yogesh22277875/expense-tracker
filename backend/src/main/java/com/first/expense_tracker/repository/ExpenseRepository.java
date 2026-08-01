package com.first.expense_tracker.repository;

import com.first.expense_tracker.Entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

    List<Expense> findByCategoryAndUserId(String category,int userId);


    List<Expense> findByTitleContainingAndUserId(String title,int userId);
    List<Expense> findByCategoryContainingAndUserId(String category,int userId);

    @Query("select sum(e.amount) from Expense e Where e.user.id=:userId")
    Double getTotalExpense(@Param("userId") int userId);

    @Query("select sum(e.amount) from Expense e where e.category= :category and e.user.id=:userId")
    Double getTotalExpenseOfCategory(@Param("category") String category,@Param("userId") int userId);

    long countByCategoryAndUserId(String category,int userId);

    List<Expense> findByExpenseDateAndUserId(LocalDate expenseDate,int UserId);

    List<Expense> findByUserId(int userid);

    long countByUserId(int userId);


    List<Expense> findByCategoryContaining(String category);

    List<Expense> findByTitleContaining(String title);

    List<Expense> findByExpenseDate(LocalDate expenseDate);

    @Query("select sum(e.amount) from Expense e")
    Double getTotalExpense();

    @Query("select sum(e.amount) from Expense e where e.category=:category")
    Double getTotalExpenseOfCategory(@Param("category") String category);

    long countByCategory(String category);
}
