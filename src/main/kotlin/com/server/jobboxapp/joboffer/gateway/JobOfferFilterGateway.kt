package com.server.jobboxapp.joboffer.gateway

import com.server.jobboxapp.joboffer.data.JobOffer
import com.server.jobboxapp.joboffer.service.JobOfferFilteringService
import com.server.jobboxapp.joboffer.entity.*
import org.springframework.data.domain.Page
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/filterOffers")
class JobOfferFilterGateway(
    private val jobOfferFilteringService: JobOfferFilteringService
) {
    @GetMapping("/{id}")
    fun getOfferById(@PathVariable id: Long): JobOfferFrontEndEntity =
        jobOfferFilteringService.returnOffersById(id)

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
    fun getJobsOfTheDay(): List<JobOfferFrontEndEntity> =
        jobOfferFilteringService.returnOffersOfTheDay()

    @GetMapping("/rowJobOfferList")
    fun getRowJobOfferList(): List<JobOfferFrontEndEntity> =
        jobOfferFilteringService.returnRowJobOfferList()

    @GetMapping("/rowJobOfferPage")
    fun getRowJobOfferPage(@RequestParam(defaultValue = "0") page: Int,
                           @RequestParam(defaultValue = "5") size: Int): Page<JobOfferFrontEndEntity> =
        jobOfferFilteringService.getRowJobOfferPage(page, size)

    @PostMapping("/rowJobOfferFilteredPage")
    fun getFilteredJobOffers(@RequestBody filter: JobOfferFilter,
                             @RequestParam(defaultValue = "0") page: Int,
                             @RequestParam(defaultValue = "5") size: Int): Page<JobOfferFrontEndEntity> {
        if (filter.positionTitle.isEmpty() && filter.offerCountry.isEmpty()) {
            return jobOfferFilteringService.getRowJobOfferPage(page, size)
        }
        return jobOfferFilteringService.getFilteredOffers(filter, page, size)
    }

    @GetMapping("/countryBoxList")
    fun getCountryBoxFiltering(): List<CountryBoxDropDown>  =
        jobOfferFilteringService.returnCountryBoxList()

    @GetMapping("/all")
    fun getAllJobsCount(): JobsAvailable =
        jobOfferFilteringService.returnNumberOfAllJobs()

    @GetMapping("jobsListByCategory/{categoryName}")
    fun getListOfJobsByCategoryName(@PathVariable categoryName: String): List<JobOffer> =
        jobOfferFilteringService.returnJobListByCategoryToBrowse(categoryName)

    @GetMapping("similarJobs/{categoryName}")
    fun getListOfSimilarJobs(@PathVariable categoryName: String): List<JobOfferFrontEndEntity> =
        jobOfferFilteringService.returnJobListBySimilarCategory(categoryName)

    @GetMapping("jobsByTheSameEmployer/{employerId}")
    fun getListOfJobsByTheSameEmployer(@PathVariable employerId: Long): List<JobOfferFrontEndEntity> =
        jobOfferFilteringService.returnOffersByEmployerId(employerId)
}
