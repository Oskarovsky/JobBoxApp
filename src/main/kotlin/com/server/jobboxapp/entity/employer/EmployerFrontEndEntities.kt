package com.server.jobboxapp.entity.employer


data class IndustryBoxDropDown(val industryName: String)
data class EmployerFrontEndEntity(
    val id: Long,
    val employerName: String,
    val industry: String,
    val description: String,
    val country: String,
    val city: String,
    val postCode: String,
    val street: String,
    val urlToWebsite: String,
    val urlToMiniatureImage: String,
    val urlToBackgroundImage: String,
    val numberOfJobs: Long
)





