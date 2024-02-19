package com.server.jobboxapp.service

import com.server.jobboxapp.entity.blogpost.BlogFrontEndEntity
import com.server.jobboxapp.entity.blogpost.BlogPost
import com.server.jobboxapp.repository.BlogRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class BlogService(private val blogRepository: BlogRepository) {

    fun returnAllBlogPosts(): List<BlogFrontEndEntity> =
        blogRepository.findAll().stream().map { blogFrontEndMapping(it) }.toList()

    fun returnBlogPostById(id: Long): BlogFrontEndEntity =
        blogRepository
            .findById(id)
            .map { blogFrontEndMapping(it) }
            .orElseThrow { NoSuchElementException("There is no offer with id: $id")
            }

    fun createBlogPost(blogPost: BlogPost): ResponseEntity<BlogPost> {
        val savedBlogPost = blogRepository.save(blogPost)
        return ResponseEntity.ok(savedBlogPost)
    }

    fun updateBlogPost(id: Long, updatedBlogPost: BlogPost): ResponseEntity<BlogPost> {
        var blogPost =
            blogRepository.findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
        blogPost.headline = updatedBlogPost.headline
        blogPost.blogText = updatedBlogPost.blogText
        blogPost.urlToImage = updatedBlogPost.urlToImage
        blogPost.author = updatedBlogPost.author
        blogPost.urlToMiniature = updatedBlogPost.urlToMiniature
        blogRepository.save(blogPost)
        return ResponseEntity.ok(blogPost)
    }

    private fun blogFrontEndMapping(blogPost: BlogPost): BlogFrontEndEntity {
        return BlogFrontEndEntity(
            blogPost.id,
            blogPost.headline,
            blogPost.blogText,
            blogPost.author,
            blogPost.urlToMiniature,
            blogPost.urlToImage
        )
    }

    fun deleteBlogPost(id: Long): ResponseEntity<Long> {
        blogRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }


}