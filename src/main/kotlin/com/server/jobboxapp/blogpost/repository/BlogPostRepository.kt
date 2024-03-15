package com.server.jobboxapp.blogpost.repository

import com.server.jobboxapp.blogpost.data.BlogPost
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BlogPostRepository : JpaRepository<BlogPost, Long>{
}
