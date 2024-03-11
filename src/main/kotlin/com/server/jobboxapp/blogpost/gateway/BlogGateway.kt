package com.server.jobboxapp.blogpost.gateway

import com.server.jobboxapp.blogpost.data.BlogFrontEndEntity
import com.server.jobboxapp.blogpost.data.BlogPost
import com.server.jobboxapp.blogpost.service.BlogService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/blog")
class BlogGateway(private val blogService: BlogService) {

    @GetMapping("/allBlogPosts")
    fun getAllBlogPosts(): List<BlogFrontEndEntity> =
        blogService.returnAllBlogPosts()

    @PostMapping("/createBlogPost", consumes = ["application/json"])
    fun createBlogPost(@RequestBody blogPost: BlogPost): ResponseEntity<BlogPost> {
        return try {
            blogService.createBlogPostText(blogPost)
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @GetMapping("byId/{blogPostId}")
    fun getBlogPostById(@PathVariable blogPostId: Long): ResponseEntity<BlogFrontEndEntity> {
        return try {
            ResponseEntity.ok(blogService.returnBlogPostTextById(blogPostId))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @PutMapping("/{blogPostId}")
    fun updateBlogPost(@PathVariable blogPostId: Long, @RequestBody updatedBlogPost: BlogPost): ResponseEntity<Long> {
        return try {
            blogService.updateBlogPostText(blogPostId, updatedBlogPost)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @DeleteMapping("/{blogPostId}")
    fun deleteOffer(@PathVariable blogPostId: Long): ResponseEntity<Long> {
        return try {
            blogService.deleteBlogPost(blogPostId)
            ResponseEntity.ok(blogPostId)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @PostMapping(
        "/saveBlogPostMiniatureImage",
        consumes = [MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE]
    )
    fun saveBlogPostMiniatureImage(
        @RequestParam blogPostHeadline: String,
        @RequestParam blogPostId: Long,
        @RequestBody file: MultipartFile
    ): ResponseEntity<String> {
        return try {
            blogService.saveBlogPostMiniatureImage(blogPostHeadline, blogPostId, file)
            ResponseEntity.ok("Saved blog miniature image for $blogPostHeadline id=$blogPostId")
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Error occurred during processing of addEmployerMiniatureImage: ${e.message}")
        }
    }

    @PostMapping(
        "/saveBlogPostBackgroundImage",
        consumes = [MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE]
    )
    fun saveBlogPostBackgroundImage(
        @RequestParam blogPostHeadline: String,
        @RequestParam blogPostId: Long,
        @RequestBody file: MultipartFile
    ): ResponseEntity<String> {
        return try {
            blogService.saveBlogPostBackgroundImage(blogPostHeadline, blogPostId, file)
            ResponseEntity.ok("Saved blog background image for $blogPostHeadline id=$blogPostId")
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Error occurred during processing of addEmployerBackgroundImage: ${e.message}")
        }
    }

    @GetMapping("/getBlogMiniatureImage")
    fun getBlogMiniatureImage(@RequestParam blogPostId: Long): ResponseEntity<String> {
        return try {
            ResponseEntity.ok(blogService.getBlogPostMiniatureImage(blogPostId))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @GetMapping("/getBlogBackgroundImage")
    fun getBlogBackgroundImage(@RequestParam blogPostId: Long): ResponseEntity<String> {
        return try {
            ResponseEntity.ok(blogService.getBlogPostBackgroundImage(blogPostId))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @DeleteMapping("/deleteBlogMiniatureImage")
    fun deleteBlogMiniatureImage(@RequestParam blogPostId: Long): ResponseEntity<Long> {
        return try {
            blogService.deleteBlogPostMiniatureImage(blogPostId)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }


    @DeleteMapping("/deleteBlogBackgroundImage")
    fun deleteBlogBackgroundImage(@RequestParam blogPostId: Long): ResponseEntity<Long> {
        return try {
            blogService.deleteBlogPostBackgroundImage(blogPostId)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }


}

