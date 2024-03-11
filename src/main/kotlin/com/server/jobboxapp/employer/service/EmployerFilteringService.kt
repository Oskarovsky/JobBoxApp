package com.server.jobboxapp.employer.service

import com.server.jobboxapp.employer.entity.*
import com.server.jobboxapp.employer.repositroy.EmployerRepository
import com.server.jobboxapp.joboffer.repository.JobOfferRepository
import org.springframework.stereotype.Service


@Service
class EmployerFilteringService(
    private val employerRepository: EmployerRepository,
    private val jobOfferRepository: JobOfferRepository,
    private val employerService: EmployerService
) {
    private var employerMiniatureImageCache = mapOf<Long, String>()
    private var employerBackgroundImageCache = mapOf<Long, String>()

    private fun loadCache(){
        employerMiniatureImageCache = employerService.returnEmployerMiniatureImageCache()
        employerBackgroundImageCache = employerService.returnEmployerBackgroundImageCache()
    }
    fun returnNumberOfAllEmployers(): EmployersAvailable =
        EmployersAvailable(employerRepository.findAll().size)

    fun returnIndustryBoxList(): List<IndustryBoxDropDown> =
        employerRepository.returnDistinctIndustries().map { IndustryBoxDropDown(Industry.valueOf(it).title) }.stream()
            .toList()

    fun returnCountryBoxList(): List<CountryBoxDropDown> =
        employerRepository.returnDistinctCountries().map { CountryBoxDropDown(EmployerCountry.valueOf(it).title) }
            .stream()
            .toList()

    fun returnEmployerFrontEndEntityList(): List<EmployerFrontEndEntity> {
        loadCache()
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
                employerMiniatureImageCache.get(it.id)!!,
                employerBackgroundImageCache.get(it.id)!!,
                jobOfferRepository.countJobsByEmployerId(it.id)
            )
        }.toList()
    }

    fun returnEmployerFrontEndEntityById(id: Long): EmployerFrontEndEntity {
        loadCache()
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
            employerMiniatureImageCache.get(employer.id)!!,
            employerBackgroundImageCache.get(employer.id)!!,
            jobOfferRepository.countJobsByEmployerId(employer.id)
        )
    }

}


