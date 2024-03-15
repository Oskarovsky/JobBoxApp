package com.server.jobboxapp.blogpost.data

import jakarta.persistence.*

@Entity
data class BlogPostBackgroundImage(
    @Id
    val blogPostId: Long,

    @Column(nullable = false)
    var postHeadline: String,

    @Lob
    @Column(nullable = false)
    var blogBackgroundImage: ByteArray
)


