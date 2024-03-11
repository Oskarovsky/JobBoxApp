package com.server.jobboxapp.employer.data

import jakarta.persistence.*

@Entity
data class EmployerMiniatureImage(
    @Id
    val employerId: Long,

    @Column(nullable = false)
    var employerName: String,

    @Lob
    @Column(nullable = false)
    var miniatureImage: ByteArray
)

