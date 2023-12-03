package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.entity.Offer
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/employer")
class EmployerGateway(
    private val employerRepository: EmployerRepository
) {

    @GetMapping
    fun getAllEmployers(): List<Employer> = employerRepository.findAll()

    @GetMapping("/{id}")
    fun getEmployerById(@PathVariable id: Long): Employer =
        employerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no employer with id: $id") }

    @PostMapping(consumes = ["application/json"])
    fun createEmployer(@RequestBody employer: Employer): Employer =
        employerRepository.save(employer)

    @PutMapping("/{id}")
    fun updateEmployer(@PathVariable id: Long, @RequestBody updatedEmployer: Employer): Employer {
        val employer = employerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no employer with id: $id") }
        employer.name = updatedEmployer.name
        employer.description = updatedEmployer.description
        return employerRepository.save(employer)
    }

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long) {
        employerRepository.deleteById(id)
    }

}
