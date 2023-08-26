package com.poetry_blog.poetryblog.service;

import com.poetry_blog.poetryblog.dto.LoginResponseDTO;
import com.poetry_blog.poetryblog.dto.RegistrationDTO;
import com.poetry_blog.poetryblog.model.Role;
import com.poetry_blog.poetryblog.model.User;
import com.poetry_blog.poetryblog.repository.RoleRepository;
import com.poetry_blog.poetryblog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;

    public User registerUser(RegistrationDTO body) {
        String encodedPassword = passwordEncoder.encode(body.getPassword());
        Role userRole = roleRepository.findByAuthority("USER").get();
        Set<Role> authorities = new HashSet<>();
        authorities.add(userRole);
        boolean availableUsername = userRepository.findByUsername(body.getUsername()).isPresent();
        if(!availableUsername){
            System.out.println("-------- Authorities are : " + authorities);
        return userRepository.save(new User(body.getUsername(),
                authorities, body.getFirstName(), body.getLastName(),
                body.getCity(), body.getEmail(), encodedPassword,
                new ArrayList<>()
                ));
        }else {
            return null;
        }
    }

    public LoginResponseDTO loginUser(String username, String password) throws AuthenticationException {

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username,password)
            );
            String token = tokenService.generateJwt(auth);
            User user = userRepository.findByUsername(username).get();
            return new LoginResponseDTO(userRepository.findByUsername(username).get(),token);
        }catch (AuthenticationException e){
            return null;
        }
    }
}
