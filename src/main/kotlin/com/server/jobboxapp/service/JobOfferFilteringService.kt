package com.server.jobboxapp.service

import com.server.jobboxapp.entity.CountryBoxDropDown
import com.server.jobboxapp.entity.joboffer.*
import com.server.jobboxapp.repository.JobOfferRepository
import org.springframework.stereotype.Service
import java.time.format.DateTimeFormatter

@Service
class JobOfferFilteringService(
    private val jobOfferRepository: JobOfferRepository
) {

    fun returnCategoryNameAndCount(): List<CategoryNameAndCount> {
        val categoriesToBrowse = OfferCategory.values()
        return categoriesToBrowse.map {
            CategoryNameAndCount(it.title, jobOfferRepository.countJobsByCategoriesToBrowse(it.name))
        }.filter { categoryNameAndCount -> filterEmptyCategories(categoryNameAndCount) }.toList()
    }

    fun returnLocationForFilter(): List<LocationFilter> {
        val countryForFilter = Country.values()
        return countryForFilter.map {
            LocationFilter(it.title, jobOfferRepository.countJobsByCountry(it.name))
        }.filter { locationFilter -> filterEmptyLocations(locationFilter) }.toList()
    }

    fun returnExperienceLevelForFilter(): List<ExperienceLevelFilter> {
        val experienceLevelForFilter = ExperienceLevel.values()
        return experienceLevelForFilter.map {
            ExperienceLevelFilter(it.title, jobOfferRepository.countJobsByExperienceLevel(it.name))
        }.filter { experienceFilter -> filterEmptyExperience(experienceFilter) }.toList()
    }

    fun returnRolesForFilter(): List<RolesFilter> {
        val rolesForFilter = OfferCategory.values()
        return rolesForFilter.map {
            RolesFilter(it.title, jobOfferRepository.countJobsByCategoriesToBrowse(it.name))
        }.filter { rolesFilter -> filterEmptyRoles(rolesFilter) }.toList()
    }

    fun returnEmploymentModelForFilter(): List<EmploymentModelFilter> {
        val employmentModelForFilter = EmploymentModel.values()
        return employmentModelForFilter.map {
            EmploymentModelFilter(it.title, jobOfferRepository.countJobsByEmploymentModel(it.name))
        }.filter { employmentModelFilter -> filterEmptyEmploymentModel(employmentModelFilter) }.toList()
    }

    fun returnEmploymentTypeForFilter(): List<EmploymentTypeFilter> {
        val employmentTypeForFilter = EmploymentType.values()
        return employmentTypeForFilter.map {
            EmploymentTypeFilter(it.title, jobOfferRepository.countJobsByEmploymentType(it.name))
        }.filter { employmentTypeFilter -> filterEmptyEmploymentType(employmentTypeFilter) }.toList()
    }

    fun returnNumberOfAllJobs(): JobsAvailable =
        JobsAvailable(jobOfferRepository.findAll().size)

    fun returnOffersOfTheDay(): List<JobOfferMiniature> {
        var listOfTheJobOffers = jobOfferRepository
            .findJobsOfTheDay(1).shuffled()
        return listOfTheJobOffers.subList(0, 8).stream().map {
            jobOfferMiniatureMapping(it)
        }.toList()
    }

    fun returnRowJobOfferList(): List<JobOfferMiniature> {
        val listOfAllJobs = jobOfferRepository.findAll()
        return listOfAllJobs.stream().map {
            jobOfferMiniatureMapping(it)
        }.toList()
    }

    private fun jobOfferMiniatureMapping(jobOffer: JobOffer): JobOfferMiniature {
        return JobOfferMiniature(
            jobOffer.positionTitle,
            EmploymentModel.valueOf(jobOffer.employmentModel).title,
            jobOffer.technologyStack,
            jobOffer.employer.name,
            Country.valueOf(jobOffer.country).title,
            jobOffer.city,
            jobOffer.creationDate.format(creationDateFormat()),
            jobOffer.employer.urlToMiniatureImage
        )
    }

    fun returnCountryBoxList(): List<CountryBoxDropDown> =
        jobOfferRepository.returnDistinctCountries()
            .map { CountryBoxDropDown(com.server.jobboxapp.entity.employer.EmployerCountry.valueOf(it).title) }.stream()
            .toList()

    fun returnJobListByCategoryToBrowse(categoryToBrowse: String): List<JobOffer> =
        jobOfferRepository.returnJobsByCategoryToBrowse(OfferCategory.valueOf(categoryToBrowse.uppercase()).name)


    private fun filterEmptyCategories(categoryNameAndCount: CategoryNameAndCount): Boolean {
        return categoryNameAndCount.count >= 1L
    }

    private fun filterEmptyLocations(locationFilter: LocationFilter): Boolean {
        return locationFilter.count >= 1L
    }

    private fun filterEmptyExperience(experienceLevelFilter: ExperienceLevelFilter): Boolean {
        return experienceLevelFilter.count >= 1L
    }

    private fun filterEmptyRoles(rolesFilter: RolesFilter): Boolean {
        return rolesFilter.count >= 1L
    }

    private fun filterEmptyEmploymentModel(employmentModelFilter: EmploymentModelFilter): Boolean {
        return employmentModelFilter.count >= 1L
    }

    private fun filterEmptyEmploymentType(employmentTypeFilter: EmploymentTypeFilter): Boolean {
        return employmentTypeFilter.count >= 1L
    }

    private fun creationDateFormat(): DateTimeFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy")
}

