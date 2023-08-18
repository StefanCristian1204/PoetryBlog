package com.poetry_blog.poetryblog;

import com.poetry_blog.poetryblog.config.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class PoetryBlogApplication {


    public static void main(String[] args) {
        SpringApplication.run(PoetryBlogApplication.class, args);
    }

}
