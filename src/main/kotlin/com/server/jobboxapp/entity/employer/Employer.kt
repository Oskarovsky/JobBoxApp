package com.server.jobboxapp.entity.employer

import com.fasterxml.jackson.annotation.JsonIgnore
import com.server.jobboxapp.entity.joboffer.JobOffer
import jakarta.persistence.*

@Entity
data class Employer(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    var name: String,

    @Column(nullable = false)
    var industry: String,

    @Column(columnDefinition = "TEXT")
    var description: String,

    @Column(nullable = true)
    var country: String,

    @Column(nullable = true)
    var city: String,

    @Column(nullable = true)
    var postCode: String,

    @Column(nullable = true)
    var street: String,

    @Column(nullable = false)
    var urlToWebsite: String,

    @Column(nullable = false)
    var urlToMiniatureImage: String,

    @Column(nullable = false)
    var urlToBackgroundImage: String,

    @OneToMany(mappedBy = "employer", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    @JsonIgnore
    val jobOffers: List<JobOffer> = mutableListOf()
)

data class EmployerDto(
    val id: Long,
    var name: String,
    var industry: String,
    var description: String,
    var country: String,
    var city: String,
    var postCode: String,
    var street: String,
    var urlToWebsite: String,
    var urlToMiniatureImage: String,
    var urlToBackgroundImage: String,
    val jobOffers: List<JobOffer>
)

