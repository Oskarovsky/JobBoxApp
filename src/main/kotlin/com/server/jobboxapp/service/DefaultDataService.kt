package com.server.jobboxapp.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.entity.blogpost.BlogPost
import com.server.jobboxapp.entity.employer.Employer
import com.server.jobboxapp.entity.joboffer.OfferRequest
import com.server.jobboxapp.repository.BlogRepository
import com.server.jobboxapp.repository.EmployerRepository
import jakarta.annotation.PostConstruct
import mu.KotlinLogging
import org.springframework.stereotype.Service
import java.io.File

@Service
class DefaultDataService(
    val employerRepository: EmployerRepository,
    val jobOfferService: JobOfferService,
    val blogRepository: BlogRepository
) {

    private val logger = KotlinLogging.logger {}

    @PostConstruct
    fun initDefaultData() {

        val jsonMapper = jacksonObjectMapper()

        val filePathWithEmployers = object {}.javaClass.getResource("/employerDataTest.json")?.file
        val employerList: List<Employer> =
            jsonMapper.readValue(File(filePathWithEmployers))

        val filePathWithOffers = object {}.javaClass.getResource("/jobOffers.json")?.file
        var jobOffersList: List<OfferRequest> =
            jsonMapper.readValue(File(filePathWithOffers))

        employerRepository.saveAll(employerList)
        jobOffersList.stream().forEach {
            jobOfferService.createNewOffer(it)
        }

        val filePathWithBlogs = object {}.javaClass.getResource("/blogPosts.json")?.file
        var blogPostsList: List<BlogPost> =
            jsonMapper.readValue(File(filePathWithBlogs))

        blogRepository.saveAll(blogPostsList)

    }
}
