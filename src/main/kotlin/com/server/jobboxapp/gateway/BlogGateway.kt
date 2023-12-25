package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.*
import com.server.jobboxapp.repository.BlogRepository
import com.server.jobboxapp.service.BlogService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/blog")
class BlogGateway(
    private val blogService: BlogService
) {
    @GetMapping
    @CrossOrigin(origins = ["*"])
    fun getAllBlogPosts(): List<BlogPost> = blogService.returnAllBlogPosts()

    @GetMapping("/{id}")
    fun getBlogPostById(@PathVariable id: Long): BlogPost =
        blogService.returnBlogPostById(id)

    @PostMapping("/createBlogPost", consumes = ["application/json"])
    fun createBlogPost(@RequestBody blogPost: BlogPost): ResponseEntity<BlogPost> = blogService.createBlogPost(blogPost)

    @PutMapping("/{id}")
    fun updateBlogPost(@PathVariable id: Long, @RequestBody updatedBlogPost: BlogPost): ResponseEntity<BlogPost> =
        blogService.updateBlogPost(id, updatedBlogPost)

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long): ResponseEntity<Long> =
        blogService.deleteOffer(id)
}

