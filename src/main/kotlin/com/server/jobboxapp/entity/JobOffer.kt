package com.server.jobboxapp.entity

import jakarta.persistence.*
import java.time.LocalDate

@Entity
data class JobOffer(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employer_id")
    val employer: Employer,

    @Column(nullable = false)
    val positionTitle: String,

    @Column(nullable = false)
    val experienceLevel: String,

    @Column(nullable = false)
    val employmentType: String,

    @Column(nullable = false)
    val employmentModel: String,

    @Column(nullable = false)
    val categoryToBrowse: String,

    @ElementCollection
    @Column(nullable = false)
    val technologyStack: List<String>,

    @Column(nullable = false)
    val jobOfferDescription: String,

    @Column(nullable = false)
    val country: String,

    @Column(nullable = false)
    val city: String,

    @Column(nullable = false)
    val postCode: String,

    @Column(nullable = false)
    val street: String,

    @Column(nullable = false)
    val urlToApply: String,

    @Column(nullable = false)
    val promotedFlag: Int,

    @Column(nullable = false)
    val creationDate: LocalDate = LocalDate.now(),

    @Column(nullable = false)
    val lastModificationDate: LocalDate = LocalDate.now(),

    @Column(nullable = false)
    val expirationDate: LocalDate = LocalDate.now().plusDays(30)
)

data class OfferRequest(
    val positionTitle: String,
    val employer: Employer,
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