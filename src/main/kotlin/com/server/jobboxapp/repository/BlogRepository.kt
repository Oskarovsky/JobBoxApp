package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.blogpost.BlogPost
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BlogRepository : JpaRepository<BlogPost, Long>{

}
