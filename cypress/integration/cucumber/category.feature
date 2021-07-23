Feature: Search "prowly" on google.com 

    Scenario: Search "prowly" on google.com by category GRAPHICS
     Given I open home page
     When type "prowly" to search box and press enter
     Then I should see "prowly" in the graphics results