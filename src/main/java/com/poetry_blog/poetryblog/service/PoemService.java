package com.poetry_blog.poetryblog.service;

import com.poetry_blog.poetryblog.model.Poem;
import com.poetry_blog.poetryblog.repository.PoemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PoemService {

    @Autowired
    private PoemRepository poemRepository;

    public Poem addPoem(Poem poem){
        return poemRepository.save(poem);
    }

    public List<Poem> getAllPoems() {
        return poemRepository.findAll();
    }

    public Poem getPoem(Long id) {
        return poemRepository.findById(id).orElse(new Poem());
    }
}
