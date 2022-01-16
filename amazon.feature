Feature: Amazon page 

    search shoes on amazon and validate it

    Scenario: open seach engine page
    Given user navigate to the amazon page
    When user seach shoes
    Then user verify value 
    And user apply filter 
    And validate specific product details
    And product add to cart
     