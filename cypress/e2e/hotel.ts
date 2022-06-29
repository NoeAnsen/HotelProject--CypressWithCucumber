import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../support/PageObject/HomePage';
import ReservationPage from '../support/PageObject/ReservationPage.js';


const homePage=new HomePage();
const reservationPage=new ReservationPage();


Given("A User with the App URL", () => {
    cy.visit('https://hotel.testplanisphere.dev/en-US/');
  });
When("Go to the Reserve part", () => {
    homePage.getReserveButton().click()
  });
Then("Can access that part", () => {
    cy.url(). should('contains', '/plans.html')
  });


  Given("A user that choose a room", () => {
    cy.visit('https://hotel.testplanisphere.dev/en-US/');
    homePage.getReserveButton().click()
    //remove target property, so the page is open using the same one
    homePage.getFirstReservationButton().click().invoke('removeAttr', 'target').click()
  });

  When("Complete all the fields", () => {
    //datepicker:
    const dayjs = require('dayjs')
    const targetDate = dayjs()
    .add(1, 'day')
    .format('DD/MM/YYYY')
    reservationPage.getDateInput().clear().type(targetDate).type('{enter}')
    reservationPage.getDoneDateButton().click()

   // cy.log(targetDate)  
   //Stay nights
   reservationPage.getNightsInput().click().type('{uparrow}{uparrow}')
   //Guest number
   reservationPage.getGuestsInput().click().type('{uparrow}')

   



    
  });
  




