package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.Employer
import jakarta.persistence.Column
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface EmployerRepository : JpaRepository<Employer, Long> {
    @Query("SELECT * FROM employer e WHERE e.employer_name = ?1", nativeQuery = true)
    fun returnEmployerByEmployerName(employerName: String): Employer

    @Modifying
    @Query("DELETE FROM employer e WHERE e.employer_name = ?1", nativeQuery = true)
    fun deleteEmployerByEmployerName(employerName: String)

    @Transactional
    @Modifying
    @Query("UPDATE Employer e SET e.employerName = ?2 WHERE e.id = ?1")
    fun updateEmployerName(id: Long, employerName: String)

    @Transactional
    @Modifying
    @Query("UPDATE Employer e SET e.industry = ?2 WHERE e.id = ?1")
    fun updateIndustry(id: Long, industry: String)

    @Transactional
    @Modifying
    @Query("UPDATE Employer e SET e.employerDescription = ?2 WHERE e.id = ?1")
    fun updateEmployerDescription(id: Long, employerDescription: String)

    @Transactional
    @Modifying
    @Query("UPDATE Employer e SET e.urlToWebsite = ?2 WHERE e.id = ?1")
    fun updateUrlToWebsite(id: Long, urlToWebsite: String)

    @Transactional
    @Modifying
    @Query("UPDATE Employer e SET e.urlToImage = ?2 WHERE e.id = ?1")
    fun updaterUrlToImage(id: Long, urlToImage: String)
}