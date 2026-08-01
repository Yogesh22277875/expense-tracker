package com.first.expense_tracker.exception;

import org.springframework.web.bind.annotation.RestControllerAdvice;


public class ExpenseNotFoundException extends RuntimeException{

 public   ExpenseNotFoundException(String message){
     super(message);
 }

}
