package com.poetry_blog.poetryblog;

import com.poetry_blog.poetryblog.model.Role;
import com.poetry_blog.poetryblog.model.User;
import com.poetry_blog.poetryblog.repository.RoleRepository;
import com.poetry_blog.poetryblog.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class PoetryBlogApplication {


    public static void main(String[] args) {
        SpringApplication.run(PoetryBlogApplication.class, args);
    }

    @Bean
    CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncoder){
        return args -> {
            if(roleRepository.findByAuthority("ADMIN").isPresent()) return;

            Role adminRole = roleRepository.save(new Role("ADMIN"));
            roleRepository.save(new Role("USER"));

            Set<Role> roles = new HashSet<>();
            roles.add(adminRole);

            User admin = new User(1L,"admin",roles,"Stefan","Serban","Constanta","stefan.serban@yahoo.com",passwordEncoder.encode("password"),new ArrayList<>());
            userRepository.save(admin);
        };
    }
}
