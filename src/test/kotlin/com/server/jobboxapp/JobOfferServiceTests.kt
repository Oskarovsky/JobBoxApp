package com.server.jobboxapp

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.employer.data.Employer
import com.server.jobboxapp.joboffer.data.OfferRequest
import com.server.jobboxapp.employer.repositroy.EmployerRepository
import com.server.jobboxapp.joboffer.repository.JobOfferRepository
import com.server.jobboxapp.employer.service.EmployerService
import com.server.jobboxapp.joboffer.service.JobOfferService
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.io.File

@SpringBootTest
class JobOfferServiceTests {
}
