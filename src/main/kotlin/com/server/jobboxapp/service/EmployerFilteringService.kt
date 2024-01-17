package com.server.jobboxapp.service

import com.server.jobboxapp.entity.CountryBoxDropDown
import com.server.jobboxapp.entity.employer.*
import com.server.jobboxapp.repository.EmployerRepository
import com.server.jobboxapp.repository.JobOfferRepository
import org.springframework.stereotype.Service


@Service
class EmployerFilteringService(
    private val employerRepository: EmployerRepository,
    private val jobOfferRepository: JobOfferRepository
) {
    fun returnNumberOfAllEmployers(): EmployersAvailable =
        EmployersAvailable(employerRepository.findAll().size)

    fun returnAllEmployersList(): List<Employer> =
        employerRepository.findAll()

    fun returnIndustryBoxList(): List<IndustryBoxDropDown> =
        employerRepository.returnDistinctIndustries().map { IndustryBoxDropDown(Industry.valueOf(it).title) }.stream()
            .toList()

    fun returnCountryBoxList(): List<CountryBoxDropDown> =
        employerRepository.returnDistinctCountries().map { CountryBoxDropDown(EmployerCountry.valueOf(it).title) }
            .stream()
            .toList()

    fun returnEmployerFrontEndEntityList(): List<EmployerFrontEndEntity> {
        val allEmployersList = employerRepository.findAll()
        return allEmployersList.stream().map {
            EmployerFrontEndEntity(
                it.id,
                it.name,
                Industry.valueOf(it.industry).title,
                it.description,
                EmployerCountry.valueOf(it.country).title,
                it.city,
                it.postCode,
                it.street,
                it.urlToWebsite,
                it.urlToMiniatureImage,
                it.urlToBackgroundImage,
                jobOfferRepository.countJobsByEmployerId(it.id)
            )
        }.toList()
    }

    fun returnEmployerFrontEndEntityById(id: Long): EmployerFrontEndEntity {
        val employer = employerRepository.findById(id).get()
        return EmployerFrontEndEntity(
            employer.id,
            employer.name,
            Industry.valueOf(employer.industry).title,
            employer.description,
            EmployerCountry.valueOf(employer.country).title,
            employer.city,
            employer.postCode,
            employer.street,
            employer.urlToWebsite,
            employer.urlToMiniatureImage,
            employer.urlToBackgroundImage,
            jobOfferRepository.countJobsByEmployerId(employer.id)
        )
    }

}


