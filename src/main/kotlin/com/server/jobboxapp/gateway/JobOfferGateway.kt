package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.joboffer.*
import com.server.jobboxapp.service.JobOfferService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/offer")
class JobOfferGateway(
    private val jobOfferService: JobOfferService
) {

    @GetMapping
    fun getAllOffers(): List<JobOffer> = jobOfferService.returnAllOffers()

    @GetMapping("/list")
    fun getAllJobOffers(@RequestParam(defaultValue = "0") page: Int,
                        @RequestParam(defaultValue = "5") size: Int): Page<JobOffer> {
        return jobOfferService.returnAllOffersPage(page, size)
    }

    @GetMapping("/filtered")
    fun getFilteredJobOffers(@RequestBody filter: JobOfferFilter,
                             @RequestParam(defaultValue = "0") page: Int,
                             @RequestParam(defaultValue = "5") size: Int): Page<JobOffer> {
        return jobOfferService.getFilteredOffers(filter, page, size)
    }

    @GetMapping("/{id}")
    fun getOfferById(@PathVariable id: Long): JobOffer =
        jobOfferService.returnOfferById(id)

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
