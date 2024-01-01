package com.server.jobboxapp.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.entity.employer.Employer
import com.server.jobboxapp.entity.joboffer.JobOffer
import com.server.jobboxapp.entity.joboffer.OfferRequest
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.JobOfferRepository
import jakarta.annotation.PostConstruct
import mu.KotlinLogging
import org.springframework.stereotype.Service
import java.net.URL

@Service
class DefaultDataService(
    val employerRepository: EmployerRepository,
    val jobOfferService: JobOfferService
) {

    private val logger = KotlinLogging.logger {}

    @PostConstruct
    fun initDefaultData() {

        val jsonMapper = jacksonObjectMapper()
        val employerList: List<Employer> =
            jsonMapper.readValue(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/employerDataTest.json"))
        var jobOffersList: List<OfferRequest> =
            jsonMapper.readValue(URL("file:///C:/Git/JobBoxApp/src/main/resources/jobOffers1.json"))

        employerRepository.saveAll(employerList)
        jobOffersList.stream().forEach {
            jobOfferService.createNewOffer(it)
        }
    }
}
