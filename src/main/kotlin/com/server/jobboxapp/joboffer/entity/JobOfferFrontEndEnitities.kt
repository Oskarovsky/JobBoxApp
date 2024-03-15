package com.server.jobboxapp.joboffer.entity

import com.server.jobboxapp.employer.data.Employer
import com.server.jobboxapp.joboffer.data.JobOfferDescription

data class CategoryNameAndCount(val categoryName: String, val count: Long)
data class JobOfferFrontEndEntity(
    val employer: Employer,
    val employerIndustry: String,
    val jobOfferId: Long,
    val positionTitle: String,
    val experienceLevel: String,
    val employmentModel: String,
    val employmentType: String,
    val minSalaryBracket: Long,
    val maxSalaryBracket: Long,
    val categoryToBrowse: String,
    val technologyStack: List<String>,
    val jobOfferDescription: JobOfferDescription,
    val offerCountry: String,
    val offerCity: String,
    val offerPostCode: String,
    val offerStreet: String,
    val urlToApply: String,
    val promotedFlag: Int,
    val postedOn: String,
    val miniatureImage: String,
    val backgroundImage: String
)
data class JobsAvailable(val countOfJobs: Int)

data class CountryBoxDropDown(val countryName: String)




