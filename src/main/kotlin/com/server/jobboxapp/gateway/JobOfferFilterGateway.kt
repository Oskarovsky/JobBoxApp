package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.*
import com.server.jobboxapp.entity.CountryBoxDropDown
import com.server.jobboxapp.entity.joboffer.*
import com.server.jobboxapp.service.JobOfferFilteringService
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/filterOffers")
class JobOfferFilterGateway(
    private val jobOfferFilteringService: JobOfferFilteringService
) {
    @GetMapping("/location")
    fun getLocationFilter(): List<LocationFilter> =
        jobOfferFilteringService.returnLocationForFilter()

    @GetMapping("/experienceLevel")
    fun getExperienceFilter(): List<ExperienceLevelFilter> =
        jobOfferFilteringService.returnExperienceLevelForFilter()

    @GetMapping("/roles")
    fun getRolesFilter(): List<RolesFilter> =
        jobOfferFilteringService.returnRolesForFilter()

    @GetMapping("/employmentModel")
    fun getEmploymentModel(): List<EmploymentModelFilter> =
        jobOfferFilteringService.returnEmploymentModelForFilter()

    @GetMapping("/employmentType")
    fun getEmploymentType(): List<EmploymentTypeFilter> =
        jobOfferFilteringService.returnEmploymentTypeForFilter()

    @GetMapping("/categoryNameAndCount")
    fun getCategoryNameAndCount(): List<CategoryNameAndCount> =
        jobOfferFilteringService.returnCategoryNameAndCount()

    @GetMapping("/jobsOfTheDay")
    fun getJobsOfTheDay(): List<JobOfferMiniature> =
        jobOfferFilteringService.returnOffersOfTheDay()

    @GetMapping("/rowJobOfferList")
    fun getRowJobOfferList(): List<JobOfferMiniature> =
        jobOfferFilteringService.returnRowJobOfferList()

    @GetMapping("/countryBoxList")
    fun getCountryBoxFiltering(): List<CountryBoxDropDown>  =
        jobOfferFilteringService.returnCountryBoxList()

    @GetMapping("/all")
    fun getAllJobsCount(): JobsAvailable =
        jobOfferFilteringService.returnNumberOfAllJobs()

    @GetMapping("jobsListByCategory/{categoryName}")
    fun getListOfJobsByCategoryName(@PathVariable categoryName: String): List<JobOffer> =
        jobOfferFilteringService.returnJobListByCategoryToBrowse(categoryName)
}
