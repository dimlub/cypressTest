describe('Dialectica test', () => {
    it('Verify that on Forks category the Description, Owner / name, Stars and Created fields are being shown in the list', () => {
        cy.login('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', 'facebook/react')
        cy.get('[href="/forks"]').click()
        cy.get('tr > :nth-child(1) > span').should(($p) => {
            expect($p).to.have.text('Description')
        })
        cy.get('tr > :nth-child(2) > span').should(($p) => {
            expect($p).to.have.text('Owner / name')
        })
        cy.get('tr > :nth-child(3) > span').should(($p) => {
            expect($p).to.have.text('Stars')
        })
        cy.get('tr > :nth-child(4) > span').should(($p) => {
            expect($p).to.have.text('Created')
        })
    })
})

describe('Dialectica test', () => {
    it('Verify that on Forks category, user can filter on Public, Private and All', () => {
        cy.login('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', 'facebook/react')
        let publicF,privateF,allF
        cy.get('[href="/forks"]').click()
        cy.get('.styles_title__uhysM > span').then(($span) => {
            publicF = $span.text()
        })
        cy.get('select').select('private')
        cy.get('select').should('have.value', 'private')
        cy.get('.styles_title__uhysM > span').then(($span) => {
            privateF = $span.text()
            expect(publicF).to.not.equal(privateF)
        })

        cy.get('select').select('all')
        cy.get('select').should('have.value', 'all')
        cy.get('.styles_title__uhysM > span').then(($span) => {
            allF = $span.text()
            expect(privateF).to.not.equal(allF)
        })

    })
})

describe('Dialectica test', () => {
    it('Verify that on Forks category, when user filters on Private there should be no items on the list', () => {
        cy.login('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', 'facebook/react')

        cy.get('[href="/forks"]').click()
        cy.get('select').select('private')
        cy.get('select').select('private')
        cy.get('.styles_title__uhysM > span').then(($span) => {
           const num = $span.text()
            expect(num).to.equal('(0)')
        })
    })
})

describe('Dialectica test', () => {
    it('The Owner/name should change for each row individually and not overwrite the whole batch of items.', () => {
        cy.login('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', 'facebook/react')

        cy.get('[href="/forks"]').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').then(($span) => {
            const owner1 = $span.text()

            cy.get('.styles_loadMoreWrapper__UNA_a > button').click()

            cy.get('tbody > :nth-child(6) > :nth-child(2)').then(($span) => {
                const owner2 = $span.text()
                expect(owner1).to.not.equal(owner2)
            })
        })
    })
})



