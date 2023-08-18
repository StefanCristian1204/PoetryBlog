package com.poetry_blog.poetryblog.service;

import com.poetry_blog.poetryblog.exception.UserNotFoundException;
import com.poetry_blog.poetryblog.model.User;
import com.poetry_blog.poetryblog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public User updateUser(User newUser, Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setCity(newUser.getCity());
                    user.setEmail(newUser.getEmail());
                    user.setRole(newUser.getRole());
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    public String deleteUser(Long id) {
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted successfully.";
    }
}
