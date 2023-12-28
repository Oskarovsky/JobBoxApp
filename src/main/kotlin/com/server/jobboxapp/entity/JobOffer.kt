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
    var categoryToBrowse: OfferCategory,

    @ElementCollection
    @Column(nullable = false)
    var technologyStack: List<String>,

    @Column(nullable = false)
    var jobOfferDescription: String,

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

enum class OfferCategory(
    val title: String,
    val desc: String
) {
    AGILE(title = "Agile", desc = "Description of category"),
    DEVOPS(title = "DevOps", desc = "Info"),
    PRODUCT_MANAGEMENT(title = "Product Management", desc = "Info"),
    SOFTWARE(title = "Software", desc = "Info"),
    HUMAN_RESOURCE(title = "Human Resource", desc = "Info"),
    SECURITY(title = "Security management", desc = "Info")
}

data class OfferRequest(
    val positionTitle: String,
    val employerId: Long,
    val experienceLevel: String,
    val employmentType: String,
    val employmentModel: String,
    val categoryToBrowse: OfferCategory,
    val technologyStack: List<String>,
    val jobOfferDescription: String,
    val country: String,
    val city: String,
    val postCode: String,
    val street: String,
    val urlToApply: String,
    val promotedFlag: Int
)
