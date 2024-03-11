package com.server.jobboxapp.blogpost.service

import com.server.jobboxapp.blogpost.data.BlogFrontEndEntity
import com.server.jobboxapp.blogpost.data.BlogPost
import com.server.jobboxapp.blogpost.data.BlogPostBackgroundImage
import com.server.jobboxapp.blogpost.data.BlogPostMiniatureImage
import com.server.jobboxapp.blogpost.repository.BlogPostBackgroundImageRepository
import com.server.jobboxapp.blogpost.repository.BlogPostMiniatureImageRepository
import com.server.jobboxapp.blogpost.repository.BlogPostRepository
import mu.KotlinLogging
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.multipart.MultipartFile
import java.io.IOException
import java.lang.runtime.SwitchBootstraps
import java.util.*
import kotlin.NoSuchElementException

@Service
class BlogService(
    private val blogPostRepository: BlogPostRepository,
    private val blogPostMiniatureImageRepository: BlogPostMiniatureImageRepository,
    private val blogPostBackgroundImageRepository: BlogPostBackgroundImageRepository
) {
    private var blogMiniatureImageCache = mapOf<Long, String>()
    private var blogBackgroundImageCache = mapOf<Long, String>()
    private val logger = KotlinLogging.logger {}

    fun loadCache() {
        loadCacheMiniature()
        loadCacheBackground()
    }

    private fun loadCacheMiniature() {
        blogMiniatureImageCache = blogPostMiniatureImageRepository.findAll()
            .associate { it.blogPostId to Base64.getEncoder().encodeToString(it.blogMiniatureImage) }
    }

    private fun loadCacheBackground() {
        blogBackgroundImageCache = blogPostBackgroundImageRepository.findAll()
            .associate { it.blogPostId to Base64.getEncoder().encodeToString(it.blogBackgroundImage) }
    }

    fun returnAllBlogPosts(): List<BlogFrontEndEntity> {
        loadCache()
        return blogPostRepository.findAll().stream().map { blogFrontEndMapping(it) }.toList()
    }

    fun returnBlogPostTextById(id: Long): BlogFrontEndEntity =
        blogPostRepository
            .findById(id)
            .map { blogFrontEndMapping(it) }
            .orElseThrow {
                NoSuchElementException("There is no offer with id: $id")
            }

    fun createBlogPostText(blogPost: BlogPost): ResponseEntity<BlogPost> {
        val savedBlogPost = blogPostRepository.save(blogPost)
        return ResponseEntity.ok(savedBlogPost)
    }

    fun updateBlogPostText(id: Long, updatedBlogPost: BlogPost): ResponseEntity<Long> {
        var blogPost =
            blogPostRepository.findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
        blogPost.headline = updatedBlogPost.headline
        blogPost.blogText = updatedBlogPost.blogText
        blogPost.author = updatedBlogPost.author
        blogPostRepository.save(blogPost)
        return ResponseEntity.ok(id)
    }

    private fun blogFrontEndMapping(blogPost: BlogPost): BlogFrontEndEntity {
        val backgroundImage = blogBackgroundImageCache.get(blogPost.id)!!
        val miniatureImage = blogMiniatureImageCache.get(blogPost.id)!!
        return BlogFrontEndEntity(
            blogPost.id,
            blogPost.headline,
            blogPost.blogText,
            blogPost.author,
            miniatureImage,
            backgroundImage
        )
    }

    fun deleteBlogPost(id: Long): ResponseEntity<Long> {
        blogPostRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }

    @Transactional
    fun saveBlogPostMiniatureImage(
        blogPostHeadline: String,
        blogPostId: Long,
        file: MultipartFile
    ): BlogPostMiniatureImage {
        try {
            val blogPostMiniatureImage = BlogPostMiniatureImage(blogPostId, blogPostHeadline, file.bytes)
            blogPostMiniatureImageRepository.save(blogPostMiniatureImage)
            logger.info { "Saved blog miniature image to database for $blogPostHeadline, blog_id=$blogPostId" }
            return blogPostMiniatureImage
        } catch (e: IOException) {
            throw IOException(
                "Could not save blog miniature image to database for $blogPostHeadline blog_id=$blogPostId",
                e
            )
        }
    }

    @Transactional
    fun saveBlogPostBackgroundImage(
        blogPostHeadline: String,
        blogPostId: Long,
        file: MultipartFile
    ): BlogPostBackgroundImage {
        try {
            val blogPostBackgroundImage = BlogPostBackgroundImage(blogPostId, blogPostHeadline, file.bytes)
            blogPostBackgroundImageRepository.save(blogPostBackgroundImage)
            logger.info { "Saved blog background image to database for $blogPostHeadline, blog_id=$blogPostId" }
            return blogPostBackgroundImage
        } catch (e: IOException) {
            throw IOException(
                "Could not save blog background image to database for $blogPostHeadline blog_id=$blogPostId",
                e
            )
        }
    }

    @Transactional
    fun getBlogPostMiniatureImage(blogPostId: Long): String {
        try {
            val blogPostMiniatureImageEntity =
                blogPostMiniatureImageRepository.returnBlogPostMiniatureImageByPostId(blogPostId)
            return blogPostMiniatureImageEntity.let {
                Base64.getEncoder().encodeToString(it.blogMiniatureImage)
            }
        } catch (e: IOException) {
            throw IOException("Could not return blog miniature image to database with blogPostId $blogPostId", e)
        }
    }

    @Transactional
    fun getBlogPostBackgroundImage(blogPostId: Long): String {
        try {
            val blogPostBackgroundImageEntity =
                blogPostBackgroundImageRepository.returnBlogPostBackgroundImageByPostId(blogPostId)
            return blogPostBackgroundImageEntity.let {
                Base64.getEncoder().encodeToString(it.blogBackgroundImage)
            }
        } catch (e: IOException) {
            throw IOException("Could not return blog background image to database with blogPostId $blogPostId", e)
        }
    }

    fun deleteBlogPostMiniatureImage(employerId: Long):ResponseEntity<Long> {
        blogPostMiniatureImageRepository.deleteById(employerId)
        return ResponseEntity.ok(employerId)
    }
    fun deleteBlogPostBackgroundImage(employerId: Long):ResponseEntity<Long> {
        blogPostBackgroundImageRepository.deleteById(employerId)
        return ResponseEntity.ok(employerId)
    }

}