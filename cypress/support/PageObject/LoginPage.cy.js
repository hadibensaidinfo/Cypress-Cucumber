import localisateur from './Locator.json'
class LoginPage {
    enterURL() {
     cy.visit(
       "/"
     );
     cy.url().should('include','web/index.php/auth/login')
   }
    enterUserNamePassword(username, password) {
     cy.get(localisateur.email).type(username);
     cy.get(localisateur.password).type(password);
   }
    clickSubmitButton() {
     cy.get(localisateur.boutonLogin).click();
   }
    verifyLogin() {
     cy.url().should("include", "web/index.php/dashboard/index");
     cy.get(localisateur.sideBar).should('be.visible')
   }
 }
 const login = new LoginPage();
 export default login;