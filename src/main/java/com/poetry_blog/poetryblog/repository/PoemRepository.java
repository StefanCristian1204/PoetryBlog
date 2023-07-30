package com.poetry_blog.poetryblog.repository;

import com.poetry_blog.poetryblog.model.Poem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PoemRepository extends JpaRepository<Poem,Long> {
}
