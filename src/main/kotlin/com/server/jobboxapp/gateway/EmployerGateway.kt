package com.server.jobboxapp.gateway

import com.server.jobboxapp.entity.Employer
import com.server.jobboxapp.service.EmployerService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/employer")
class EmployerGateway(
    private val employerService: EmployerService
) {
    @GetMapping
    fun getAllEmployers(): List<Employer> = employerService.returnAllEmployees()

    @GetMapping("/{id}")
    fun getEmployerById(@PathVariable id: Long): Employer =
        employerService.returnEmployeeById(id)

    @GetMapping("/employersAndCount")
    fun getEmployersAndCount(): Map<Employer, Int> =
        employerService.mapOfEmployerToCount()

    @PostMapping(consumes = ["application/json"])
    fun createEmployer(@RequestBody employer: Employer): ResponseEntity<Employer> =
        employerService.saveEmployerEntity(employer)

    @PutMapping("/{id}")
    fun updateEmployer(@PathVariable id: Long, @RequestBody updatedEmployer: Employer): ResponseEntity<Employer> =
        employerService.updateEmployerEntity(id, updatedEmployer)

    @DeleteMapping("/{id}")
    fun deleteEmployee(@PathVariable id: Long) {
        employerService.deleteEmployeeById(id)
    }
}
