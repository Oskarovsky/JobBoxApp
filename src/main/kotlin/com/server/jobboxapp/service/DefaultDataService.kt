package com.server.jobboxapp.service

import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.entity.JobOffer
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.JobOfferRepository
import jakarta.annotation.PostConstruct
import mu.KotlinLogging
import org.springframework.stereotype.Service

@Service
class DefaultDataService(
    val employerRepository: EmployerRepository,
    val offerRepository: JobOfferRepository
) {

    private val logger = KotlinLogging.logger {}

    @PostConstruct
    fun initDefaultData() {
        employerRepository.saveAll(listOf(
            Employer(name = "FirstEmployer", description = "Some information 111", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com"),
            Employer(name = "SecondEmployer", description = "Some information 222", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com"),
            Employer(name = "ThirdEmployer", description = "Some information 333", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com"),
            Employer(name = "FourthEmployer", description = "Some information 444", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com"),
            Employer(name = "FifthEmployer", description = "Some information 555", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com"),
            Employer(name = "SixthEmployer", description = "Some information 666", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com"),
            Employer(name = "SeventhEmployer", description = "Some information 777", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com"),
            Employer(name = "EightEmployer", description = "Some information 888", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com"),
            Employer(name = "NinthEmployer", description = "Some information 999", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com")
        ))

        val firstEmployer = employerRepository.returnEmployerByEmployerName("FirstEmployer")
        val secondEmployer = employerRepository.returnEmployerByEmployerName("SecondEmployer")

        offerRepository.saveAll(
            listOf(
                JobOffer(employer = firstEmployer, positionTitle = "OneOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "SecondOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "ThirdOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "FourthOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "FifthOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "SixthOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "SeventhOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "EightOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "NinthOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "TenOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "ElevenOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "TwelveOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "b2b", categoryToBrowse = "it", technologyStack = arrayListOf("java"), jobOfferDescription = "desc", country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
            )
        )
    }
}
