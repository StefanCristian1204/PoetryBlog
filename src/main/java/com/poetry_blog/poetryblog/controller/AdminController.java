package com.poetry_blog.poetryblog.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("http://127.0.0.1:3000")
public class AdminController {
    @GetMapping("/")
    public String helloAdminController(){
        return "Hello admin access";
    }
}

