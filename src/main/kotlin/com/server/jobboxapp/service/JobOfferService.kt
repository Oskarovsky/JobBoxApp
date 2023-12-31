package com.server.jobboxapp.service

import com.server.jobboxapp.entity.Country
import com.server.jobboxapp.entity.joboffer.*
import com.server.jobboxapp.repository.JobOfferRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class JobOfferService(
    private val jobOfferRepository: JobOfferRepository,
    private val employerService: EmployerService
) {

    fun returnAllOffers(): List<JobOffer> =
        jobOfferRepository.findAll()

    fun returnOfferById(id: Long): JobOffer {
        return jobOfferRepository
            .findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
    }

    fun createNewOffer(offerRequest: OfferRequest): ResponseEntity<JobOffer> {
        val employer = employerService.returnEmployeeById(offerRequest.employerId)

        val offer = JobOffer(
            positionTitle = offerRequest.positionTitle,
            employer = employer,
            experienceLevel = offerRequest.experienceLevel,
            employmentType = offerRequest.employmentType,
            employmentModel = offerRequest.employmentModel,
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
        offerToUpdate.country = updatedOffer.country
        offerToUpdate.city = updatedOffer.city
        offerToUpdate.street = updatedOffer.street
        offerToUpdate.postCode = updatedOffer.postCode
        offerToUpdate.urlToApply = updatedOffer.urlToApply
        offerToUpdate.promotedFlag = updatedOffer.promotedFlag

        jobOfferRepository.save(offerToUpdate)
        return ResponseEntity.ok(offerToUpdate)
    }

    fun updatePositionTitle(id: Long, positionTitle: String) {
        jobOfferRepository.updatePositionTitle(id, positionTitle)
    }

    fun updateExperienceLevel(id: Long, experienceLevel: String) {
        jobOfferRepository.updateExperienceLevel(id, experienceLevel)
    }

    fun updateEmploymentType(id: Long, employmentType: String) {
        jobOfferRepository.updateEmploymentType(id, employmentType)
    }

    fun updateEmploymentModel(id: Long, employmentModel: String) {
        jobOfferRepository.updateEmploymentModel(id, employmentModel)
    }

    fun updateCategoryToBrowse(id: Long, categoryToBrowse: String) {
        jobOfferRepository.updateCategoryToBrowse(id, categoryToBrowse)
    }

    fun updateTechnologyStack(id: Long, technologyStack: List<String>) {
        jobOfferRepository.updateTechnologyStack(id, technologyStack)
    }

    fun updateJobOfferDescription(id: Long, jobOfferDescription: String) {
        jobOfferRepository.updateJobOfferDescription(id, jobOfferDescription)
    }

    fun updateCountry(id: Long, country: String) {
        jobOfferRepository.updateCountry(id, country)
    }

    fun updateCity(id: Long, city: String) {
        jobOfferRepository.updateCity(id, city)
    }

    fun updatePostCode(id: Long, postCode: String) {
        jobOfferRepository.updatePostCode(id, postCode)
    }

    fun updateStreet(id: Long, street: String) {
        jobOfferRepository.updateStreet(id, street)
    }

    fun updateUrlToApply(id: Long, urlToApply: String) {
        jobOfferRepository.updateUrlToApply(id, urlToApply)
    }

    fun updatePromotedFlag(id: Long, promotedFlag: Int) {
        jobOfferRepository.updatePromotedFlag(id, promotedFlag)
    }

    fun deleteOffer(id: Long): ResponseEntity<Long> {
        jobOfferRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }
}

