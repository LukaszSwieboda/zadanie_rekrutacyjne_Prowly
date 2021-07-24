Feature: Search "prowly" on google.com by date

    Scenario: Search "prowly" on google.com by date before 2018
     Given I open home page
     When type "prowly before:2018" to search box and press enter
     Then I should see info before 2018 about "prowly" in the results

    Scenario: Search "prowly" on google.com by date after 2018
     Given I open home page
     When type "prowly after:2018" to search box and press enter
     Then I should see info after 2018 about "prowly" in the results

    Scenario: Search "prowly" on google.com by date between 2015-2017
     Given I open home page
     When type "prowly" to search box and press enter
     When click Tools button
     When click Whenever drop box
     When choose date range
     And fill in from 2015 to 2017
     Then I should see info between 2015-2017 about "prowly" in the results