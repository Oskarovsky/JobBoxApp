package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.Offer
import com.server.jobboxapp.entity.OfferRequest
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import org.springframework.http.RequestEntity
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/offer")
class OfferGateway(
    private val offerRepository: OfferRepository,
    private val employerRepository: EmployerRepository
) {

    @GetMapping
    fun getAllOffers(): List<Offer> = offerRepository.findAll()

    @GetMapping("/{id}")
    fun getOfferById(@PathVariable id: Long): Offer =
        offerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no offer with id: $id") }

    @PostMapping(consumes = ["application/json"])
    fun createOffer(@RequestBody offer: Offer): Offer =
        offerRepository.save(offer)

    @PostMapping("/create", consumes = ["application/json"])
    fun createNewOffer(@RequestBody offerRequest: OfferRequest): ResponseEntity<Offer> {
        val employer = employerRepository.findById(offerRequest.employerId)
            .orElseThrow { NoSuchElementException("Employer with ID ${offerRequest.employerId} not found") }

        val offer = Offer(
            title = offerRequest.title,
            description = offerRequest.description,
            employer = employer
        )

        val savedOffer = offerRepository.save(offer)
        return ResponseEntity.ok(savedOffer)
    }

    @PutMapping("/{id}")
    fun updateOffer(@PathVariable id: Long, @RequestBody updatedOffer: Offer): Offer {
        val offer = offerRepository.findById(id).orElseThrow { NoSuchElementException("There is no offer with id: $id") }
        offer.title = updatedOffer.title
        offer.employer = updatedOffer.employer
        return offerRepository.save(offer)
    }

    @DeleteMapping("/{id}")
    fun deleteOffer(@PathVariable id: Long) {
        offerRepository.deleteById(id)
    }

}
