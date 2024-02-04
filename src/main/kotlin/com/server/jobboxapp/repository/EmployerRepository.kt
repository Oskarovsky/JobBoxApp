package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.employer.Employer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface EmployerRepository : JpaRepository<Employer, Long> {

    @Query("SELECT DISTINCT (INDUSTRY) FROM employer", nativeQuery = true)
    fun returnDistinctIndustries(): List<String>

    @Query("SELECT DISTINCT (COUNTRY) FROM employer", nativeQuery = true)
    fun returnDistinctCountries(): List<String>

    @Query("SELECT * FROM employer e WHERE e.name = ?1", nativeQuery = true)
    fun returnEmployerByEmployerName(employerName: String): Employer

    @Modifying
    @Query("DELETE FROM employer e WHERE e.name = ?1", nativeQuery = true)
    fun deleteEmployerByEmployerName(employerName: String)
}
