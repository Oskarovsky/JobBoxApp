package com.server.jobboxapp.service

import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.JobOfferRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class EmployerService(
    private val employerRepository: EmployerRepository,
    private val jobOfferRepository: JobOfferRepository
) {
    fun returnAllEmployees(): List<Employer> =
        employerRepository.findAll()

    fun returnEmployeeById(id: Long): Employer =
        employerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no employer with id: $id") }

    fun saveEmployerEntity(employer: Employer): ResponseEntity<Employer> {
        employerRepository.save(employer)
        return ResponseEntity.ok(employer)
    }

    fun updateEmployerEntity(id: Long, updatedEmployer: Employer): ResponseEntity<Employer> {
        var employerToUpdate = employerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no employer with id: $id") }

        employerToUpdate.name = updatedEmployer.name
        employerToUpdate.industry = updatedEmployer.industry
        employerToUpdate.description = updatedEmployer.description
        employerToUpdate.urlToImage = updatedEmployer.urlToImage
        employerToUpdate.urlToWebsite = updatedEmployer.urlToWebsite

        employerRepository.save(employerToUpdate)
        return ResponseEntity.ok(employerToUpdate)
    }

    fun deleteEmployeeById(id: Long): ResponseEntity<Long> {
        employerRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }

    fun updateEmployerName(id: Long, newEmployerName: String): ResponseEntity<String> {
        employerRepository.updateEmployerName(id, newEmployerName)
        return ResponseEntity.ok(newEmployerName)
    }

    fun updateIndustry(id: Long, newIndustry: String): ResponseEntity<String> {
        employerRepository.updateIndustry(id, newIndustry)
        return ResponseEntity.ok(newIndustry)
    }

    fun updateEmployerDescription(id: Long, newEmployerDescription: String): ResponseEntity<String> {
        employerRepository.updateEmployerDescription(id, newEmployerDescription)
        return ResponseEntity.ok(newEmployerDescription)
    }

    fun updateUrlToWebsite(id: Long, newUrlToWebsite: String): ResponseEntity<String> {
        employerRepository.updateUrlToWebsite(id, newUrlToWebsite)
        return ResponseEntity.ok(newUrlToWebsite)
    }

    fun updateUrlToImage(id: Long, newUrlToImage: String): ResponseEntity<String> {
        employerRepository.updaterUrlToImage(id, newUrlToImage)
        return ResponseEntity.ok(newUrlToImage)
    }

    fun deleteEmployerByName(employerName: String): ResponseEntity<String> {
        employerRepository.deleteEmployerByEmployerName(employerName)
        return ResponseEntity.ok(employerName)
    }

    fun returnEmployerByName(employerName: String): Employer =
        employerRepository.returnEmployerByEmployerName(employerName)

    fun mapOfEmployerToCount(): Map<Employer, Int> {
        val employers = employerRepository.findAll()
        return employers.map {
            it to jobOfferRepository.countJobsByEmployerId(it.id)
        }.toMap()
    }
}


