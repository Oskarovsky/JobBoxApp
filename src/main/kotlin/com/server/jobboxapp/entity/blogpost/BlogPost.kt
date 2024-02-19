package com.server.jobboxapp.entity.blogpost

import jakarta.persistence.*

@Entity
data class BlogPost(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    var headline: String,

    @Embedded
    var blogText: BlogText,

    @Column(nullable = false)
    var author: String,

    @Column(nullable = false)
    var urlToMiniature: String,

    @Column(nullable = false)
    var urlToImage: String,
)

data class BlogFrontEndEntity(
    val id: Long,
    var headline: String,
    var blogText: BlogText,
    var author: String,
    var urlToMiniature: String,
    var urlToImage: String
)

@Embeddable
data class BlogText(

    @Column(columnDefinition = "TEXT")
    var shortText: String,

    var h2: String,

    @Column(columnDefinition = "TEXT")
    var mainText: String,

    var h3: String,

    @Column(columnDefinition = "TEXT")
    var endText: String
)