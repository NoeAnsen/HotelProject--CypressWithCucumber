import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("A User with the App URL", () => {
    cy.visit('https://hotel.testplanisphere.dev/en-US/');
  });
When("Go to the Reserve part", () => {
    cy.get('[href="./plans.html"]').click();
  });
Then("Can access that part", () => {
    cy.url(). should('contains', '/plans.html')
  });


