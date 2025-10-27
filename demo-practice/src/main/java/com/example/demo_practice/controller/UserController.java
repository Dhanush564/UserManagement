package com.example.demo_practice.controller;


import com.example.demo_practice.model.User;
import com.example.demo_practice.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/adduser")
    User Newuser(@RequestBody User Newuser){
        return userRepo.save(Newuser);
    }

    @GetMapping("/getuser")
    List<User> getUser(){
        return userRepo.findAll();
    }







}
