package com.poetry_blog.poetryblog.controller;

import com.poetry_blog.poetryblog.dto.LoginResponseDTO;
import com.poetry_blog.poetryblog.dto.RegistrationDTO;
import com.poetry_blog.poetryblog.model.User;
import com.poetry_blog.poetryblog.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://127.0.0.1:3000")
public class AuthController {

    @Autowired
    public AuthenticationService authenticationService;

    @PostMapping("/register")
    public User registerUser(@RequestBody RegistrationDTO body){
        return authenticationService.registerUser(body);
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) throws AuthenticationException {
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }
}
