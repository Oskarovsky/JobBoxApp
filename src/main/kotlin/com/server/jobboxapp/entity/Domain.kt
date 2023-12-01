package com.server.jobboxapp.entity

import jakarta.persistence.*
import java.time.LocalDate

@Entity
data class Offer(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    var title: String,
    var description: String,

    @ManyToOne
    @JoinColumn(name = "employer_id")
    var employer: Employer,

    @Column(nullable = false)
    val creationDate: LocalDate = LocalDate.now(),

    @Column(nullable = false)
    val lastModificationDate: LocalDate = LocalDate.now(),

    @Column(nullable = false)
    val expirationDate: LocalDate


)

@Entity
data class Employer(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    var name: String,
    var description: String,

    @OneToMany(mappedBy = "employer")
    val offers: List<Offer> = mutableListOf()
)