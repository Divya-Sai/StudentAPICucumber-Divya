Feature: Delete the student
  Scenario: User able to delete a student record successfully
    When user able to delete a student record "http://localhost:8080/getStudentsByCourseId/c_1"
    Then check the status code as 200

  Scenario: User get a failure repose when deleting student record
    When user failed to delete a student record "http://localhost:8080/getStudentsByCourseId/001"
    Then check the status code as 400
