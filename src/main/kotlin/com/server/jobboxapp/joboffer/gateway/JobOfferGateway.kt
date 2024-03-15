package com.server.jobboxapp.joboffer.gateway

import com.server.jobboxapp.joboffer.data.JobOffer
import com.server.jobboxapp.joboffer.data.OfferRequest
import com.server.jobboxapp.joboffer.entity.JobOfferFilter
import com.server.jobboxapp.joboffer.service.JobOfferService
import org.springframework.data.domain.Page
import org.springframework.http.HttpStatus
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
    fun getAllJobOffers(
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "5") size: Int
    ): Page<JobOffer> {
        return jobOfferService.returnAllOffersPage(page, size)
    }

    @GetMapping("/filtered")
    fun getFilteredJobOffers(
        @RequestBody filter: JobOfferFilter,
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "5") size: Int
    ): Page<JobOffer> {
        return jobOfferService.getFilteredOffers(filter, page, size)
    }

    @GetMapping("/{id}")
    fun getOfferById(@PathVariable id: Long): ResponseEntity<JobOffer> {
        return try {
            ResponseEntity.ok(jobOfferService.returnOfferById(id))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @PostMapping("/create", consumes = ["application/json"])
    fun createNewOffer(@RequestBody offerRequest: OfferRequest): ResponseEntity<JobOffer> {
        return try {
            jobOfferService.createNewOffer(offerRequest)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @PutMapping("/{id}")
    fun updateOffer(@PathVariable id: Long, @RequestBody updatedOffer: OfferRequest): ResponseEntity<JobOffer> {
        return try {
            jobOfferService.updateOffer(id, updatedOffer)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long): ResponseEntity<Long> {
        return try {
            jobOfferService.deleteOffer(id)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

}
