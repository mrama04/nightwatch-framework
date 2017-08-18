@HeaderLinksPageTest

Feature: Expert360  Website's Header Links Tests

  Background:
    Given I open Expert360's home page

  Scenario Outline: Verify if clicking on a link takes me to the right page
    When I navigate to <link> page
    Then The page title should be <title>

    Examples:
      | link      | title                           |
      | login     | Login - Expert360               |
      | services  | Consulting Services - Expert360 |

