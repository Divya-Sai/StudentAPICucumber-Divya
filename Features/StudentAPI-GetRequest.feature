Feature: Get Request for Student API
  Scenario: getStudentsByCourseId with successfully/Failure response code
    When  User set the url with valid id "http://localhost:8080/getStudentsByCourseId/c_1" and User should verify the status code as 200
    And  User verify the message as "OK"

  Scenario: getStudentsByCourseId with failure response code
    When  User set the url with invalid id "http://localhost:8080/getStudentsByCourseId/001" and User should verify the status code as 400
    And  User verify the message as "Bad Request"
