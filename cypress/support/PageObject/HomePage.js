class HomePage {
    getReserveButton() {
        return cy.get('[href="./plans.html"]')
    }
// Reserve page
    getFirstReservationButton() {
        return cy.get('a[href="./reserve.html?plan-id=0"]')
    }


}
export default HomePage