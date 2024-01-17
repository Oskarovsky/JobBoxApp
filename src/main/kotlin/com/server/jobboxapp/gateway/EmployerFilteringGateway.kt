package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.CountryBoxDropDown
import com.server.jobboxapp.entity.employer.*
import com.server.jobboxapp.service.EmployerFilteringService
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/filterEmployer")
class EmployerFilteringGateway(
    private val employerFilteringService: EmployerFilteringService
) {
    @GetMapping("/all")
    fun getAllEmployers(): List<EmployerFrontEndEntity> = employerFilteringService.returnEmployerFrontEndEntityList()
    @GetMapping("byId/{id}")
    fun getEmployerById(@PathVariable id: Long): EmployerFrontEndEntity =
        employerFilteringService.returnEmployerFrontEndEntityById(id)

    @GetMapping("/countOfEmployersAvailable")
    fun getEmployerCounts(): EmployersAvailable =
        employerFilteringService.returnNumberOfAllEmployers()

    @GetMapping("/industryBoxList")
    fun getIndustryBoxFiltering(): List<IndustryBoxDropDown>  =
        employerFilteringService.returnIndustryBoxList()


    @GetMapping("/countryBoxList")
    fun getCountryBoxFiltering(): List<CountryBoxDropDown>  =
        employerFilteringService.returnCountryBoxList()

}
