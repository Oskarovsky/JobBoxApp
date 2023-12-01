package com.server.jobboxapp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class JobBoxAppApplication

fun main(args: Array<String>) {
    runApplication<JobBoxAppApplication>(*args)
}
