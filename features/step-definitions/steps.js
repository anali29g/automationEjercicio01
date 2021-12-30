import { Given, When, Then } from '@wdio/cucumber-framework';

import RegisterPage from '../pageobjects/register.page';
import Page from '../pageobjects/page'
import SecurePage from '../pageobjects/secure.page';

const pages = {
    register: RegisterPage
}

Given(/^User is in the register page$/, async () => {
    await Page.open()
});

When(/^User does not fill any field$/, async () => {
    await RegisterPage.checkPolicy();
    await RegisterPage.clickSubmit();
});

Then(/^Error message detailing what mandatory fields are missing$/, async () => {
    await expect(SecurePage.flashAlert).toBeExisting();
    //await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given(/^User fills (.*) (.*) (.*) (.*) (.*) (.*) with scenario description$/, async (name, lastname, telephone, pass, confpass, email) => {
    await Page.open()
    await RegisterPage.setFirstName(name);
    await RegisterPage.setLastName(lastname);
    await RegisterPage.setTelephone(telephone);
    await RegisterPage.setPassword(pass);
    await RegisterPage.setConfirmPass(confpass);
    await RegisterPage.setEmail(email);
});

When(/^User Submits$/, async () => {
    await RegisterPage.checkPolicy();
    await RegisterPage.clickSubmit();
});

Then(/^A (.*) detailing the warning$/, async (message) => {
    await expect(SecurePage.Warning).toBeExisting();
    await expect(SecurePage.Warning).toHaveTextContaining(message);
});

Then(/^A (.*) detailing the error$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When(/^User Submits without checking Privacy Policy box$/, async ()=>{
    await RegisterPage.clickSubmit();
});


Then(/^A (.*) confirmation must appear$/, async(message)=>{
    await expect(SecurePage.confirmationMessage).toBeExisting();
    await expect(SecurePage.confirmationMessage).toHaveTextContaining(message);
    await RegisterPage.logOut();
});