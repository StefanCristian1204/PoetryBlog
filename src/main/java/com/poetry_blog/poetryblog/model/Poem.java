package com.poetry_blog.poetryblog.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Poem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String author;
    private List<String> line;
    private String imageUrl;
    private String date;
    @Enumerated(EnumType.STRING)
    private List<PoemEnum> categories = new ArrayList<>();
    private List<Double> rating = new ArrayList<>();
    private Double ratingAverage =0.0;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "poem_rating_user_map",
            joinColumns = @JoinColumn(
                    name = "user_id",
                    referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "poem_id",
                    referencedColumnName = "id"
            )
    )
    private Set<User> userRatingList = new HashSet<>();
    public Poem() {
    }

    public Poem(String title, String author, List<String> line, List<PoemEnum> categories,String imageUrl,String date,List<Double> rating,Double ratingAverage,Set<User> userRatingList) {
        this.title = title;
        this.author = author;
        this.line = line;
        this.categories = categories;
        this.imageUrl = imageUrl;
        this.date = date;
        this.rating=rating;
        this.ratingAverage=ratingAverage;
        this.userRatingList=userRatingList;
    }

    public Set<User> getUserRatingList() {
        return userRatingList;
    }

    public void setUserRatingList(Set<User> userRatingList) {
        this.userRatingList = userRatingList;
    }

    public Double getRatingAverage() {
        return ratingAverage;
    }

    public void setRatingAverage(Double ratingAverage) {
        this.ratingAverage = ratingAverage;
    }

    public List<Double> getRating() {
        return rating;
    }

    public void setRating(List<Double> rating) {
        this.rating = rating;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public List<String> getLine() {
        return line;
    }

    public void setLine(List<String> line) {
        this.line = line;
    }

    public List<PoemEnum> getCategories() {
        return categories;
    }

    public void setCategories(List<PoemEnum> categories) {
        this.categories = categories;
    }
}
