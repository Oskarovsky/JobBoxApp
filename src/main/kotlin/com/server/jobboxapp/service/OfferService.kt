package com.server.jobboxapp.service

import com.server.jobboxapp.repository.OfferRepository
import org.springframework.stereotype.Service

@Service
class OfferService(private val offerRepository: OfferRepository) {

    fun getBrowseCategoryToMap(): Map<String, Int>{
        val categoriesToBrowse = offerRepository.findAllCategoriesToBrowse()
        return categoriesToBrowse.map {
            it to offerRepository.countJobsByCategoriesToBrowse(it)
        }.toMap()
    }



}