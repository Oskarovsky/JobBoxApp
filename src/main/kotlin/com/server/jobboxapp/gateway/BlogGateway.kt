package com.server.jobboxapp.gateway
import com.server.jobboxapp.entity.*
import com.server.jobboxapp.repository.BlogRepository
import com.server.jobboxapp.service.BlogService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/blog")
class BlogGateway(
    private val blogRepository: BlogRepository
) {

    @GetMapping
    @CrossOrigin(origins = ["*"])
    fun getAllBlogPosts(): List<BlogPost> = blogRepository.findAll()

    @GetMapping("/{id}")
    fun getBlogPostById(@PathVariable id: Long): BlogPost =
        blogRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no offer with id: $id") }

    @PostMapping(consumes = ["application/json"])
    fun createOffer(@RequestBody blogPost: BlogPost): BlogPost =
        blogRepository.save(blogPost)

    @PostMapping("/createJobOffer", consumes = ["application/json"])
    fun createNewOffer(@RequestBody blogPost: BlogPost): ResponseEntity<BlogPost> {

        val savedBlogPost = blogRepository.save(blogPost)
        return ResponseEntity.ok(savedBlogPost)
    }

    @PutMapping("/{id}")
    fun updateOffer(@PathVariable id: Long, @RequestBody  updatedBlogPost:BlogPost): BlogPost {
        var blogPost =
            blogRepository.findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
//        blogPost.headline = updatedBlogPost.headline
//        offer.employer = updatedBlogPost.employer
        return blogRepository.save(blogPost)

    }

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long) {
        blogRepository.deleteById(id)
    }

}

