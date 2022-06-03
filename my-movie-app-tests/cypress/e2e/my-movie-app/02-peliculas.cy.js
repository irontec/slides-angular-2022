describe('Peliculas', ()=>{

    beforeEach('Interceptar peticiones', ()=>{
        cy.intercept('GET', '**/movie/popular**').as('movies')
    })

    before('Visitar página', ()=>{
        cy.visit('/')
    })

    context('Listado de películas', ()=>{
        it('Accedemos al listado y se realiza la petición de peliculas', ()=>{
            cy.get('[routerlink="/movies"]').click()
            cy.wait('@movies').then((req) =>{
                expect(req.response.statusCode).to.eq(200)
            })
        })
        it('El path es el correcto', ()=>{
            cy.url().should('contain', '/movies')
        })    
        it('Se muestran 20 películas', ()=>{
            cy.get('movie').should('have.length', 20)
        })
    })

    context('Ficha película', ()=>{

        it('Accedemos a la descripción de la película y se muestra el detalle', ()=>{
            cy.get('movie').eq(0).click()
            cy.get('movies-detail-page').should('exist').and('be.visible')
        })
        it('La ficha tiene una imagen jpg', ()=>{
            cy.get('img').should('be.visible')
            cy.get('img').invoke('attr', 'src').should('contain', '.jpg')
        })
        it('La sinopsis tiene contenido', ()=>{
            cy.get('.overview > p').invoke('text').should('not.be.empty')
        })
        it('El botón se activa al rellenar el formulario', ()=>{
            cy.get('.mat-raised-button').should('have.attr', 'disabled')
            cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').eq(0).type('Nombre')
            cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').eq(1).click()
            cy.contains('Drama').click()
            cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').eq(2).type('Mensaje')
            cy.get('.mat-raised-button').should('not.have.attr', 'disabled')

        })

    })

})