package com.server.jobboxapp.employer.repositroy

import com.server.jobboxapp.employer.data.EmployerBackgroundImage
import com.server.jobboxapp.employer.data.EmployerMiniatureImage
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
@Transactional
interface EmployerBackgroundImageRepository : JpaRepository<EmployerBackgroundImage, Long> {

    @Query("SELECT * FROM employer_background_image e WHERE e.employer_id = ?1", nativeQuery = true)
    fun returnBackgroundImageByEmployerId(employerId: Long): EmployerBackgroundImage
}
