Feature: covid19

  Scenario Outline: as a user i should be able to click covid19 information on AN360 website
    Given I am on AN360 website
    When I click on covid19 link
    And I should see popup "SCHEDULED MAINTENANCE"
    Then I close the display message
    Examples:
      |count  |
      |1|
      |2|
      |3|
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

