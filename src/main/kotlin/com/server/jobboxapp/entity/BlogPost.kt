package com.server.jobboxapp.entity

import jakarta.persistence.*

@Entity
data class BlogPost(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val headline: String,

    @Column(nullable = false)
    val text: String,

    @Column(nullable = false)
    val urlToImage: String,
)

data class BlogToPost(
    val headline: String,
    val text: String,
    val urlToImage: String,
)
