package com.server.jobboxapp.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
data class Employer(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val employerName: String,

    @Column(nullable = false)
    val industry: String,

    @Column(nullable = false)
    val employerDescription: String,

    @Column(nullable = false)
    val urlToWebsite: String,

    @Column(nullable = false)
    val urlToImage: String,

    @OneToMany(mappedBy = "employer", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    @JsonIgnore
    val jobOffers: List<JobOffer> = mutableListOf()
)

