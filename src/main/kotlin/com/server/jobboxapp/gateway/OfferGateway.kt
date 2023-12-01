package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.Offer
import com.server.jobboxapp.repository.OfferRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/offer")
class OfferGateway(
    private val offerRepository: OfferRepository
) {

    @GetMapping
    fun getAllOffers(): List<Offer> = offerRepository.findAll()

    @GetMapping("/{id}")
    fun getOfferById(@PathVariable id: Long): Offer =
        offerRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no offer with id: $id") }

    @PostMapping
    fun createOffer(@RequestBody offer: Offer): Offer =
        offerRepository.save(offer)

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