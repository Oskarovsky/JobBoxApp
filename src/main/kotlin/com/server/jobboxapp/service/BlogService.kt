package com.server.jobboxapp.service

import com.server.jobboxapp.entity.BlogPost
import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.repository.BlogRepository
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.*

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
//        blogPost.headline = updatedBlogPost.headline
//        offer.employer = updatedBlogPost.employer
//        return blogRepository.save(blogPost)
        return ResponseEntity.ok(blogPost)
    }

    fun deleteOffer(id: Long): ResponseEntity<Long> {
        blogRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }
}