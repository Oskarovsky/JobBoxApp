package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.joboffer.JobOffer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface JobOfferRepository : PagingAndSortingRepository<JobOffer, Long>, JpaRepository<JobOffer, Long>, JpaSpecificationExecutor<JobOffer> {

    // region GET
    @Query("SELECT * FROM job_offer o where o.promoted_flag = ?1", nativeQuery = true)
    fun findJobsOfTheDay(promotedFlag: Int): List<JobOffer>

    @Query("SELECT DISTINCT (COUNTRY) FROM job_offer", nativeQuery = true)
    fun returnDistinctCountries(): List<String>

    @Query("SELECT * FROM job_offer o WHERE o.category_to_browse = ?1", nativeQuery = true)
    fun returnJobsByCategoryToBrowse(categoryToBrowse: String): List<JobOffer>

    @Query("SELECT * FROM job_offer o WHERE o.employer_id = ?1", nativeQuery = true)
    fun returnJobsByEmployerId(employerId: Long): List<JobOffer>
    // endregion

    // region COUNT
    @Query("SELECT COUNT(CATEGORY_TO_BROWSE) FROM job_offer o where o.category_to_browse = ?1", nativeQuery = true)
    fun countJobsByCategoriesToBrowse(categoryToBrowse: String): Long

    @Query("SELECT COUNT(COUNTRY) FROM job_offer o where o.country = ?1", nativeQuery = true)
    fun countJobsByCountry(country: String): Long

    @Query("SELECT COUNT(EXPERIENCE_LEVEL) FROM job_offer o where o.experience_level = ?1", nativeQuery = true)
    fun countJobsByExperienceLevel(country: String): Long

    @Query("SELECT COUNT(EMPLOYMENT_MODEL) FROM job_offer o where o.employment_model = ?1", nativeQuery = true)
    fun countJobsByEmploymentModel(employmentModel: String): Long

    @Query("SELECT COUNT(EMPLOYMENT_TYPE) FROM job_offer o where o.employment_type = ?1", nativeQuery = true)
    fun countJobsByEmploymentType(employmentType: String): Long

    @Query("SELECT COUNT(EMPLOYER_ID) FROM job_offer o WHERE o.employer_id = ?1", nativeQuery = true)
    fun countJobsByEmployerId(employerId: Long): Long
    // endregion
}
