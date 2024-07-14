package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.User;
import com.demo.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;
    
    @PostMapping("/signUp")
    public String signUp(@RequestBody User user) {
        userService.signUpUser(user);
        return "User added successfully";
    }
    
    @PostMapping("/signIn")
    public String signIn(@RequestParam String userName, @RequestParam String password) {
        User user = userService.signInUser(userName, password);
        if (user != null) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }

}
