package com.server.jobboxapp.employer.entity

data class IndustryBoxDropDown(val industryName: String)
data class EmployersAvailable(val countOfEmployers: Int)
data class CountryBoxDropDown(val countryName: String)
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
    val miniatureImage: String,
    val backgroundImage: String,
    val numberOfJobs: Long
)





