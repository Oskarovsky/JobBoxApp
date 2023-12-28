package com.server.jobboxapp.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
data class Employer(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    var name: String,

    @Column(nullable = false)
    var industry: String,

    @Column(nullable = false)
    var description: String,

    @Column(nullable = false)
    var urlToWebsite: String,

    @Column(nullable = false)
    var urlToImage: String,

    @OneToMany(mappedBy = "employer", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    @JsonIgnore
    val jobOffers: List<JobOffer> = mutableListOf()
)

