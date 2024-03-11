package com.server.jobboxapp.joboffer.service

import com.server.jobboxapp.employer.service.EmployerService
import com.server.jobboxapp.joboffer.data.JobOffer
import com.server.jobboxapp.joboffer.data.OfferRequest
import com.server.jobboxapp.joboffer.entity.JobOfferFilter
import com.server.jobboxapp.joboffer.repository.JobOfferRepository
import jakarta.persistence.criteria.Predicate
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.jpa.domain.Specification
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class JobOfferService(
    private val jobOfferRepository: JobOfferRepository,
    private val employerService: EmployerService
) {

    fun returnAllOffers(): List<JobOffer> =
        jobOfferRepository.findAll()

    fun returnAllOffersPage(page: Int, size: Int): Page<JobOffer> {
        return jobOfferRepository.findAll(PageRequest.of(page, size))
    }

    fun getFilteredOffers(filter: JobOfferFilter, page: Int, size: Int): Page<JobOffer> {
        val pageable: PageRequest = PageRequest.of(page, size)
        val specification: Specification<JobOffer> = Specification { root, _, criteriaBuilder ->
            val predicates = mutableListOf<Predicate>()
            filter.positionTitle.let {
                predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("positionTitle")), "%${it.lowercase()}"))
            }

            criteriaBuilder.and(*predicates.toTypedArray())
        }
        return jobOfferRepository.findAll(specification, pageable)
    }

    fun returnOfferById(id: Long): JobOffer {
        return jobOfferRepository
            .findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
    }
    @Transactional
    fun createNewOffer(offerRequest: OfferRequest): ResponseEntity<JobOffer> {
        val employer = employerService.returnEmployeeById(offerRequest.employerId)

        val offer = JobOffer(
            positionTitle = offerRequest.positionTitle,
            employer = employer,
            experienceLevel = offerRequest.experienceLevel,
            employmentType = offerRequest.employmentType,
            employmentModel = offerRequest.employmentModel,
            minSalaryBracket = offerRequest.minSalaryBracket,
            maxSalaryBracket = offerRequest.maxSalaryBracket,
            categoryToBrowse = offerRequest.categoryToBrowse,
            technologyStack = offerRequest.technologyStack,
            jobOfferDescription = offerRequest.jobOfferDescription,
            country = offerRequest.country,
            city = offerRequest.city,
            street = offerRequest.street,
            postCode = offerRequest.postCode,
            urlToApply = offerRequest.urlToApply,
            promotedFlag = offerRequest.promotedFlag
        )

        val savedOffer = jobOfferRepository.save(offer)
        return ResponseEntity.ok(savedOffer)
    }

    @Transactional
    fun updateOffer(id: Long, updatedOffer: OfferRequest): ResponseEntity<JobOffer> {
        val offerToUpdate =
            jobOfferRepository.findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }

        offerToUpdate.positionTitle = updatedOffer.positionTitle
        offerToUpdate.employer
        offerToUpdate.experienceLevel = updatedOffer.experienceLevel
        offerToUpdate.employmentType = updatedOffer.employmentType
        offerToUpdate.employmentModel = updatedOffer.employmentModel
        offerToUpdate.categoryToBrowse = updatedOffer.categoryToBrowse
        offerToUpdate.technologyStack = updatedOffer.technologyStack
        offerToUpdate.jobOfferDescription = updatedOffer.jobOfferDescription
        offerToUpdate.minSalaryBracket = updatedOffer.minSalaryBracket
        offerToUpdate.maxSalaryBracket = updatedOffer.maxSalaryBracket
        offerToUpdate.country = updatedOffer.country
        offerToUpdate.city = updatedOffer.city
        offerToUpdate.street = updatedOffer.street
        offerToUpdate.postCode = updatedOffer.postCode
        offerToUpdate.urlToApply = updatedOffer.urlToApply
        offerToUpdate.promotedFlag = updatedOffer.promotedFlag

        jobOfferRepository.save(offerToUpdate)
        return ResponseEntity.ok(offerToUpdate)
    }

    fun deleteOffer(id: Long): ResponseEntity<Long> {
        jobOfferRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }
}

