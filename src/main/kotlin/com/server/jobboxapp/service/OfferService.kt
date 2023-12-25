package com.server.jobboxapp.service

import com.server.jobboxapp.entity.JobOffer
import com.server.jobboxapp.entity.OfferRequest
import com.server.jobboxapp.repository.OfferRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class OfferService(private val offerRepository: OfferRepository, private  val employerService: EmployerService) {

    fun returnAllOffers(): List<JobOffer> =
        offerRepository.findAll()
    fun returnOfferById(id: Long): JobOffer{
       return offerRepository
            .findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
    }

    fun createNewOffer(offerRequest: OfferRequest, employerId: Long): ResponseEntity<JobOffer> {
        var employer = employerService.returnEmployeeById(employerId)

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
            promotedFlag = offerRequest.promotedFlag)

        val savedOffer = offerRepository.save(offer)
        return ResponseEntity.ok(savedOffer)
    }

    fun updateOffer(id: Long, updatedOffer: JobOffer): ResponseEntity<JobOffer> {
        val oldOffer =
            offerRepository.findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
//        oldOffer.title = updatedOffer.title
//        oldOffer.employer = updatedOffer.employer
//        val updatedOffer = offerRepository.save(updateOffer())

        return ResponseEntity.ok(updatedOffer)
    }

    fun returnOffersOfTheDay(): List<JobOffer> =
        offerRepository
            .findJobsOfTheDay()

    fun returnMapOfBrowseCategoryAndCount(): Map<String, Int>{
        val categoriesToBrowse = offerRepository.findAllCategoriesToBrowse()
        return categoriesToBrowse.map {
            it to offerRepository.countJobsByCategoriesToBrowse(it)
        }.toMap()
    }
    fun deleteOffer(id: Long):ResponseEntity<Long> {
        offerRepository.deleteById(id)
        return ResponseEntity.ok(id)
    }
}

