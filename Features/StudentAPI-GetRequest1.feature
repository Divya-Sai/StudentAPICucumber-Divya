Feature: Get Request for Student API
  Scenario: getStudentsByCourseId with successfully/Failure response code

    When  User set the url with valid id "http://localhost:8080/getStudentsByCourseId/c_1"
    Then  User should verify the status code as "200" and message as "OK"

  Scenario: getStudentsByCourseId with failure response code
    When  User set the url with invalid id "http://localhost:8080/getStudentsByCourseId/001"
    Then  User should verify the status code as "400" and message as "Bad Request"
