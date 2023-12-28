//package com.server.jobboxapp.service
//
//import com.server.jobboxapp.entity.Employer
//import com.server.jobboxapp.entity.Offer
//import com.server.jobboxapp.repository.EmployerRepository
//import com.server.jobboxapp.repository.OfferRepository
//import jakarta.annotation.PostConstruct
//import mu.KotlinLogging
//import org.springframework.stereotype.Service
//
//@Service
//class DefaultDataService(
//    val employerRepository: EmployerRepository,
//    val offerRepository: OfferRepository
//) {
//
//    private val logger = KotlinLogging.logger {}
//
//    @PostConstruct
//    fun initDefaultData() {
//        employerRepository.saveAll(listOf(
//            Employer(name = "FirstEmployer", description = "Some information 111"),
//            Employer(name = "SecondEmployer", description = "Some information 222"),
//            Employer(name = "ThirdEmployer", description = "Some information 333"),
//            Employer(name = "FourthEmployer", description = "Some information 444"),
//            Employer(name = "FifthEmployer", description = "Some information 555"),
//            Employer(name = "SixthEmployer", description = "Some information 666"),
//            Employer(name = "SeventhEmployer", description = "Some information 777"),
//            Employer(name = "EightEmployer", description = "Some information 888"),
//            Employer(name = "NinthEmployer", description = "Some information 999")
//        ))
//
//        offerRepository.saveAll(
//            listOf(
//                Offer(title = "OneOffer", description = "short offer 1", employer = employerRepository.findById(1).orElseThrow()),
//                Offer(title = "TwoOffer", description = "short offer 1", employer = employerRepository.findById(2).orElseThrow()),
//                Offer(title = "ThreeOffer", description = "short offer 1", employer = employerRepository.findById(1).orElseThrow()),
//                Offer(title = "FourOffer", description = "short offer 1", employer = employerRepository.findById(3).orElseThrow()),
//                Offer(title = "FiveOffer", description = "short offer 1", employer = employerRepository.findById(4).orElseThrow()),
//                Offer(title = "SixOffer", description = "short offer 1", employer = employerRepository.findById(1).orElseThrow()),
//                Offer(title = "SevenOffer", description = "short offer 1", employer = employerRepository.findById(6).orElseThrow()),
//                Offer(title = "EightOffer", description = "short offer 1", employer = employerRepository.findById(6).orElseThrow()),
//                Offer(title = "NineOffer", description = "short offer 1", employer = employerRepository.findById(7).orElseThrow()),
//                Offer(title = "TenOffer", description = "short offer 1", employer = employerRepository.findById(3).orElseThrow()),
//                Offer(title = "ElevenOffer", description = "short offer 1", employer = employerRepository.findById(2).orElseThrow()),
//                Offer(title = "TwelveOffer", description = "short offer 1", employer = employerRepository.findById(1).orElseThrow()),
//                Offer(title = "ThirteenOffer", description = "short offer 1", employer = employerRepository.findById(5).orElseThrow()),
//                Offer(title = "FourteenOffer", description = "short offer 1", employer = employerRepository.findById(8).orElseThrow()),
//                Offer(title = "FifteenOffer", description = "short offer 1", employer = employerRepository.findById(8).orElseThrow()),
//                Offer(title = "SixteenOffer", description = "short offer 1", employer = employerRepository.findById(7).orElseThrow()),
//                Offer(title = "SeventeenOffer", description = "short offer 1", employer = employerRepository.findById(9).orElseThrow()),
//                Offer(title = "EighteenOffer", description = "short offer 1", employer = employerRepository.findById(1).orElseThrow()),
//                Offer(title = "NineteenOffer", description = "short offer 1", employer = employerRepository.findById(1).orElseThrow()),
//                Offer(title = "TwentyOffer", description = "short offer 1", employer = employerRepository.findById(1).orElseThrow()),
//            )
//        )
//    }
//}
