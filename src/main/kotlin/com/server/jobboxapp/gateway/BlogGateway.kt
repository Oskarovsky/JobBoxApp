package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.*
import com.server.jobboxapp.entity.blogpost.BlogFrontEndEntity
import com.server.jobboxapp.entity.blogpost.BlogPost
import com.server.jobboxapp.service.BlogService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/blog")
class BlogGateway(private val blogService: BlogService) {
    @GetMapping("byId/{id}")
    fun getBlogPostById(@PathVariable id: Long): BlogFrontEndEntity =
        blogService.returnBlogPostById(id)
    @GetMapping("/allBlogPosts")
    fun getAllBlogPosts(): List<BlogFrontEndEntity> =
        blogService.returnAllBlogPosts()

    @PostMapping("/createBlogPost", consumes = ["application/json"])
    fun createBlogPost(@RequestBody blogPost: BlogPost): ResponseEntity<BlogPost> = blogService.createBlogPost(blogPost)

    @PutMapping("/{id}")
    fun updateBlogPost(@PathVariable id: Long, @RequestBody updatedBlogPost: BlogPost): ResponseEntity<BlogPost> =
        blogService.updateBlogPost(id, updatedBlogPost)

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long): ResponseEntity<Long> =
        blogService.deleteBlogPost(id)
}

