//package com.server.jobboxapp.entity
//
//import com.fasterxml.jackson.annotation.JsonIgnore
//import jakarta.persistence.*
//import java.time.LocalDate
//
//@Entity
//data class Offer(
//    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    val id: Long = 0,
//
//    val title: String,
//    val description: String,
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "employer_id")
//    val employer: Employer,
//
//    @Column(nullable = false)
//    val creationDate: LocalDate = LocalDate.now(),
//
//    @Column(nullable = false)
//    val lastModificationDate: LocalDate = LocalDate.now(),
//
//    @Column(nullable = false)
//    val expirationDate: LocalDate = LocalDate.now().plusDays(30)
//
//
//)
//
//@Entity
//data class Employer(
//    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    val id: Long = 0,
//
//    val name: String,
//    val description: String,
//
//    @OneToMany(mappedBy = "employer", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
//    @JsonIgnore
//    val offers: List<Offer> = mutableListOf()
//)
//
//data class OfferRequest(
//    val title: String,
//    val description: String,
//    val employerId: Long
//)
