package com.poetry_blog.poetryblog.controller;

import com.poetry_blog.poetryblog.model.Poem;
import com.poetry_blog.poetryblog.model.PoemEnum;
import com.poetry_blog.poetryblog.service.PoemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Stream;

@RestController

@RequestMapping("/api/poem")
public class PoemController {


    @Autowired
    private PoemService poemService;

    @PostMapping("/")
    public Poem addPoem(@RequestBody Poem poem){
       return poemService.addPoem(poem);
    }

    @GetMapping("/")
    public List<Poem> getAllPoems(){
        return poemService.getAllPoems();
    }

    @GetMapping("/{id}")
    public Poem getPoem(@PathVariable Long id){
        return poemService.getPoem(id);
    }
    @GetMapping("/categories")
    public List<String> getAllCategories(){
       List<String> poemEnums = Stream.of(PoemEnum.values())
                .map(PoemEnum::name)
                .toList();
       return poemEnums;
    }
}
