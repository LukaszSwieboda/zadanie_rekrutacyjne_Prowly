Feature: Search "prowly" on google.com by date

    Scenario: Search "prowly" on google.com by date before 2018
     Given I open home page
     When type "prowly before:2018" to search box and press enter
     Then I should see info before 2018 about "prowly" in the results

    

    