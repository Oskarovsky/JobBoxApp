package com.server.jobboxapp.blogpost.repository

import com.server.jobboxapp.blogpost.data.BlogPostMiniatureImage
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface BlogPostMiniatureImageRepository : JpaRepository<BlogPostMiniatureImage, Long> {
    @Query("SELECT * FROM blog_post_miniature_image e WHERE e.blog_post_id = ?1", nativeQuery = true)
    fun returnBlogPostMiniatureImageByPostId(postId: Long): BlogPostMiniatureImage
}
