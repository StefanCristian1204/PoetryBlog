package com.poetry_blog.poetryblog.repository;

import com.poetry_blog.poetryblog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
     Optional<User> findByUsername(String username);
}
