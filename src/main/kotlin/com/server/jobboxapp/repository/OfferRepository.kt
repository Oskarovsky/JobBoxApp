package com.server.jobboxapp.repository

import com.server.jobboxapp.entity.Offer
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface OfferRepository : JpaRepository<Offer, Long>
