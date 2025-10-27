package com.example.demo_practice.repository;

import com.example.demo_practice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {

}
