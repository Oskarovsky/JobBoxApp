package com.server.jobboxapp.entity.joboffer

import com.server.jobboxapp.entity.employer.Employer

data class CategoryNameAndCount(val categoryName: String, val count: Long)
data class JobOfferFrontEndEntity(
    val employer: Employer,
    val employerIndustry: String,
    val jobOfferId: Long,
    val positionTitle: String,
    val experienceLevel: String,
    val employmentModel: String,
    val employmentType: String,
    val categoryToBrowse: String,
    val technologyStack: List<String>,
    val jobOfferDescription: JobOfferDescription,
    val offerCountry: String,
    val offerCity: String,
    val offerPostCode: String,
    val offerStreet: String,
    val urlToApply: String,
    val promotedFlag: Int,
    val postedOn: String
)
data class JobsAvailable(val countOfJobs: Int)





