//your code here
() => {
    cy.visit(baseUrl + "/main.html");
    cy.get('form').within(() => {
        cy.get("input#name");
        cy.get("label[for='name']");
        cy.get("input#dob");
        cy.get("label[for='dob']");
        cy.get("input#email");
        cy.get("label[for='email']");
        cy.get("input#age");
        cy.get("label[for='age']");
        cy.get("input#password");
        cy.get("label[for='password']");
        cy.get("select#laptop");
        cy.get("label[for='laptop']");
        cy.get("input[name='gender']").should('have.length', 3);
        cy.get("button[type='submit']");
        cy.get("input[type='url']#portfolio");
        cy.get("label[for='portfolio']");
    });
}
