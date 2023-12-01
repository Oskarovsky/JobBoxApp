package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.entity.Offer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface EmployerRepository : JpaRepository<Employer, Long>
