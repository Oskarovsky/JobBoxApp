package com.server.jobboxapp.entity

import jakarta.persistence.*

@Entity
data class BlogPost(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    var headline: String,

    @Column(nullable = false)
    var text: String,

    @Column(nullable = false)
    var author: String,

    @Column(nullable = false)
    var urlToImage: String,
)
