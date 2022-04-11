package stepDefinitions;

import io.cucumber.java.en.*;

import java.util.stream.Collectors;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;

/*
given()
	set cookies, add auth, add param, set headers info etc....
when()
	get, post,put,delete...

then()
	validate status code, extract response, extract headers cookies & response body....
 */

public class steps1 {

    @When("User set the url with valid id {string}")
    public void user_set_the_url_with_valid_id(String url) {
      when().get(url);
    }

    @When("User set the url with invalid id {string}")
    public void user_set_the_url_with_invalid_id(String invalidURL) {
       when().get(invalidURL).
               then().statusCode(200);

    }

    @Then("User should verify the status code as {string} and message as {string}")
    public void user_should_verify_the_status_code_as_and_message_as(String statusCode, String message) {


    }










}
