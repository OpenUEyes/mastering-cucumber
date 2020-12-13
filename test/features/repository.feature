Feature: Find repository

    Scenario: enter value to search input
    Given go to topics page
    When I click on the search input
    Then I type text to search input

    Scenario: forward to search page
    Given I am on the topics page
    When I push enter
    Then should forward to search page

    Scenario: select typescript filter
    Given I am on the search page
    When I click on the typescript filter
    Then typescript repositories should be displayed
    
    Scenario: select typescript repository
    Given I am on the search page
    When I click on the 1 typescript repository
    Then should forward to repository page