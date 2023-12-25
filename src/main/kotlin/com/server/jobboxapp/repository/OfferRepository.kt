package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.JobOffer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface OfferRepository : JpaRepository<JobOffer, Long>{
    @Query("SELECT DISTINCT categoryToBrowse FROM job_offer", nativeQuery = true)
    fun findAllCategoriesToBrowse(): List<String>

    @Query("SELECT COUNT(CATEGORY_TO_BROWSE) FROM job_offer where ?1", nativeQuery = true)
    fun countJobsByCategoriesToBrowse(categoryToBrowse: String): Int

    @Query("SELECT * FROM job_offer ORDER BY RAND( )  LIMIT 6", nativeQuery = true)
    fun findJobsOfTheDay(): List<JobOffer>

    @Query("SELECT COUNT(EMPLOYER_ID) FROM job_offer where ?1", nativeQuery = true)
    fun countJobsByEmployerId(employerId: Long): Int
}
