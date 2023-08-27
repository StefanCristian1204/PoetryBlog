package com.poetry_blog.poetryblog.service;

import com.poetry_blog.poetryblog.model.Poem;
import com.poetry_blog.poetryblog.model.User;
import com.poetry_blog.poetryblog.repository.PoemRepository;
import com.poetry_blog.poetryblog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class PoemService {

    @Autowired
    private PoemRepository poemRepository;
    @Autowired
    private UserRepository userRepository;

    public Poem addPoem(Poem poem) {
        return poemRepository.save(poem);
    }

    public List<Poem> getAllPoems() {
        return poemRepository.findAll();
    }

    public Poem getPoem(Long id) {
        return poemRepository.findById(id).orElse(new Poem());
    }

    public Poem addRating(Long poemId, Double newRating, Long userId) {
        Poem poem = poemRepository.findById(poemId).orElse(null);
        User user = userRepository.findById(userId).orElse(null);
        List<Double> allRatings = poem.getRating();
        Set<User> allPoemUsers = poem.getUserRatingList();
        if (allPoemUsers.contains(user)) {
            return null;
        }
        allPoemUsers.add(user);
        allRatings.add(newRating);
        int sum = 0;
        for (double number : allRatings) {
            sum += number;
        }
        poem.setRatingAverage((double) (sum / allRatings.size()));
        poemRepository.save(poem);
        return poem;

    }
}
