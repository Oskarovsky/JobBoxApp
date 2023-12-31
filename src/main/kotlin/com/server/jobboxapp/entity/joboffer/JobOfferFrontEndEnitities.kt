package com.server.jobboxapp.entity.joboffer

data class CategoryNameAndCount(val categoryName: String, val count: Long)
data class JobOfferMiniature(val positionTitle: String, val employmentModel:String, val technologyStack: List<String>, val employerName: String, val offerCountry: String, val offerCity: String, val postedOn: String, val urlToMiniatureImage: String)
data class JobsAvailable(val countOfJobs: Int)






