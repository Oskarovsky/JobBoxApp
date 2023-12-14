package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.JobOffer
import com.server.jobboxapp.entity.OfferRequest
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/offer")
class OfferGateway(
    private val offerRepository: OfferRepository,
    private val employerRepository: EmployerRepository
) {

    @GetMapping
    @CrossOrigin(origins = ["*"])
    fun getAllOffers(): List<JobOffer> = offerRepository.findAll()

    @GetMapping("/{id}")
    fun getOfferById(@PathVariable id: Long): JobOffer =
        offerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no offer with id: $id") }

    @PostMapping(consumes = ["application/json"])
    fun createOffer(@RequestBody jobOffer: JobOffer): JobOffer =
        offerRepository.save(jobOffer)

    @PostMapping("/create", consumes = ["application/json"])
    fun createNewOffer(@RequestBody offerRequest: OfferRequest): ResponseEntity<JobOffer> {
        val employer = employerRepository.findById(offerRequest.employerId)
            .orElseThrow { NoSuchElementException("Employer with ID ${offerRequest.employerId} not found") }

        val offer = JobOffer(
            positionTitle = offerRequest.positionTitle,
            experienceLevel = offerRequest.experienceLevel,
            employmentType = offerRequest.employmentType,
            employmentModel = offerRequest.employmentModel,
            categoryToBrowse = offerRequest.categoryToBrowse,
            technologyStack = offerRequest.technologyStack,
            jobOfferDescription = offerRequest.jobOfferDescription,
            country = offerRequest.country,
            city = offerRequest.city,
            street = offerRequest.street,
            urlToApply = offerRequest.urlToApply,
            promotedFlag = offerRequest.promotedFlag,
            employer = employer
        )
        val savedOffer = offerRepository.save(offer)
        return ResponseEntity.ok(savedOffer)
    }

    @PutMapping("/{id}")
    fun updateOffer(@PathVariable id: Long, @RequestBody updatedOffer: JobOffer): JobOffer {
        val updatedOffer =
            offerRepository.findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
//        offer.title = updatedOffer.title
//        offer.employer = updatedOffer.employer
        return offerRepository.save(updatedOffer)
    }

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long) {
        offerRepository.deleteById(id)
    }

}
