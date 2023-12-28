package com.server.jobboxapp.entity

import jakarta.persistence.*
import java.time.LocalDate

@Entity
data class JobOffer(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "employer_id")
    var employer: Employer,

    @Column(nullable = false)
    var positionTitle: String,

    @Column(nullable = false)
    var experienceLevel: String,

    @Column(nullable = false)
    var employmentType: String,

    @Column(nullable = false)
    var employmentModel: String,

    @Column(nullable = false)
    var categoryToBrowse: String,

    @ElementCollection
    @Column(nullable = false)
    var technologyStack: List<String>,

    @Column(nullable = false)
    var jobOfferDescription: String,

    @Column(nullable = false)
    var country: String,

    @Column(nullable = false)
    var city: String,

    @Column(nullable = false)
    var postCode: String,

    @Column(nullable = false)
    var street: String,

    @Column(nullable = false)
    var urlToApply: String,

    @Column(nullable = false)
    var promotedFlag: Int,

    @Column(nullable = false)
    var creationDate: LocalDate = LocalDate.now(),

    @Column(nullable = false)
    var lastModificationDate: LocalDate = LocalDate.now(),

    @Column(nullable = false)
    var expirationDate: LocalDate = LocalDate.now().plusDays(30)
)

data class OfferRequest(
    val positionTitle: String,
    val employerId: Long,
    val experienceLevel: String,
    val employmentType: String,
    val employmentModel: String,
    val categoryToBrowse: String,
    val technologyStack: List<String>,
    val jobOfferDescription: String,
    val country: String,
    val city: String,
    val postCode: String,
    val street: String,
    val urlToApply: String,
    val promotedFlag: Int
)