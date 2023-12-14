package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.Employer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface EmployerRepository : JpaRepository<Employer, Long>
