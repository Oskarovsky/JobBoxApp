package com.server.jobboxapp.service

import com.server.jobboxapp.entity.employer.Employer
import com.server.jobboxapp.entity.employer.EmployersAvailable
import com.server.jobboxapp.repository.EmployerRepository
import org.springframework.stereotype.Service

@Service
class EmployerFilteringService(
    private val employerRepository: EmployerRepository
) {
    fun returnNumberOfAllEmployers(): EmployersAvailable =
        EmployersAvailable(employerRepository.findAll().size)

    fun returnAllEmployersList(): List<Employer> =
        employerRepository.findAll()

    fun returnIndustryBoxList(): List<Employer> =
        employerRepository.findAll()
}


