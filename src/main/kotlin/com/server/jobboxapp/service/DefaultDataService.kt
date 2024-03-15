package com.server.jobboxapp.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.blogpost.data.BlogPost
import com.server.jobboxapp.blogpost.data.BlogPostBackgroundImage
import com.server.jobboxapp.blogpost.data.BlogPostMiniatureImage
import com.server.jobboxapp.blogpost.repository.BlogPostBackgroundImageRepository
import com.server.jobboxapp.blogpost.repository.BlogPostMiniatureImageRepository
import com.server.jobboxapp.blogpost.repository.BlogPostRepository
import com.server.jobboxapp.blogpost.service.BlogService
import com.server.jobboxapp.employer.data.Employer
import com.server.jobboxapp.employer.data.EmployerBackgroundImage
import com.server.jobboxapp.employer.data.EmployerMiniatureImage
import com.server.jobboxapp.employer.repositroy.EmployerBackgroundImageRepository
import com.server.jobboxapp.employer.repositroy.EmployerMiniatureImageRepository
import com.server.jobboxapp.employer.repositroy.EmployerRepository
import com.server.jobboxapp.employer.service.EmployerService
import com.server.jobboxapp.joboffer.data.OfferRequest
import com.server.jobboxapp.joboffer.service.JobOfferService
import jakarta.annotation.PostConstruct
import org.springframework.stereotype.Service
import java.io.File

@Service
class DefaultDataService(
    val employerRepository: EmployerRepository,
    val jobOfferService: JobOfferService,
    val blogPostRepository: BlogPostRepository,
    val employerService: EmployerService,
    val blogService: BlogService,
    val employerMiniatureImageRepository: EmployerMiniatureImageRepository,
    val employerBackgroundImageRepository: EmployerBackgroundImageRepository,
    val blogPostMiniatureImageRepository: BlogPostMiniatureImageRepository,
    val blogPostBackgroundImageRepository: BlogPostBackgroundImageRepository
) {
    @PostConstruct
    fun initDefaultData() {
        loadEmployerData()
        loadBJobOffers()
        loadBlogData()
    }

    private fun loadEmployerData(){
        val jsonMapper = jacksonObjectMapper()
        val filePathWithMiniatureImageEmployers = object {}.javaClass.getResource("/employerMiniatureImage.json")?.file

        val miniatureList: List<EmployerMiniatureImage> =
            jsonMapper.readValue(File(filePathWithMiniatureImageEmployers))

        employerMiniatureImageRepository.saveAll(miniatureList)

        val filePathWithBackgroundImageEmployers = object {}.javaClass.getResource("/employerBackgroundImage.json")?.file

        val backgroundList: List<EmployerBackgroundImage> =
            jsonMapper.readValue(File(filePathWithBackgroundImageEmployers))

        employerBackgroundImageRepository.saveAll(backgroundList)

        val filePathWithEmployers = object {}.javaClass.getResource("/employerData.json")?.file
        val employerList: List<Employer> =
            jsonMapper.readValue(File(filePathWithEmployers))

        employerRepository.saveAll(employerList)

        employerService.reLoadCache()
    }

    private fun loadBJobOffers(){
        val jsonMapper = jacksonObjectMapper()
        val filePathWithOffers = object {}.javaClass.getResource("/jobOffers.json")?.file
        var jobOffersList: List<OfferRequest> =
            jsonMapper.readValue(File(filePathWithOffers))

        jobOffersList.stream().forEach {
            jobOfferService.createNewOffer(it)
        }

    }

    private fun loadBlogData(){
        val jsonMapper = jacksonObjectMapper()

        val filePathWithBlogs = object {}.javaClass.getResource("/blogPostData.json")?.file
        var blogPostsList: List<BlogPost> =
            jsonMapper.readValue(File(filePathWithBlogs))

        blogPostRepository.saveAll(blogPostsList)

        val filePathWithMiniatureImageBlogPost = object {}.javaClass.getResource("/blogPostMiniatureImage.json")?.file

        val miniatureBlogList: List<BlogPostMiniatureImage> =
            jsonMapper.readValue(File(filePathWithMiniatureImageBlogPost))
        blogPostMiniatureImageRepository.saveAll(miniatureBlogList)

        val filePathWithBackgroundImageBlogPost = object {}.javaClass.getResource("/blogPostBackgroundImage.json")?.file

        val backgroundBlogList: List<BlogPostBackgroundImage> =
            jsonMapper.readValue(File(filePathWithBackgroundImageBlogPost))
        blogPostBackgroundImageRepository.saveAll(backgroundBlogList)

        blogService.loadCache()
    }
}
