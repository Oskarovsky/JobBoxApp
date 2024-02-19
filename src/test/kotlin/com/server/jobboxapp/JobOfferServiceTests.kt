package com.server.jobboxapp

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.entity.employer.Employer
import com.server.jobboxapp.entity.joboffer.JobOffer
import com.server.jobboxapp.entity.joboffer.OfferRequest
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.JobOfferRepository
import com.server.jobboxapp.service.EmployerService
import com.server.jobboxapp.service.JobOfferService
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.io.File
import java.net.URL

@SpringBootTest
class JobOfferServiceTests {

    lateinit var employerList: List<Employer>
    lateinit var offerRequestList: List<OfferRequest>
    lateinit var jsonMapper: ObjectMapper
    lateinit var jobOfferService: JobOfferService

    @Autowired
    lateinit var employerRepository: EmployerRepository

    @Autowired
    lateinit var jobOfferRepository: JobOfferRepository

    @Autowired
    lateinit var employerService: EmployerService

    @BeforeEach
    fun setUp() {
        jsonMapper = jacksonObjectMapper()
        employerService = EmployerService(employerRepository)
        jobOfferService = JobOfferService(jobOfferRepository, employerService)
        employerRepository.deleteAll()
        jobOfferRepository.deleteAll()
    }

    @Test
    fun returnAllOffersTest() {
        loadEmployerDataToDatabase()
        createOffersAndLoadToDatabase()

        Assertions.assertEquals(8, jobOfferService.returnAllOffers().size)
    }

    @Test
    fun deleteJobOfferTest() {
        loadEmployerDataToDatabase()
        createOffersAndLoadToDatabase()

        jobOfferService.deleteOffer(1)

        Assertions.assertEquals(7, jobOfferService.returnAllOffers().size)
    }

//    @Test
//    fun updateTechnologyStack() {
//        loadEmployerDataToDatabase()
//        createOffersAndLoadToDatabase()
//
//        jobOfferService.updateTechnologyStack(
//            1, listOf(
//                "Java",
//                "GCP"
//            )
//        )
//
//        Assertions.assertEquals( listOf(
//            "Java",
//            "GCP"
//        ), jobOfferService.returnOfferById(1).technologyStack)
//    }


    @Test
    fun updateEntity() {
        loadEmployerDataToDatabase()
        createOffersAndLoadToDatabase()

        val filePath = object {}.javaClass.getResource("/jobOfferDataTestUpdate.json")?.file
        val updatedJobOffer = jsonMapper.readValue<OfferRequest>(File(filePath))

        jobOfferService.updateOffer(8, updatedJobOffer)

        Assertions.assertEquals("Cloud Network Engineer 1", jobOfferService.returnOfferById(8).positionTitle)
        Assertions.assertEquals("Senior", jobOfferService.returnOfferById(8).experienceLevel)
        Assertions.assertEquals("opis10", jobOfferService.returnOfferById(8).jobOfferDescription)
        Assertions.assertEquals(0, jobOfferService.returnOfferById(8).promotedFlag)
    }

    @Test
    fun deleteEntity() {
        loadEmployerDataToDatabase()
        createOffersAndLoadToDatabase()

        jobOfferService.deleteOffer(1)

        Assertions.assertEquals(7, jobOfferService.returnAllOffers().size)
    }

    fun loadEmployerList() {
        val filePath = object {}.javaClass.getResource("/employerDataTest.json")?.file
        employerList = jsonMapper.readValue(File(filePath))
    }

    fun loadEmployerDataToDatabase() {
        loadEmployerList()
        employerList.stream().forEach {
            employerService.saveEmployerEntity(it)
        }
    }

    fun loadJobOfferRequest() {
        val filePathWithOfferRequests = object {}.javaClass.getResource("/offerRequestDataTest.json")?.file
        offerRequestList =
            jsonMapper.readValue<List<OfferRequest>>(File(filePathWithOfferRequests))
    }

    fun createOffersAndLoadToDatabase() {
        loadJobOfferRequest()
        offerRequestList.stream().forEach {
            jobOfferService.createNewOffer(it)
        }
    }

}
