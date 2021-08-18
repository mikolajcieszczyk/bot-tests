describe('Bot testing', () => {
    const baseUrl = 'https://bot.dialogflow.com/e9b19ef3-d01a-4423-9d9d-017366afc942';

    const openWebpage = () => {
        cy.visit(baseUrl);
    }

    const getIframeDocument = () => {
        return cy
            .get('iframe')
            .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        return getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }

    it("Typing 'hej' and testing response", () => {
        openWebpage();
        getIframeBody()
            .find('#query')
            .type('hej')
            .type('{enter}');
        getIframeBody()
            .find('.server-response')
            .contains('hej co za klej');
    });

    it("Typing 'czesc' and testing response", () => {
        openWebpage();
        getIframeBody()
            .find('#query')
            .type('czesc')
            .type('{enter}');
        getIframeBody()
            .find('.server-response')
            .contains('czesc nie ma co jesc');
    });

    it("Typing 'witam' and testing response", () => {
        openWebpage();
        getIframeBody()
            .find('#query')
            .type('witam')
            .type('{enter}');
        getIframeBody()
            .find('.server-response')
            .contains('witam i o zdrowie pytam');
    })
})