@LoginTests

Feature: Expert360  Website's Login Tests

  Background:
    Given I open Expert360's home page

  Scenario Outline: Verify If Login Fails when invalid user details entered
    When I navigate to login page
    And I Enter <email> and <password>
    And I click the Login button
    Then Login should not be succesful

    Examples:
      | email       | password |
      | xxx@yyy.com | password |

