package com.server.jobboxapp

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.entity.employer.Employer
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
import org.springframework.transaction.annotation.Transactional
import java.io.File
import java.net.URL

@SpringBootTest
class EmployerServiceTests {

    lateinit var employerList: List<Employer>
    lateinit var offerRequestList: List<OfferRequest>
    lateinit var jsonMapper: ObjectMapper
    lateinit var employerService: EmployerService
    lateinit var jobOfferService: JobOfferService

    @Autowired
    lateinit var employerRepository: EmployerRepository

    @Autowired
    lateinit var jobOfferRepository: JobOfferRepository


    @BeforeEach
    fun setUp() {
        jsonMapper = jacksonObjectMapper()
        employerService = EmployerService(employerRepository)
        jobOfferService = JobOfferService(jobOfferRepository, employerService)
        employerRepository.deleteAll()
        jobOfferRepository.deleteAll()
    }

    @Test
    fun loadThreeEmployersAndSaveThem() {
        loadEmployerDataToDatabase()

        Assertions.assertEquals(3, employerService.returnAllEmployees().count())

    }

    @Test
    fun deleteEmployers() {
        loadEmployerDataToDatabase()

        employerService.deleteEmployeeById(1)
        employerService.deleteEmployeeById(3)

        val Employer = employerService.returnEmployeeById(2)

        Assertions.assertEquals("Maersk", Employer.name)
    }


//    @Test
//    fun testJpaQuery() {
//        loadEmployerDataToDatabase()
//
//        employerService.updateEmployerName(1, "Apple1")
//        employerService.updateIndustry(1, "IT1")
//        employerService.updateEmployerDescription(1, "opis1")
//        employerService.updateUrlToWebsite(1, "apple.pl1")
//        employerService.updateUrlToImage(1, "11.png")
//
//        Assertions.assertEquals("Apple1", employerService.returnEmployeeById(1).name)
//        Assertions.assertEquals("IT1", employerService.returnEmployeeById(1).industry)
//        Assertions.assertEquals("opis1", employerService.returnEmployeeById(1).description)
//        Assertions.assertEquals("apple.pl1", employerService.returnEmployeeById(1).urlToWebsite)
//        Assertions.assertEquals("11.png", employerService.returnEmployeeById(1).urlToImage)
//    }


    @Test
    fun updateEmployerEntity() {
        loadEmployerDataToDatabase()

        val filePathWithEmployers = object {}.javaClass.getResource("/employerDataTestUpdate.json")?.file
        val employerToUpdate =
            jsonMapper.readValue<Employer>(File(filePathWithEmployers))

        employerService.updateEmployerEntity(1, employerToUpdate)

        Assertions.assertEquals(
            employerToUpdate.name,
            employerService.returnEmployerByName("Apple1").name
        )
        Assertions.assertEquals(
            employerToUpdate.description,
            employerService.returnEmployerByName("Apple1").description
        )
    }


    @Test
    @Transactional
    fun deleteEmployerByName() {
        loadEmployerDataToDatabase()

        employerService.deleteEmployerByName("Apple")

        Assertions.assertEquals(12, employerService.returnAllEmployees().size)
    }

    @Test
    fun returnEmployerByName() {
        loadEmployerDataToDatabase()

        val employer = employerService.returnEmployerByName("Maersk")

        Assertions.assertEquals("Maersk", employer.name)
    }

    fun loadEmployerList() {
        val filePathWithEmployers = object {}.javaClass.getResource("/employerDataTest.json")?.file
        employerList =
            jsonMapper.readValue(File(filePathWithEmployers))
    }

    fun loadEmployerDataToDatabase() {
        loadEmployerList()
        employerList.stream().forEach {
            employerService.saveEmployerEntity(it)
        }
    }

    fun loadJobOfferRequest() {
        val filePathWithOfferRequests = object {}.javaClass.getResource("/jobOfferDataTest.json")?.file
        offerRequestList =
            jsonMapper.readValue(File(filePathWithOfferRequests))
    }

    fun createOffersAndLoadToDatabase() {
        loadJobOfferRequest()
        offerRequestList.stream().forEach {
            jobOfferService.createNewOffer(it)
        }
    }
}
