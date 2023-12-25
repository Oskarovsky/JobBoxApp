package com.server.jobboxapp

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.entity.JobOffer
import com.server.jobboxapp.entity.OfferRequest
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import com.server.jobboxapp.service.EmployerService
import com.server.jobboxapp.service.OfferService
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.transaction.annotation.Transactional
import java.net.URL

@SpringBootTest
class JobOfferServiceTests {

    lateinit var employerList: List<Employer>
    lateinit var jobOfferList: List<JobOffer>
    lateinit var jsonMapper: ObjectMapper
    lateinit var employerService: EmployerService
    lateinit var offerService: OfferService

    @Autowired
    lateinit var offerRepository: OfferRepository


    @BeforeEach
    fun setUp() {
        jsonMapper = jacksonObjectMapper()
        offerService = OfferService(offerRepository, employerService)
        offerRepository.deleteAll()
    }

//    @Test
//    fun loadThreeEmployersAndSaveThem() {
//        loadEmployerDataToDatabase()
//
//        val jobOfferRequest =
//            jsonMapper.readValue<OfferRequest>(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/jobOfferDataTest.json"))
//
//        offerService.createNewOffer(jobOfferRequest)
//
//
//    }

    fun loadEmployerList() {
        employerList =
            jsonMapper.readValue(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/employerDataTest.json"))
    }

    fun loadEmployerDataToDatabase() {
        loadEmployerList()
        employerList.stream().forEach {
            employerService.saveEmployerEntity(it)
        }
    }

}