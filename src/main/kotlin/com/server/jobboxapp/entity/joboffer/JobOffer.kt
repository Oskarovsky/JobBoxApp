package com.server.jobboxapp.entity.joboffer

import com.server.jobboxapp.entity.employer.Employer
import jakarta.persistence.*
import java.time.LocalDate

@Entity
data class JobOffer(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne(fetch = FetchType.EAGER, cascade = [CascadeType.ALL])
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
    var minSalaryBracket: Long,

    @Column(nullable = false)
    var maxSalaryBracket: Long,

    @Column(nullable = false)
    var categoryToBrowse: String,

    @ElementCollection
    @Column(nullable = false)
    var technologyStack: List<String>,

    @Embedded
    var jobOfferDescription: JobOfferDescription,

    @Column(nullable = true)
    var country: String,

    @Column(nullable = true)
    var city: String,

    @Column(nullable = true)
    var postCode: String,

    @Column(nullable = true)
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
    val minSalaryBracket: Long,
    val maxSalaryBracket: Long,
    val categoryToBrowse: String,
    val technologyStack: List<String>,
    val jobOfferDescription: JobOfferDescription,
    val country: String,
    val city: String,
    val postCode: String,
    val street: String,
    val urlToApply: String,
    val promotedFlag: Int
)
