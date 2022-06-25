
describe('Hotel', () => {
    beforeEach(() => {
      cy.visit('https://hotel.testplanisphere.dev/en-US/')
    })


  it('Reserve', () => {
    cy.visit('/plans')
  })
})