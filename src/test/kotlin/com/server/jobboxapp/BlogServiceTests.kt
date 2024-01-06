package com.server.jobboxapp

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.server.jobboxapp.entity.BlogPost
import com.server.jobboxapp.repository.BlogRepository
import com.server.jobboxapp.service.BlogService
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.io.File
import java.net.URL

@SpringBootTest
class BlogServiceTests {

    lateinit var blogPostList: List<BlogPost>
    lateinit var jsonMapper: ObjectMapper
    lateinit var blogService: BlogService

    @Autowired
    lateinit var blogRepository: BlogRepository


    @BeforeEach
    fun setUp() {
        jsonMapper = jacksonObjectMapper()
        blogService = BlogService(blogRepository)
        blogRepository.deleteAll()
    }

    @Test
    fun loadThreeBlogPostsAndSaveThem() {
        loadBlogPostsToDatabase()

        Assertions.assertEquals(3, blogService.returnAllBlogPosts().count())
    }

    @Test
    fun deleteBlogPosts() {
        loadBlogPostsToDatabase()

        blogService.deleteBlogPost(1)

        Assertions.assertEquals(2, blogService.returnAllBlogPosts().size)
    }


    @Test
    fun updateBlogPost() {
        loadBlogPostsToDatabase()

        val filePathWithOfferRequests = object {}.javaClass.getResource("/jobOfferDataTest.json")?.file
        var updatedBlogPost =
            jsonMapper.readValue<BlogPost>(File(filePathWithOfferRequests))

        blogService.updateBlogPost(1, updatedBlogPost)

        Assertions.assertEquals("Nowy post4", blogService.returnBlogPostById(1).headline)
        Assertions.assertEquals("text4", blogService.returnBlogPostById(1).text)
        Assertions.assertEquals("autor4", blogService.returnBlogPostById(1).author)
        Assertions.assertEquals("image4", blogService.returnBlogPostById(1).urlToImage)
    }

    @Test
    fun testJpaNativeQuery() {
        loadBlogPostsToDatabase()

        blogService.updateHeadline(1, "Nowy post5")
        blogService.updateText(1, "text5")
        blogService.updateAuthor(1, "autor5")
        blogService.updateUrlToImage(1, "image5")

        Assertions.assertEquals("Nowy post5", blogService.returnBlogPostById(1).headline)
        Assertions.assertEquals("text5", blogService.returnBlogPostById(1).text)
        Assertions.assertEquals("autor5", blogService.returnBlogPostById(1).author)
        Assertions.assertEquals("image5", blogService.returnBlogPostById(1).urlToImage)
    }

    fun loadBlogPostsList() {
        blogPostList =
            jsonMapper.readValue(URL("file:///C:/Git/JobBoxApp/src/test/kotlin/resources/blogPosts.json"))
    }

    fun loadBlogPostsToDatabase() {
        loadBlogPostsList()
        blogPostList.stream().forEach {
            blogService.createBlogPost(it)
        }
    }
}
