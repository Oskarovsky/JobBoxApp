package com.server.jobboxapp.service

import com.server.jobboxapp.entity.BlogPost
import com.server.jobboxapp.repository.BlogRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class BlogService(private val blogRepository: BlogRepository) {

    fun returnAllBlogPosts(): List<BlogPost> = blogRepository.findAll()

    fun returnBlogPostById(id: Long): BlogPost =
        blogRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no offer with id: $id") }

    fun createBlogPost(blogPost: BlogPost): ResponseEntity<BlogPost> {
        val savedBlogPost = blogRepository.save(blogPost)
        return ResponseEntity.ok(savedBlogPost)
    }

    fun updateBlogPost(id: Long, updatedBlogPost: BlogPost): ResponseEntity<BlogPost> {
        var blogPost =
            blogRepository.findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
        blogPost.headline = updatedBlogPost.headline
        blogPost.text = updatedBlogPost.text
        blogPost.urlToImage = updatedBlogPost.urlToImage
        blogPost.author = updatedBlogPost.author
        blogRepository.save(blogPost)
        return ResponseEntity.ok(blogPost)
    }

    fun deleteBlogPost(id: Long): ResponseEntity<Long> {
        blogRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }
}