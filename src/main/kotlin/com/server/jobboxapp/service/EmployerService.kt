package com.server.jobboxapp.service

import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import org.springframework.stereotype.Service

@Service
class EmployerService(
    private val employerRepository: EmployerRepository,
    private val offerRepository: OfferRepository
) {

    fun mapEmployerToCount(): Map<Employer, Int> {
        val employers = employerRepository.findAll()
        return employers.map {
            it to offerRepository.countJobsByEmployerId(it.id)
        }.toMap()
    }

}