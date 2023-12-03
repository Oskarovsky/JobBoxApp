package com.server.jobboxapp.service

import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import jakarta.annotation.PostConstruct
import org.springframework.stereotype.Service

@Service
class DefaultDataService(
    employerRepository: EmployerRepository,
    offerRepository: OfferRepository
) {

    @PostConstruct
    fun initDefaultData() {
        val defaultData = loadDataFromJson()
        // TODO (save data)
    }

    private fun loadDataFromJson(): Any {
        TODO("Not yet implemented")
    }

}