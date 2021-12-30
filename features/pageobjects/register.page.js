

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage{
    /**
     * define selectors using getter methods
     */
    get inputFirstname() {
        return $('#input-firstname');
    }

    get inputLastname() {
        return $('#input-lastname');
    }

    get inputEmail() {
        return $('#input-email');
    }

    get inputTelephone() {
        return $('#input-telephone');
    }

    get inputPassword() {
        return $('#input-password');
    }

    get inputConfirmPassword() {
        return $('#input-confirm');
    }

    get policyBox() {
        return $('[name="agree"]');
    }

    get btnSubmit() {
        return $('[value="Continue"]');
    }

    get btnLogOut(){
        return $('.dropdown-toggle[title="My Account"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async setFirstName (firstname) {
        await this.inputFirstname.setValue(firstname);
    }

    async setLastName (lastname) {
        await this.inputLastname.setValue(lastname);
    }

    async setEmail(email) {
        await this.inputEmail.setValue(email);
    }

    async setTelephone (telephone) {
        await this.inputTelephone.setValue(telephone);
    }

    async setPassword (pass) {
        await this.inputPassword.setValue(pass);
    }

    async setConfirmPass (confirmpass) {
        await this.inputConfirmPassword.setValue(confirmpass);
    }
    
    async checkPolicy(){
        await this.policyBox.click();
    }

    async clickSubmit(){
        await this.btnSubmit.click();
    }

    async logOut(){
        await $('.dropdown-toggle[title="My Account"]').click();
        await $('a[href*="route=account/logout"]').click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    /*open() {
        return super.open('login');
    }*/
}

export default new RegisterPage();
