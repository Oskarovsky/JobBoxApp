package com.server.jobboxapp.service

import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import jakarta.annotation.PostConstruct
import mu.KotlinLogging
import org.springframework.stereotype.Service

@Service
class DefaultDataService(
    employerRepository: EmployerRepository,
    offerRepository: OfferRepository
) {

    private val logger = KotlinLogging.logger {}

    @PostConstruct
    fun initDefaultData() {
        val defaultData = loadDataFromJson()
        // TODO (save data)
    }

    private fun loadDataFromJson() {
        logger.info { "Importing data" }
//        TODO("Not yet implemented")
    }

}
