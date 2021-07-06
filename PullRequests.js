describe('Dialectica test', () => {
    it('Verify that on Pull Requests category the Tile, Author, State, Comments and Created fields are being shown in the list', () => {
        cy.login('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', 'facebook/react')
        cy.get('[href="/pull-requests"]').click()
        cy.get('tr > :nth-child(1) > span').should(($p) => {
            expect($p).to.have.text('Title')
        })
        cy.get('tr > :nth-child(2) > span').should(($p) => {
            expect($p).to.have.text('Author')
        })
        cy.get('tr > :nth-child(3) > span').should(($p) => {
            expect($p).to.have.text('State')
        })
        cy.get('tr > :nth-child(4) > span').should(($p) => {
            expect($p).to.have.text('Comments')
        })
        cy.get('tr > :nth-child(5) > span').should(($p) => {
            expect($p).to.have.text('Created')
        })
    })
})

describe('Dialectica test', () => {
    it('Verify that on Pull Requests category, user can filter on Open, Closed and Merged', () => {
        cy.login('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', 'facebook/react')
        let openP,closedP,mergedP
        cy.get('[href="/pull-requests"]').click()
        cy.get('.styles_title__uhysM > span').then(($span) => {
            openP = $span.text()
        })
        cy.get('select').select('closed')
        cy.get('select').should('have.value', 'closed')
        cy.get('.styles_title__uhysM > span').then(($span) => {
            closedP = $span.text()
            expect(openP).to.not.equal(closedP)
        })

        cy.get('select').select('merged')
        cy.get('select').should('have.value', 'merged')
        cy.get('.styles_title__uhysM > span').then(($span) => {
            mergedP = $span.text()
            expect(closedP).to.not.equal(mergedP)
        })

    })
})

describe('Dialectica test', () => {
    it('Verify that on Pull Requests category, the user can press the Load more button to show more items on the list', () => {
        cy.login('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', 'facebook/react')
        cy.get('[href="/pull-requests"]').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 6)
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 11)
    })
})

describe('Dialectica test', () => {
    it('Verify that on Pull Requests, the user can sort the list on comments counter on Asc order.', () => {
        cy.login('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', 'facebook/react')
        cy.get('[href="/pull-requests"]').click()
        cy.get('thead > tr > :nth-child(4)').click()
        cy.get('tbody > :nth-child(1) > :nth-child(4)').then($elements => {
            const strings = [...$elements].map(el => el.innerText)
            expect(strings).to.deep.equal([...strings].sort())
        })
    })
})

describe('Dialectica test', () => {
    it('Verify that on Pull Requests category, the user can load more items on the list even after sorting on comments or created for all 3 filters(Open Closed, All)', () => {
        cy.login('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', 'facebook/react')
        cy.get('[href="/pull-requests"]').click()

        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 6)
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 11)

        cy.get('select').select('closed')
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 6)
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 11)

        cy.get('select').select('merged')
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 6)
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 11)
    })
})

describe('Dialectica test', () => {
    it('Verify that on Pull Requests category, the user cannnot load more items on the list when sorted on comments', () => {
        cy.login('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', 'facebook/react')
        cy.get('[href="/pull-requests"]').click()
        cy.get('thead > tr > :nth-child(4)').click()
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_loadMoreWrapper__UNA_a').contains('End of list')

        cy.get('select').select('closed')
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_loadMoreWrapper__UNA_a').contains('End of list')

        cy.get('select').select('merged')
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_loadMoreWrapper__UNA_a').contains('End of list')
    })
})

