package com.server.jobboxapp.blogpost.repository

import com.server.jobboxapp.blogpost.data.BlogPostBackgroundImage
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface BlogPostBackgroundImageRepository : JpaRepository<BlogPostBackgroundImage, Long> {
    @Query("SELECT * FROM blog_post_background_image e WHERE e.blog_post_id = ?1", nativeQuery = true)
    fun returnBlogPostBackgroundImageByPostId(postId: Long): BlogPostBackgroundImage
}
