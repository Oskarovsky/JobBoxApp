package com.server.jobboxapp.entity.joboffer


enum class OfferCategory(
    val title: String,
    val desc: String
) {
    DEVOPS(title = "DevOps", desc = "info"),
    PRODUCT_MANAGEMENT(title = "Product Management", desc = "info"),
    FRONTEND(title = "Frontend", desc = "info"),
    BACKEND(title = "Backend", desc = "info"),
    FULLSTACK(title = "Fullstack", desc = "info"),
    IT_SECURITY(title = "IT Security", desc = "info"),
    CLOUD_COMPUTING(title = "Cloud Computing", desc = "info"),
    ANALYTICS(title = "Analytics", desc = "info"),
    QUALITY_ASSURANCE(title = "Quality Assurance", desc = "info"),
    IT_OPERATIONS(title = "IT Operations", desc = "info"),
    DATABASE_MANAGEMENT(title = "Database Management", desc = "info"),
    ENTERPRISE_ARCHITECTURE(title = "Enterprise Architecture", desc = "info"),
    MACHINE_LEARNING(title = "Machine Learning", desc = "info"),
    ROBOTIC_PROCESS_AUTOMATION(title = "Robotic Process Automation", desc = "info"),
    AGILE(title = "Agile", desc = "info"),
    SOCIAL_MEDIA(title = "Social Media", desc = "info"),
    PROJECT_MANAGEMENT(title = "Project Management", desc = "info"),
    UI_UX(title = "UI/UX", desc = "info"),
    DATA_ENGINEERING(title = "Data Engineering", desc = "info"),
    IT_SUPPORT(title = "IT support", desc = "info"),
    ERP(title = "ERP", desc = "info"),
    ANALYST(title = "Analyst", desc = "info"),
    ADMIN(title = "Admin", desc = "info")
}

enum class EmploymentType(val title: String, val description: String) {
    FULL_TIME("Full Time", "Standard full-time employment"),
    PART_TIME("Part Time", "Part-time employment with reduced hours"),
    INTERNSHIP("Internship", "Temporary position for gaining work experience"),
    STUDENT("Student", "")
}

enum class EmploymentModel(val title: String, val description: String) {
    REMOTE("Remote", "Fully remote or telecommuting employment"),
    HYBRID("Hybrid", "Combination of in-office and remote work"),
    ONSITE("On-site", "100% in office")
}

enum class Country(val title: String, val description: String) {
    DENMARK("Denmark", ""),
    SWEDEN("Sweden", ""),
    FINLAND("Finland", ""),
    NORWAY("Norway", ""),
    REMOTE("Remote", "")
}

enum class ExperienceLevel(val title: String, val description: String) {
    JUNIOR("Junior", ""),
    MID("Mid", ""),
    SENIOR("Senior", ""),
    ENTRY_LEVEL("Entry Level", ""),
    EXPERIENCED("Experienced", ""),
    LEAD("Lead", ""),
    PRINCIPAL("Principal", "")
}






