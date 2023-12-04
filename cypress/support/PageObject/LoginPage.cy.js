import localisateur from './Localisateur.json'
class LoginPage {
    enterURL() {
     cy.visit(
       "/"
     );
     cy.url().should('include','web/index.php/auth/login')
   }
    enterUserNamePassword(username, password) {
     cy.get(localisateur.usernameInputBox).type(username);
     cy.get(localisateur.passwordInputBox).type(password);
   }
    clickSubmitButton() {
     cy.get(localisateur.loginButton).click();
   }
    verifyLogin() {
     cy.url().should("include", "web/index.php/dashboard/index");
     cy.get(localisateur.sideBar).should('be.visible')
   }
 }
 const login = new LoginPage();
 export default login;