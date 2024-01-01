package com.server.jobboxapp.entity.employer


enum class Industry(
    val title: String,
    val desc: String
) {
    INFORMATION_TECHNOLOGY (title = "Information Technology", desc = "info"),
    FINANCE (title = "Finance", desc = "info"),
    CONSULTING (title = "Consulting", desc = "info"),
    MARKETING (title = "Marketing", desc = "info"),
    HEALTHCARE(title = "Healthcare", desc = "info"),
    E_COMMERCE(title = "E-commerce", desc = "info"),
    BUSINESS(title = "Business", desc = "info"),
    LOGISTIC(title = "Logistic", desc = "info"),
    ENERGY(title = "Energy", desc = "info"),
    FOOD(title = "Food", desc = "info"),
    FASHION(title = "Fashion", desc = "info"),
    EDUCATION(title = "Education", desc = "info"),
    TRAVEL(title = "Travel", desc = "info"),
    AUTOMOTIVE(title = "Automotive", desc = "info")
}

enum class EmployerCountry(val title: String, val description: String) {
    DENMARK("Denmark", ""),
    SWEDEN("Sweden", ""),
    FINLAND("Finland", ""),
    NORWAY("Norway", ""),
    USA("USA", ""),
    UK("United Kingdom", ""),
    GERMANY("Germany", ""),
    REMOTE("Remote", "")

}








