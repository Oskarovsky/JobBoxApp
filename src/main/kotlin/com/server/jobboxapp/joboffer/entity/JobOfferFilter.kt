package com.server.jobboxapp.joboffer.entity

data class LocationFilter(val locationName: String, val count: Long)
data class ExperienceLevelFilter(val experienceLevelName: String, val count: Long)
data class RolesFilter(val roleName: String, val count: Long)
data class EmploymentModelFilter(val employmentModelName: String, val count: Long)
data class EmploymentTypeFilter(val employmentTypeName: String, val count: Long)
data class JobOfferFilter(
    val positionTitle: String,
    val offerCountry: String,
)








