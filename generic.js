describe('Dialectica test', () => {
    it('Verify that by entering the Personal Github access token and the repo identifier on the fields,results will be shown in the main screen', () => {
        cy.login('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', 'facebook/react')
        cy.url().should('eq', 'https://refactored--dia-slender-explorer-qa.netlify.app/issues')
    })
})

describe('Dialectica test', () => {
    it('Verify the repo description (if available) is shown', () => {
        cy.login('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', 'facebook/react')
        cy.get('.styles_basicInfo__2HeY0').contains('facebook / react').should('not.be.empty')
    })
})

describe('Dialectica test', () => {
    it('Verify that categories Issues, Pull Requests and Forks are being shown with counters', () => {
        cy.login('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', 'facebook/react')
        cy.get('.styles_active__TGqAK').should('not.be.empty')
        cy.get('[href="/pull-requests"]').should('not.be.empty')
        cy.get('[href="/forks"]').should('not.be.empty')
    })
})


describe('Dialectica test', () => {
    it('Verify that the user can toggle the star button and increase the counter', () => {
        cy.login('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', 'facebook/react')
        let num1, num2
        cy.get('.styles_star__18TfB > :nth-child(1)').then(($span) => {
            num1 = parseInt($span.text())
        })
        cy.get('.styles_star__18TfB > button').then(($span) => {
            const buttonName = $span.text()
            expect(buttonName).to.eq('Star')
        })
        cy.get('.styles_star__18TfB > button').click()
        cy.wait(1000)
        cy.get('.styles_star__18TfB > :nth-child(1)').then(($span) => {
            num2 = parseInt($span.text())
            expect(num2).to.eq(num1 + 1)
        })
    })
})

describe('Dialectica test', () => {
    it('Verify that the user can toggle the star button and increase the counter', () => {
        cy.login('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', 'facebook/react')
        cy.get('.styles_star__18TfB > button').click()
        let num1, num2
        cy.get('.styles_star__18TfB > :nth-child(1)').then(($span) => {
            num1 = parseInt($span.text())
        })
        cy.get('.styles_star__18TfB > button').then(($span) => {
            const buttonName = $span.text()
            expect(buttonName).to.eq('Unstar')
        })
        cy.wait(1000)
        cy.get('.styles_star__18TfB > :nth-child(1)').then(($span) => {
            num2 = parseInt($span.text())
            expect(num2).to.eq(num1 - 1)
        })
    })
})

describe('Dialectica test', () => {
    it('Verify the star counter is shown', () => {
        cy.login('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', 'facebook/react')
        cy.get('.styles_star__18TfB > :nth-child(1)')
            .should('not.be.empty')
            .invoke('text')
            .should('match', /^[0-9]*$/)

    })
})

describe('Dialectica test', () => {
    it('Verify that Language distribution is being shown', () => {
        cy.login('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', 'facebook/react')
        cy.get('.styles_languages__1lgNQ').should('be.visible')
        cy.get('[dy="10"]').then(($span) => {
            const num = $span.text()
            expect(num).to.eq('95.18%')
        })

    })
})

