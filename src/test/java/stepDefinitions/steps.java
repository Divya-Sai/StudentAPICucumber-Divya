package stepDefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static io.restassured.RestAssured.when;

/*
given()
	set cookies, add auth, add param, set headers info etc....
when()
	get, post,put,delete...

then()
	validate status code, extract response, extract headers cookies & response body....
 */

public class steps {

   /* @When("User set the url with valid id {string} and User should verify the status code as {int} and message as {string}")
    public void user_set_the_url_with_valid_id_and_User_should_verify_the_status_code_as_and_message_as(String url, Integer stsCd, String message) {
        when().get(url).then().statusCode(stsCd);
    }


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


    }*/

    @When("User set the url with valid id {string} and User should verify the status code as {int}")
    public void user_set_the_url_with_valid_id_and_User_should_verify_the_status_code_as(String url, Integer stsCd) {
        when().get(url).then().statusCode(stsCd);
    }


    @When("User set the url with invalid id {string} and User should verify the status code as {int}")
    public void user_set_the_url_with_invalid_id_and_User_should_verify_the_status_code_as(String invalidurl, Integer stsCd) {
        when().get(invalidurl).then().statusCode(stsCd);
    }

    @When("User verify the message as {string}")
    public void user_verify_the_message_as(String message) {


    }

    @When("user able to delete a student record {string}")
    public void user_able_to_delete_a_student_record(String URI) {
       when().delete(URI).then()
               .statusCode(200)
               .log().body();
    }

    @Then("check the status code as {int}")
    public void check_the_status_code_as(Integer int1) {
        

    }

    @When("user failed to delete a student record {string}")
    public void user_failed_to_delete_a_student_record(String url) {
        when().delete(url);
    }









}
