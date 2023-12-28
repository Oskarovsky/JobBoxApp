package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.JobOffer
import com.server.jobboxapp.entity.OfferRequest
import com.server.jobboxapp.service.JobOfferService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/offer")
class JobOfferGateway(
    private val jobOfferService: JobOfferService
) {

    @GetMapping
    @CrossOrigin(origins = ["*"])
    fun getAllOffers(): List<JobOffer> = jobOfferService.returnAllOffers()

    @GetMapping("/{id}")
    fun getOfferById(@PathVariable id: Long): JobOffer =
        jobOfferService.returnOfferById(id)

    @GetMapping("/jobsOfTheDay")
    fun getJobsOfTheDay(): List<JobOffer> =
        jobOfferService.returnOffersOfTheDay()

    @GetMapping("/browseByCategory")
    fun getBrowseByCategory(): Map<String, Int> =
        jobOfferService.returnMapOfBrowseCategoryAndCount()

    @PostMapping("/create", consumes = ["application/json"])
    fun createNewOffer(@RequestBody offerRequest: OfferRequest): ResponseEntity<JobOffer> =
        jobOfferService.createNewOffer(offerRequest)

    @PutMapping("/{id}")
    fun updateOffer(@PathVariable id: Long, @RequestBody updatedOffer: OfferRequest): ResponseEntity<JobOffer> =
        jobOfferService.updateOffer(id, updatedOffer)

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long): ResponseEntity<Long> =
        jobOfferService.deleteOffer(id)

}
