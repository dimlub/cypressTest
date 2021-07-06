describe('Dialectica test', () => {
    it('Verify that on Issues category the number, Tile, Author, State, Comments and Created fields are being shown in the list', () => {
        cy.login('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', 'facebook/react')
        cy.get('tr > :nth-child(1) > span').should(($p) => {
            expect($p).to.have.text('#')
        })
        cy.get('tr > :nth-child(2) > span').should(($p) => {
            expect($p).to.have.text('Title')
        })
        cy.get('tr > :nth-child(3) > span').should(($p) => {
            expect($p).to.have.text('Author')
        })
        cy.get('tr > :nth-child(4) > span').should(($p) => {
            expect($p).to.have.text('State')
        })
        cy.get('tr > :nth-child(5) > span').should(($p) => {
            expect($p).to.have.text('Comments')
        })
        cy.get('tr > :nth-child(6) > span').should(($p) => {
            expect($p).to.have.text('Created')
        })
    })
})

describe('Dialectica test', () => {
    it('Verify that on Issues category, user can filter on Open, Closed and All issues', () => {
        cy.login('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', 'facebook/react')
        let openI,closedI,allI
        cy.get('.styles_title__uhysM > span').then(($span) => {
            openI = $span.text()
        })
        cy.get('select').select('closed')
        cy.get('select').should('have.value', 'closed')
        cy.get('.styles_title__uhysM > span').then(($span) => {
           closedI = $span.text()
            expect(openI).to.not.equal(closedI)
        })

        cy.get('select').select('all')
        cy.get('select').should('have.value', 'all')
        cy.get('.styles_title__uhysM > span').then(($span) => {
            allI = $span.text()
            expect(closedI).to.not.equal(allI)
        })

    })
})

describe('Dialectica test', () => {
    it('Verify that on Issues category, the user can press the Load more button to show more items on the list', () => {
        cy.login('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', 'facebook/react')
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 6)
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 11)
    })
})

describe('Dialectica test', () => {
    it('Verify that on Issues category, the user can sort the list on comments counter on Asc order.', () => {
        cy.login('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', 'facebook/react')
        cy.get('thead > tr > :nth-child(5)').click()
        cy.get('tbody > :nth-child(1) > :nth-child(5)').then($elements => {
            const strings = [...$elements].map(el => el.innerText)
            expect(strings).to.deep.equal([...strings].sort())
        })
    })
})

describe('Dialectica test', () => {
    it('Verify that on Issues category, the user can load more items on the list even after sorting on comments or created for all 3 filters(Open Closed, All)', () => {
        cy.login('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', 'facebook/react')
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 6)
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 11)

        cy.get('select').select('closed')
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 6)
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 11)

        cy.get('select').select('all')
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 6)
        cy.get('.styles_loadMoreWrapper__UNA_a > button').click()
        cy.get('.styles_table__2oqWN').find('tr').should('have.length', 11)
    })
})
