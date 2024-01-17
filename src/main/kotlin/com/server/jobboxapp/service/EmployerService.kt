package com.server.jobboxapp.service

import com.server.jobboxapp.entity.employer.Employer
import com.server.jobboxapp.entity.employer.EmployerDto
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.service.mapper.EmployerMapper
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class EmployerService(
    private val employerRepository: EmployerRepository
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

    fun patchEmployerEntity(id: Long, dto: EmployerDto): Employer {
        val employer: Employer = employerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no employer with id: $id") }

        val updatedEmployer = EmployerMapper.mapDtoToEntity(dto, employer)
        employerRepository.save(updatedEmployer)
        return updatedEmployer
    }

    fun updateEmployerEntity(id: Long, updatedEmployer: Employer): ResponseEntity<Employer> {
        var employerToUpdate = employerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no employer with id: $id") }

        employerToUpdate.name = updatedEmployer.name
        employerToUpdate.industry = updatedEmployer.industry
        employerToUpdate.description = updatedEmployer.description
        employerToUpdate.urlToMiniatureImage = updatedEmployer.urlToMiniatureImage
        employerToUpdate.urlToBackgroundImage = updatedEmployer.urlToBackgroundImage
        employerToUpdate.urlToWebsite = updatedEmployer.urlToWebsite

        employerRepository.save(employerToUpdate)
        return ResponseEntity.ok(employerToUpdate)
    }

    fun deleteEmployeeById(id: Long): ResponseEntity<Long> {
        employerRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }

    fun deleteEmployerByName(employerName: String): ResponseEntity<String> {
        employerRepository.deleteEmployerByEmployerName(employerName)
        return ResponseEntity.ok(employerName)
    }

    fun returnEmployerByName(employerName: String): Employer =
        employerRepository.returnEmployerByEmployerName(employerName)

}


