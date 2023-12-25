package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.JobOffer
import com.server.jobboxapp.entity.OfferRequest
import com.server.jobboxapp.service.OfferService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/offer")
class OfferGateway(
    private val offerService: OfferService
) {

    @GetMapping
    @CrossOrigin(origins = ["*"])
    fun getAllOffers(): List<JobOffer> = offerService.returnAllOffers()

    @GetMapping("/{id}")
    fun getOfferById(@PathVariable id: Long): JobOffer =
        offerService.returnOfferById(id)

    @GetMapping("/{jobsOfTheDay}")
    fun getJobsOfTheDay(): List<JobOffer> =
        offerService.returnOffersOfTheDay()

    @GetMapping("/{browseByCategory}")
    fun getBrowseByCategory(): Map<String, Int> =
        offerService.returnMapOfBrowseCategoryAndCount()

//    @PostMapping("/create", consumes = ["application/json"])
//    fun createNewOffer(@RequestBody offerRequest: OfferRequest): ResponseEntity<JobOffer> =
//        offerService.createNewOffer(offerRequest)

    @PutMapping("/{id}")
    fun updateOffer(@PathVariable id: Long, @RequestBody updatedOffer: JobOffer): ResponseEntity<JobOffer> =
        offerService.updateOffer(id, updatedOffer)

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long): ResponseEntity<Long> =
        offerService.deleteOffer(id)

}
