package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.BlogPost
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface BlogRepository : JpaRepository<BlogPost, Long>{

}
