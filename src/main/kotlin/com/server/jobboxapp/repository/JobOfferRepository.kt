package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.JobOffer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface JobOfferRepository : JpaRepository<JobOffer, Long> {
    @Query("SELECT DISTINCT(CATEGORY_TO_BROWSE) FROM job_offer", nativeQuery = true)
    fun findAllCategoriesToBrowse(): List<String>

    @Query("SELECT COUNT(CATEGORY_TO_BROWSE) FROM job_offer o where o.category_to_browse = ?1", nativeQuery = true)
    fun countJobsByCategoriesToBrowse(categoryToBrowse: String): Int

    @Query("SELECT * FROM job_offer o ORDER BY RANDOM() LIMIT 6", nativeQuery = true)
    fun findJobsOfTheDay(): List<JobOffer>

    @Query("SELECT COUNT(EMPLOYER_ID) FROM job_offer o WHERE o.employer_id = ?1", nativeQuery = true)
    fun countJobsByEmployerId(employerId: Long): Int

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.positionTitle = ?2 WHERE o.id = ?1")
    fun updatePositionTitle(id: Long, positionTitle: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.experienceLevel = ?2 WHERE o.id = ?1")
    fun updateExperienceLevel(id: Long, experienceLevel: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.employmentType = ?2 WHERE o.id = ?1")
    fun updateEmploymentType(id: Long, employmentType: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.employmentModel = ?2 WHERE o.id = ?1")
    fun updateEmploymentModel(id: Long, employmentModel: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.categoryToBrowse = ?2 WHERE o.id = ?1")
    fun updateCategoryToBrowse(id: Long, categoryToBrowse: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.technologyStack = ?2 WHERE o.id = ?1")
    fun updateTechnologyStack(id: Long, technologyStack: List<String>)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.jobOfferDescription = ?2 WHERE o.id = ?1")
    fun updateJobOfferDescription(id: Long, jobOfferDescription: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.country = ?2 WHERE o.id = ?1")
    fun updateCountry(id: Long, country: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.city = ?2 WHERE o.id = ?1")
    fun updateCity(id: Long, city: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.postCode = ?2 WHERE o.id = ?1")
    fun updatePostCode(id: Long, postCode: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.street = ?2 WHERE o.id = ?1")
    fun updateStreet(id: Long, street: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.urlToApply = ?2 WHERE o.id = ?1")
    fun updateUrlToApply(id: Long, urlToApply: String)

    @Transactional
    @Modifying
    @Query("UPDATE JobOffer o SET o.promotedFlag = ?2 WHERE o.id = ?1")
    fun updatePromotedFlag(id: Long, promotedFlag: Int)
}
