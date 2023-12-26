package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.BlogPost
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface BlogRepository : JpaRepository<BlogPost, Long>{

    @Transactional
    @Modifying
    @Query("UPDATE BlogPost b SET b.headline = ?2 WHERE b.id = ?1")
    fun updateHeadline(id: Long, headline: String)
    @Transactional
    @Modifying
    @Query("UPDATE BlogPost b SET b.text = ?2 WHERE b.id = ?1")
    fun updateText(id: Long, text: String)
    @Transactional
    @Modifying
    @Query("UPDATE BlogPost b SET b.author = ?2 WHERE b.id = ?1")
    fun updateAuthor(id: Long, author: String)
    @Transactional
    @Modifying
    @Query("UPDATE BlogPost b SET b.urlToImage = ?2 WHERE b.id = ?1")
    fun updateUrlToImage(id: Long, urlToImage: String)


}
