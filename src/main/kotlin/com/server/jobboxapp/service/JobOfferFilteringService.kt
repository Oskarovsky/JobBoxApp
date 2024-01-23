package com.server.jobboxapp.service

import com.server.jobboxapp.entity.CountryBoxDropDown
import com.server.jobboxapp.entity.employer.Industry
import com.server.jobboxapp.entity.joboffer.*
import com.server.jobboxapp.repository.JobOfferRepository
import jakarta.persistence.criteria.Predicate
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.PageRequest
import org.springframework.data.jpa.domain.Specification
import org.springframework.stereotype.Service
import java.time.format.DateTimeFormatter

@Service
class JobOfferFilteringService(
    private val jobOfferRepository: JobOfferRepository
) {

    fun returnCategoryNameAndCount(): List<CategoryNameAndCount> {
        val categoriesToBrowse = OfferCategory.entries.toTypedArray()
        return categoriesToBrowse
            .map { CategoryNameAndCount(it.title, jobOfferRepository.countJobsByCategoriesToBrowse(it.name)) }
            .filter { categoryNameAndCount -> filterEmptyCategories(categoryNameAndCount) }
            .toList()
    }

    fun returnLocationForFilter(): List<LocationFilter> {
        val countryForFilter = Country.entries.toTypedArray()
        return countryForFilter
            .map { LocationFilter(it.title, jobOfferRepository.countJobsByCountry(it.name)) }
            .filter { locationFilter -> filterEmptyLocations(locationFilter) }
            .toList()
    }

    fun returnExperienceLevelForFilter(): List<ExperienceLevelFilter> {
        val experienceLevelForFilter = ExperienceLevel.entries.toTypedArray()
        return experienceLevelForFilter
            .map { ExperienceLevelFilter(it.title, jobOfferRepository.countJobsByExperienceLevel(it.name)) }
            .filter { experienceFilter -> filterEmptyExperience(experienceFilter) }
            .toList()
    }

    fun returnRolesForFilter(): List<RolesFilter> {
        val rolesForFilter = OfferCategory.entries.toTypedArray()
        return rolesForFilter
            .map { RolesFilter(it.title, jobOfferRepository.countJobsByCategoriesToBrowse(it.name)) }
            .filter { rolesFilter -> filterEmptyRoles(rolesFilter) }
            .toList()
    }

    fun returnEmploymentModelForFilter(): List<EmploymentModelFilter> {
        val employmentModelForFilter = EmploymentModel.entries.toTypedArray()
        return employmentModelForFilter
            .map { EmploymentModelFilter(it.title, jobOfferRepository.countJobsByEmploymentModel(it.name)) }
            .filter { employmentModelFilter -> filterEmptyEmploymentModel(employmentModelFilter) }
            .toList()
    }

    fun returnEmploymentTypeForFilter(): List<EmploymentTypeFilter> {
        val employmentTypeForFilter = EmploymentType.entries.toTypedArray()
        return employmentTypeForFilter
            .map { EmploymentTypeFilter(it.title, jobOfferRepository.countJobsByEmploymentType(it.name)) }
            .filter { employmentTypeFilter -> filterEmptyEmploymentType(employmentTypeFilter) }
            .toList()
    }

    fun returnNumberOfAllJobs(): JobsAvailable =
        JobsAvailable(jobOfferRepository.findAll().size)

    fun returnOffersOfTheDay(): List<JobOfferFrontEndEntity> {
        val listOfTheJobOffers = jobOfferRepository
            .findJobsOfTheDay(1)
            .shuffled()
        return listOfTheJobOffers.subList(0, 8)
            .stream()
            .map { jobOfferFrontEndMapping(it) }
            .toList()
    }

    fun returnRowJobOfferList(): List<JobOfferFrontEndEntity> {
        val listOfAllJobs = jobOfferRepository.findAll()
        return listOfAllJobs.stream()
            .map { jobOfferFrontEndMapping(it) }
            .toList()
    }

    fun returnRowJobOfferPage(page: Int, size: Int): Page<JobOfferFrontEndEntity> {
        val listOfAllJobs = jobOfferRepository.findAll(PageRequest.of(page, size))
        return PageImpl(
            listOfAllJobs.content.stream().map { jobOfferFrontEndMapping(it) }.toList(),
            listOfAllJobs.pageable,
            listOfAllJobs.totalElements
        )
    }

    fun getFilteredOffers(filter: JobOfferFilter, page: Int, size: Int): Page<JobOfferFrontEndEntity> {
        val pageable: PageRequest = PageRequest.of(page, size)
        val specification: Specification<JobOffer> = Specification { root, _, criteriaBuilder ->
            val predicates = mutableListOf<Predicate>()
            filter.positionTitle.let {
                predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root["positionTitle"]), "%${it.lowercase()}%"))
            }
            filter.offerCountry.let {
                predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root["country"]), "%${it.lowercase()}%"))
            }

            criteriaBuilder.and(*predicates.toTypedArray())
        }
        val listOfAllJobs = jobOfferRepository.findAll(specification, pageable)

        return PageImpl(
            listOfAllJobs.content.stream().map { jobOfferFrontEndMapping(it) }.toList(),
            listOfAllJobs.pageable,
            listOfAllJobs.totalElements
        )
    }

    fun returnOffersById(id: Long): JobOfferFrontEndEntity {
        val offerById = jobOfferRepository
            .findById(id)
            .orElseThrow { NoSuchElementException("There is no offer with id: $id") }
        return jobOfferFrontEndMapping(offerById)
    }

    fun returnOffersByEmployerId(id: Long): List<JobOfferFrontEndEntity>{
        val jobOffers = jobOfferRepository.returnJobsByEmployerId(id)
        return  jobOffers.stream().map {  jobOfferFrontEndMapping(it) }.toList()
    }

    private fun jobOfferFrontEndMapping(jobOffer: JobOffer): JobOfferFrontEndEntity {
        return JobOfferFrontEndEntity(
            jobOffer.employer,
            Industry.valueOf(jobOffer.employer.industry).title,
            jobOffer.id,
            jobOffer.positionTitle,
            ExperienceLevel.valueOf(jobOffer.experienceLevel).title,
            EmploymentModel.valueOf(jobOffer.employmentModel).title,
            EmploymentType.valueOf(jobOffer.employmentType).title,
            OfferCategory.valueOf(jobOffer.categoryToBrowse).title,
            jobOffer.technologyStack,
            jobOffer.jobOfferDescription,
            Country.valueOf(jobOffer.country).title,
            jobOffer.city,
            jobOffer.postCode,
            jobOffer.street,
            jobOffer.urlToApply,
            jobOffer.promotedFlag,
            jobOffer.creationDate.format(creationDateFormat())
        )
    }

    fun returnCountryBoxList(): List<CountryBoxDropDown> =
        jobOfferRepository.returnDistinctCountries()
            .map { CountryBoxDropDown(com.server.jobboxapp.entity.employer.EmployerCountry.valueOf(it).title) }.stream()
            .toList()

    fun returnJobListByCategoryToBrowse(categoryToBrowse: String): List<JobOffer> =
        jobOfferRepository.returnJobsByCategoryToBrowse(OfferCategory.valueOf(categoryToBrowse.uppercase()).name)

    fun returnJobListBySimilarCategory(categoryToBrowse: String): List<JobOfferFrontEndEntity> {
        val category = OfferCategory.entries.find { it.title == categoryToBrowse }
        return jobOfferRepository.returnJobsByCategoryToBrowse(category!!.name).stream().map {
            jobOfferFrontEndMapping(it)
        }.toList()
    }

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

