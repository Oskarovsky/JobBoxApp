package com.server.jobboxapp.employer.service

import com.server.jobboxapp.employer.data.Employer
import com.server.jobboxapp.employer.data.EmployerBackgroundImage
import com.server.jobboxapp.employer.data.EmployerDto
import com.server.jobboxapp.employer.data.EmployerMiniatureImage
import com.server.jobboxapp.employer.repositroy.EmployerBackgroundImageRepository
import com.server.jobboxapp.employer.repositroy.EmployerMiniatureImageRepository
import com.server.jobboxapp.employer.repositroy.EmployerRepository
import com.server.jobboxapp.employer.mapper.EmployerMapper
import mu.KotlinLogging
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.multipart.MultipartFile
import java.io.IOException
import java.util.*
import kotlin.NoSuchElementException


@Service
class EmployerService(
    private val employerRepository: EmployerRepository,
    private val employerMiniatureImageRepository: EmployerMiniatureImageRepository,
    private val employerBackgroundImageRepository: EmployerBackgroundImageRepository,
) {
    private var employerMiniatureImageCache = mapOf<Long, String>()
    private var employerBackgroundImageCache = mapOf<Long, String>()

    fun reLoadCache(){
        loadCacheMiniature()
        loadCacheBackground()
    }

    fun returnEmployerBackgroundImageCache() =
        employerBackgroundImageCache

    fun returnEmployerMiniatureImageCache() =
        employerMiniatureImageCache
    private fun loadCacheMiniature() {
        employerMiniatureImageCache = employerMiniatureImageRepository.findAll()
            .associate { it.employerId to Base64.getEncoder().encodeToString(it.miniatureImage) }
    }

    private fun loadCacheBackground() {
        employerBackgroundImageCache = employerBackgroundImageRepository.findAll()
            .associate { it.employerId to Base64.getEncoder().encodeToString(it.backgroundImage) }
    }

    private val logger = KotlinLogging.logger {}

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
        employerToUpdate.country = updatedEmployer.country
        employerToUpdate.city = updatedEmployer.city
        employerToUpdate.postCode = updatedEmployer.postCode
        employerToUpdate.street = updatedEmployer.street
        employerToUpdate.urlToWebsite = updatedEmployer.urlToWebsite

        employerRepository.save(employerToUpdate)
        return ResponseEntity.ok(employerToUpdate)
    }

    fun deleteEmployeeById(id: Long): ResponseEntity<Long> {
        employerRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }

    @Transactional
    fun saveEmployerMiniatureImage(employerName: String, employerId: Long, file: MultipartFile): EmployerMiniatureImage {
       val message = "Saved miniature image to database for $employerName, id=$employerId"
        try {
            val employerMiniatureImage = EmployerMiniatureImage(employerId, employerName,file.bytes)
            employerMiniatureImageRepository.save(employerMiniatureImage)
            logger.info { message }
            return employerMiniatureImage
        } catch (e: IOException) {
            throw IOException("Could not save miniature image to database for $employerName with id $employerId", e)
        }
    }

    @Transactional
    fun saveEmployerBackgroundImage(employerName: String, employerId: Long, file: MultipartFile): EmployerBackgroundImage {
        val message = "Saved miniature image to database for $employerName, id=$employerId"
        try {
            val employerBackgroundImage = EmployerBackgroundImage(employerId, employerName,file.bytes)
            employerBackgroundImageRepository.save(employerBackgroundImage)
            logger.info { message }

            return employerBackgroundImage
        } catch (e: IOException) {
            throw IOException("Could not save background image to database for $employerName with id $employerId", e)
        }
    }

    fun getEmployerMiniatureImage(employerId: Long): String? {
        try {
            val employerMiniatureImageEntity = employerMiniatureImageRepository.returnMiniatureImageByEmployerId(employerId)
            return employerMiniatureImageEntity?.let {
                Base64.getEncoder().encodeToString(it.miniatureImage)
            }
        } catch (e: IOException) {
            throw IOException("Could not return miniature image to database with employer_id $employerId", e)
        }
    }

    fun getEmployerBackgroundImage(employerId: Long): String? {
        try {
            val employerBackgroundImageEntity = employerBackgroundImageRepository.returnBackgroundImageByEmployerId(employerId)
            return employerBackgroundImageEntity?.let {
                Base64.getEncoder().encodeToString(it.backgroundImage)
            }
        } catch (e: IOException) {
            throw IOException("Could not return background image to database with employer_id $employerId", e)
        }
    }

    fun deleteEmployerMiniatureImage(employerId: Long):ResponseEntity<Long> {
        employerMiniatureImageRepository.deleteById(employerId)
        return ResponseEntity.ok(employerId)
    }
    fun deleteEmployerBackgroundImage(employerId: Long):ResponseEntity<Long> {
        employerMiniatureImageRepository.deleteById(employerId)
        return ResponseEntity.ok(employerId)
    }

}


