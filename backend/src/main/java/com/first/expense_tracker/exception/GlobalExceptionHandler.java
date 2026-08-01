package com.first.expense_tracker.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(
            ExpenseNotFoundException.class)
    public String handleExpenseNotFound(
            ExpenseNotFoundException ex){

        return ex.getMessage();
    }
}
