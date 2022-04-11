$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/StudentAPI-GetRequest.feature");
formatter.feature({
  "name": "Get Request for Student API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "getStudentsByCourseId with successfully/Failure response code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User set the url with valid id \"http://localhost:8080/getStudentsByCourseId/c_1\" and User should verify the status code as 200",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.user_set_the_url_with_valid_id_and_User_should_verify_the_status_code_as(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify the message as \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.user_verify_the_message_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "getStudentsByCourseId with failure response code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User set the url with invalid id \"http://localhost:8080/getStudentsByCourseId/001\" and User should verify the status code as 400",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.user_set_the_url_with_invalid_id_and_User_should_verify_the_status_code_as(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify the message as \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.user_verify_the_message_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:Features/StudentAPI-GetRequest1.feature");
formatter.feature({
  "name": "Get Request for Student API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "getStudentsByCourseId with successfully/Failure response code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User set the url with valid id \"http://localhost:8080/getStudentsByCourseId/c_1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps1.user_set_the_url_with_valid_id(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should verify the status code as \"200\" and message as \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps1.user_should_verify_the_status_code_as_and_message_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "getStudentsByCourseId with failure response code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User set the url with invalid id \"http://localhost:8080/getStudentsByCourseId/001\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps1.user_set_the_url_with_invalid_id(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should verify the status code as \"400\" and message as \"Bad Request\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps1.user_should_verify_the_status_code_as_and_message_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:Features/StudentAPI-PostRequest.feature");
formatter.feature({
  "name": "Post Request for Student API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should add a new student sucessfully",
  "description": "    Given",
  "keyword": "Scenario"
});
});