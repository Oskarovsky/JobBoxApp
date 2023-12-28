package com.server.jobboxapp.service

import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.entity.JobOffer
import com.server.jobboxapp.entity.OfferCategory
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
            Employer(name = "FirstEmployer", description = "Some information 111", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "Poland", city = "Warsaw", postCode = "31-000", street = "PL Street"),
            Employer(name = "SecondEmployer", description = "Some information 222", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "Norway", city = "Oslo", postCode = "31-000", street = "PL Street"),
            Employer(name = "ThirdEmployer", description = "Some information 333", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "Denmark", city = "Kopenhagen", postCode = "31-000", street = "PL Street"),
            Employer(name = "FourthEmployer", description = "Some information 444", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "England", city = "London", postCode = "31-000", street = "PL Street"),
            Employer(name = "FifthEmployer", description = "Some information 555", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "Spain", city = "Warsaw", postCode = "31-000", street = "PL Street"),
            Employer(name = "SixthEmployer", description = "Some information 666", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "Poland", city = "Gdansk", postCode = "31-000", street = "PL Street"),
            Employer(name = "SeventhEmployer", description = "Some information 777", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "Poland", city = "Sopot", postCode = "31-000", street = "PL Street"),
            Employer(name = "EightEmployer", description = "Some information 888", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "Poland", city = "Cracow", postCode = "31-000", street = "PL Street"),
            Employer(name = "NinthEmployer", description = "Some information 999", industry = "IT", urlToWebsite = "www.website.com", urlToImage = "www.image.com", country = "Poland", city = "Wroclove", postCode = "31-000", street = "PL Street")
        ))

        val firstEmployer = employerRepository.returnEmployerByEmployerName("FirstEmployer")
        val secondEmployer = employerRepository.returnEmployerByEmployerName("SecondEmployer")

        val offerDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur"

        offerRepository.saveAll(
            listOf(
                JobOffer(employer = firstEmployer, positionTitle = "OneOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Remote", categoryToBrowse = OfferCategory.SOFTWARE, technologyStack = arrayListOf("Figma", "Sketch"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "SecondOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Remote", categoryToBrowse = OfferCategory.SOFTWARE, technologyStack = arrayListOf("Java", "Spring", "SQL"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "ThirdOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Remote", categoryToBrowse = OfferCategory.DEVOPS, technologyStack = arrayListOf("Python", "Flask", "Ansible"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "FourthOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Hybrid", categoryToBrowse = OfferCategory.AGILE, technologyStack = arrayListOf("OOP", "Spring"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "FifthOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Remote", categoryToBrowse = OfferCategory.SECURITY, technologyStack = arrayListOf("C++", "Embedded programming"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "SixthOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Hybrid", categoryToBrowse = OfferCategory.HUMAN_RESOURCE, technologyStack = arrayListOf("AI", "Python", "Streams"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "SeventhOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Remote", categoryToBrowse = OfferCategory.SECURITY, technologyStack = arrayListOf("SQL", "PostgreSQL"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "EightOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Remote", categoryToBrowse = OfferCategory.PRODUCT_MANAGEMENT, technologyStack = arrayListOf("OOP", "React", "Angular", "JavaScript"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "NinthOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Hybrid", categoryToBrowse = OfferCategory.PRODUCT_MANAGEMENT, technologyStack = arrayListOf("GCP", "Kotlin", "PSQL", "OOP"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "TenOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Hybrid", categoryToBrowse = OfferCategory.DEVOPS, technologyStack = arrayListOf("Golang", "Ansible", "Swift"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "ElevenOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Remote", categoryToBrowse = OfferCategory.SOFTWARE, technologyStack = arrayListOf("PHP", "MySql"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
                JobOffer(employer = secondEmployer, positionTitle = "TwelveOffer", experienceLevel = "junior", employmentType = "b2b", employmentModel = "Remote", categoryToBrowse = OfferCategory.HUMAN_RESOURCE, technologyStack = arrayListOf("Spock", "TDD", "Unit Tests"), jobOfferDescription = offerDescription, country = "Poland", city = "Warsaww", postCode = "31-000", street = "PL Street", urlToApply = "www.url.com", promotedFlag = 1),
            )
        )
    }
}
