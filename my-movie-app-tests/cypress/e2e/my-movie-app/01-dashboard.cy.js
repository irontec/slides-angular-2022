describe('Dashboard', ()=>{

    beforeEach('Interceptar peticiones', ()=>{
        cy.intercept('GET', 'https://randomuser.me/api/').as('user')
    })

    describe('Ficha de usuario', ()=>{
        it('Se realiza la petición del usuario', ()=>{
            cy.visit('/')
            cy.wait('@user').then((req) =>{
                expect(req.response.statusCode).to.eq(200)
            })
        })
        it('Se muestra la ficha', ()=>{
            cy.get('profile').should('be.visible')
        })
        it('El título se muestra bien', ()=>{
            cy.get('h1').should('contain', 'Dashboard')
        })
    })
    
})