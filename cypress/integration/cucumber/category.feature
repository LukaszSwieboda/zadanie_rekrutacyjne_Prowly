Feature: Search "prowly" on google.com by category

    Scenario: Search "prowly" on google.com by category GRAPHICS
     Given I open home page
     When type "prowly" to search box and press enter
     And Choose the category GRAPHICS
     Then I should see "prowly" in the graphics results

    Scenario: Search "prowly" on google.com by category VIDEO
     Given I open home page
     When type "prowly" to search box and press enter
     And Choose the category VIDEO
     Then I should see "prowly" in the video results

    Scenario: Search "prowly" on google.com by category ALL
     Given I open home page
     When type "prowly" to search box and press enter
     And Choose the category ALL
     Then I should see "prowly" in the all results