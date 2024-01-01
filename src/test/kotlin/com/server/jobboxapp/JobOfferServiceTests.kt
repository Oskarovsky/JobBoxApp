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

    @Test
    fun testJpaQuery() {
        loadEmployerDataToDatabase()
        createOffersAndLoadToDatabase()

        jobOfferService.updatePositionTitle(1, "Cloud Developer")
        jobOfferService.updateExperienceLevel(1, "Senior")
        jobOfferService.updateEmploymentType(1, "Full time")
        jobOfferService.updateEmploymentModel(1, "On-site")
        jobOfferService.updateCategoryToBrowse(1, "BackEnd")
        jobOfferService.updateJobOfferDescription(1, "opis1")
        jobOfferService.updateCountry(1, "Poland")
        jobOfferService.updateCity(1, "Copenhagen")
        jobOfferService.updatePostCode(1, "11111")
        jobOfferService.updateStreet(1, "Techstrasse 456")
        jobOfferService.updateUrlToApply(1, "url1")
        jobOfferService.updatePromotedFlag(1, 1)

        Assertions.assertEquals("Cloud Developer", jobOfferService.returnOfferById(1).positionTitle)
        Assertions.assertEquals("Senior", jobOfferService.returnOfferById(1).experienceLevel)
        Assertions.assertEquals("Full time", jobOfferService.returnOfferById(1).employmentType)
        Assertions.assertEquals("On-site", jobOfferService.returnOfferById(1).employmentModel)
        Assertions.assertEquals("BackEnd", jobOfferService.returnOfferById(1).categoryToBrowse)
        Assertions.assertEquals("opis1", jobOfferService.returnOfferById(1).jobOfferDescription)
        Assertions.assertEquals("Poland", jobOfferService.returnOfferById(1).country)
        Assertions.assertEquals("Copenhagen", jobOfferService.returnOfferById(1).city)
        Assertions.assertEquals("11111", jobOfferService.returnOfferById(1).postCode)
        Assertions.assertEquals("Techstrasse 456", jobOfferService.returnOfferById(1).street)
        Assertions.assertEquals("url1", jobOfferService.returnOfferById(1).urlToApply)
        Assertions.assertEquals(1, jobOfferService.returnOfferById(1).promotedFlag)
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
        var updatedJobOffer = jsonMapper.readValue<OfferRequest>(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/jobOfferDataTestUpdate.json"))

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
        employerList =
            jsonMapper.readValue(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/employerDataTest.json"))
    }

    fun loadEmployerDataToDatabase() {
        loadEmployerList()
        employerList.stream().forEach {
            employerService.saveEmployerEntity(it)
        }
    }

    fun loadJobOfferRequest() {
        offerRequestList =
            jsonMapper.readValue(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/jobOfferDataTest.json"))
    }

    fun createOffersAndLoadToDatabase() {
        loadJobOfferRequest()
        offerRequestList.stream().forEach {
            jobOfferService.createNewOffer(it)
        }
    }

}