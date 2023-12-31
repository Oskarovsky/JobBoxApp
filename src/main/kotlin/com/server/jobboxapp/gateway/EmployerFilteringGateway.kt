package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.employer.Employer
import com.server.jobboxapp.entity.employer.EmployersAvailable
import com.server.jobboxapp.entity.employer.Industry
import com.server.jobboxapp.service.EmployerFilteringService
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/filterEmployer")
class EmployerFilteringGateway(
    private val employerFilteringService: EmployerFilteringService
) {
    @GetMapping("/all")
    fun getAllEmployers(): List<Employer> = employerFilteringService.returnAllEmployersList()

    @GetMapping("/countOfEmployersAvailable")
    fun getEmployerCounts(): EmployersAvailable =
        employerFilteringService.returnNumberOfAllEmployers()

    @GetMapping("/industryBoxList")
    fun getIndustryBoxFiltering(): List<String> {
        val industryBoxList = Industry.values()
        return industryBoxList.map { it.title }.toList()
    }
}
