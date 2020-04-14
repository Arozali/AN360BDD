@Honeywell
Feature: Honeywell home

  Scenario Outline: Navigating from AN360 to Honeywell home page
    Given I am on AN360 website
    And I scorll down to PRODUCTS & SERVICES
    When I click on Honeywell Home
    Then I should see Honeywell home page
    And I validate Honeywell home page logo
    Examples:
      |count  |
      |1|
#      |2|
#      |3|
#      |4|
#      |5|
#      |6|
#      |7|
#      |8|
#      |9|
#      |10|
#      |11|
#      |12|
#      |13|
#      |14|
#      |15|
#      |16|
#      |17|
#      |18|
#      |19|
#      |20|
