package com.server.jobboxapp.employer.repositroy

import com.server.jobboxapp.employer.data.Employer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface EmployerRepository : JpaRepository<Employer, Long> {

    @Query("SELECT DISTINCT (INDUSTRY) FROM employer", nativeQuery = true)
    fun returnDistinctIndustries(): List<String>

    @Query("SELECT DISTINCT (COUNTRY) FROM employer", nativeQuery = true)
    fun returnDistinctCountries(): List<String>
}
