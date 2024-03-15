package com.server.jobboxapp.employer.repositroy

import com.server.jobboxapp.employer.data.EmployerMiniatureImage
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
@Transactional
interface EmployerMiniatureImageRepository : JpaRepository<EmployerMiniatureImage, Long> {
    @Query("SELECT * FROM employer_miniature_image e WHERE e.employer_id = ?1", nativeQuery = true)
    fun returnMiniatureImageByEmployerId(employerId: Long): EmployerMiniatureImage
}
