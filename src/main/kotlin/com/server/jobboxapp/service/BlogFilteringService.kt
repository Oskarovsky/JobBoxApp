package com.server.jobboxapp.service

import com.server.jobboxapp.entity.blogpost.BlogFrontEndEntity
import com.server.jobboxapp.entity.blogpost.BlogPost
import com.server.jobboxapp.repository.BlogRepository
import org.springframework.stereotype.Service

@Service
class BlogFilteringService(
    private val blogRepository: BlogRepository
) {
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
}

