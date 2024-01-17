package com.server.jobboxapp.entity.joboffer

import jakarta.persistence.Column
import jakarta.persistence.ElementCollection
import jakarta.persistence.Embeddable

@Embeddable
data class JobOfferDescription(
    @ElementCollection
    @Column(columnDefinition = "TEXT")
    var description: List<String>,

    @ElementCollection
    @Column(columnDefinition = "TEXT")
    var responsibilities: List<String>,

    @ElementCollection
    @Column(columnDefinition = "TEXT")
    var preferredExperience: List<String>
)
