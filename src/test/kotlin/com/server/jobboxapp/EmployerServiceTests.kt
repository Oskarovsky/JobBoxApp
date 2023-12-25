package com.server.jobboxapp

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.entity.JobOffer
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.OfferRepository
import com.server.jobboxapp.service.EmployerService
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.transaction.annotation.Transactional
import java.net.URL

@SpringBootTest
class EmployerServiceTests {

    lateinit var employerList: List<Employer>
    lateinit var jobOfferList: List<JobOffer>
    lateinit var jsonMapper: ObjectMapper
    lateinit var employerService: EmployerService

    @Autowired
    lateinit var employerRepository: EmployerRepository

    @Autowired
    lateinit var offerRepository: OfferRepository


    @BeforeEach
    fun setUp() {
        jsonMapper = jacksonObjectMapper()
        employerService = EmployerService(employerRepository, offerRepository)
        employerRepository.deleteAll()
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

        Assertions.assertEquals("Maersk", Employer.employerName)
    }


    @Test
    fun updateEmployerName() {
        loadEmployerDataToDatabase()

        employerService.updateEmployerName(1, "Apple1")

        Assertions.assertEquals("Apple1", employerService.returnEmployeeById(1).employerName)
    }

    @Test
    fun updateIndustry() {
        loadEmployerDataToDatabase()

        employerService.updateIndustry(1, "IT1")

        Assertions.assertEquals("IT1", employerService.returnEmployeeById(1).industry)
    }

    @Test
    fun updateEmployerDescription() {
        loadEmployerDataToDatabase()

        employerService.updateEmployerDescription(1, "opis1")

        Assertions.assertEquals("opis1", employerService.returnEmployeeById(1).employerDescription)
    }

    @Test
    fun updateUrlToWebsite() {
        loadEmployerDataToDatabase()

        employerService.updateUrlToWebsite(1, "apple.pl1")

        Assertions.assertEquals("apple.pl1", employerService.returnEmployeeById(1).urlToWebsite)
    }

    @Test
    fun updateUrlToImage() {
        loadEmployerDataToDatabase()

        employerService.updateUrlToImage(1, "11.png")

        Assertions.assertEquals("11.png", employerService.returnEmployeeById(1).urlToImage)
    }


    @Test
    fun updateEmployerEntity() {
        loadEmployerDataToDatabase()

        val employerToUpdate =
            jsonMapper.readValue<Employer>(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/employerDataTestUpdate.json"))

        employerService.updateEmployerEntity(1,employerToUpdate)

        Assertions.assertEquals(employerToUpdate.employerName, employerService.returnEmployerByName("Apple1").employerName)
        Assertions.assertEquals(employerToUpdate.employerDescription, employerService.returnEmployerByName("Apple1").employerDescription)
    }

    @Test
    fun mapEmployerToCount() {
        loadEmployerDataToDatabase()

        var jobOffer =
            jsonMapper.readValue<JobOffer>(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/jobOfferDataTest.json"))


        employerService.mapOfEmployerToCount()

    }


    @Test
    @Transactional
    fun deleteEmployerByName() {
        loadEmployerDataToDatabase()

        employerService.deleteEmployerByName("Apple")

        Assertions.assertEquals(2, employerService.returnAllEmployees().size)
    }

    @Test
    fun returnEmployerByName() {
        loadEmployerDataToDatabase()

        val employer = employerService.returnEmployerByName("Maersk")

        Assertions.assertEquals("Maersk", employer.employerName)
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
    fun loadJobOfferList() {
        jobOfferList =
            jsonMapper.readValue(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/employerDataTest.json"))
    }
}
