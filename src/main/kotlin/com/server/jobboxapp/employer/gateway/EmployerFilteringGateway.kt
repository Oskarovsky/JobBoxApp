package com.server.jobboxapp.employer.gateway
import com.server.jobboxapp.employer.entity.CountryBoxDropDown
import com.server.jobboxapp.employer.entity.EmployerFrontEndEntity
import com.server.jobboxapp.employer.entity.EmployersAvailable
import com.server.jobboxapp.employer.entity.IndustryBoxDropDown
import com.server.jobboxapp.employer.service.EmployerFilteringService
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
