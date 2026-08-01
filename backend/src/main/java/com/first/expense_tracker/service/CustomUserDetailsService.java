package com.first.expense_tracker.service;

import com.first.expense_tracker.Entity.User;
import com.first.expense_tracker.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private userRepository userRepository;
 //   @Autowired
 //   private UserDetailsImpl userDetailsImpl;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> opt=userRepository.findByUsername(username);
        if(opt.isPresent()){
            return  new UserDetailsImpl(opt.get());
        }
        else{
            throw new UsernameNotFoundException("user not found ");
        }
    }
}
