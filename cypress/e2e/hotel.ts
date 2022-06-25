import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("a User with App URL", () => {
    cy.visit('https://hotel.testplanisphere.dev/en-US/');
  });
When("Go to the booking part", () => {
    cy.get('[href="./plans.html"]').click();
  });
Then("Can access that part", () => {
    cy.url(). should('contains', '/plans.html')
  });


