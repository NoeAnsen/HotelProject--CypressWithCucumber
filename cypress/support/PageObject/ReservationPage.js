class ReservationPage {
    getDateInput() {
        return cy.get('#date')
    }
    getDoneDateButton() {
        return cy.contains('Done')
    }
    getNightsInput() {
        return cy.get('#term')
    }
    getGuestsInput() {
        return cy.get('#head-count')
    }


}
export default ReservationPage