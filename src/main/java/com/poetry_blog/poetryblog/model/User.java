package com.poetry_blog.poetryblog.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user_table")
public class User {
    @Id
    private Long id;
    private String username;
    private String role;
    private String password;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_poem_map",
            joinColumns = @JoinColumn(
                    name = "user_id",
                    referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "poem_id",
                    referencedColumnName = "id"
            )
    )
    private List<Poem> poemsFavList = new ArrayList<>();

    public User(String username, String role, String password,List<Poem> poemsFavList) {
        this.username = username;
        this.role = role;
        this.password = password;
        this.poemsFavList = poemsFavList;
    }

    public User() {
    }

    public List<Poem> getPoemsFavList() {
        return poemsFavList;
    }

    public void setPoemsFavList(List<Poem> poemsFavList) {
        this.poemsFavList = poemsFavList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
