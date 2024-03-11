package com.server.jobboxapp.employer.gateway

import com.server.jobboxapp.employer.data.Employer
import com.server.jobboxapp.employer.data.EmployerDto
import com.server.jobboxapp.employer.service.EmployerService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@CrossOrigin(origins = ["*"])
@RestController
@RequestMapping("/api/employer")
class EmployerGateway(
    private val employerService: EmployerService
) {
    @GetMapping
    fun getAllEmployers(): List<Employer> = employerService.returnAllEmployees()

    @GetMapping("/{employerId}")
    fun getEmployerById(@PathVariable employerId: Long): ResponseEntity<Employer> {
        return try {
            ResponseEntity.ok(employerService.returnEmployeeById(employerId))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @PostMapping("/createEmployer", consumes = [MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE])
    fun createEmployer(@RequestBody employer: Employer): ResponseEntity<Employer> {
        return try {
            employerService.saveEmployerEntity(employer)
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @PutMapping("/{employerId}")
    fun updateEmployer(
        @PathVariable employerId: Long,
        @RequestBody updatedEmployer: Employer
    ): ResponseEntity<Employer> {
        return try {
            employerService.updateEmployerEntity(employerId, updatedEmployer)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @PatchMapping("/{employerId}")
    fun patchEmployer(@PathVariable employerId: Long, @RequestBody dto: EmployerDto): ResponseEntity<Employer> {
        return try {
            ResponseEntity.ok(employerService.patchEmployerEntity(employerId, dto))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @DeleteMapping("/{employerId}")
    fun deleteEmployee(@PathVariable employerId: Long): ResponseEntity<Long> {
        return try {
            employerService.deleteEmployeeById(employerId)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }


    /**
     * Adds an employer's miniature image to the database.
     * @param employerName The name of the employer.
     * @param employerId The identifier of the employer, mapping employer id from employer repo. PK
     * @param file The file with the miniature image.
     */
    @PostMapping(
        "/saveEmployerMiniatureImage",
        consumes = [MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE]
    )
    fun saveEmployerMiniatureImage(
        @RequestParam employerName: String,
        @RequestParam employerId: Long,
        @RequestBody file: MultipartFile
    ): ResponseEntity<String> {
        return try {
            employerService.saveEmployerMiniatureImage(employerName, employerId, file)
            ResponseEntity.ok("Saved miniature image for $employerName id=$employerId")
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Error occurred during processing of addEmployerMiniatureImage: ${e.message}")
        }
    }

    @PostMapping(
        "/saveEmployerBackgroundImage",
        consumes = [MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE]
    )
    fun saveEmployerBackgroundImage(
        @RequestParam employerName: String,
        @RequestParam employerId: Long,
        @RequestBody file: MultipartFile
    ): ResponseEntity<String> {
        return try {
            employerService.saveEmployerBackgroundImage(employerName, employerId, file)
            ResponseEntity.ok("Saved background image for $employerName id=$employerId")
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Error occurred during processing of addEmployerBackgroundImage: ${e.message}")
        }
    }

    @GetMapping("/getEmployerMiniatureImage")
    fun getEmployerMiniatureImage(@RequestParam employerId: Long): ResponseEntity<String> {
        return try {
            ResponseEntity.ok(employerService.getEmployerMiniatureImage(employerId))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @GetMapping("/getEmployerBackgroundImage")
    fun getEmployerBackgroundImage(@RequestParam employerId: Long): ResponseEntity<String> {
        return try {
            ResponseEntity.ok(employerService.getEmployerBackgroundImage(employerId))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @DeleteMapping("/deleteEmployerMiniatureImage")
    fun deleteEmployerMiniatureImage(@PathVariable employerId: Long): ResponseEntity<Long> {
        return try {
            employerService.deleteEmployerMiniatureImage(employerId)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }

    @GetMapping("/deleteEmployerBackgroundImage")
    fun deleteEmployerBackgroundImage(@RequestParam employerId: Long): ResponseEntity<Long> {
        return try {
            employerService.deleteEmployerBackgroundImage(employerId)
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null)
        }
    }
}


